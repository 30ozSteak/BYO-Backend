const express = require("express");
const app = express();
const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);
app.name = "APIary";

app.set("port", process.env.PORT || 3000);

app.use(express.json());

app.get("/api/v1/locations", (request, response) => {
  database("locations")
    .select()
    .then(locations => {
      response.status(200).json(locations);
    })
    .catch(error => {
      response.status(500).json(error);
    });
});

app.post("/api/v1/locations", (request, response) => {
  const location = request.body;

  if (!(location.name && location.abbr && location.count)) {
    return response.status(422).send({
      message:
        "Your request body was not correct. Please send the following format: {name: <String>, abbr: <String>, count: <Integer>}"
    });
  }
  database("locations")
    .select()
    .then(locations => {
      const isIncluded = locations.some(existingLocation => {
        const sameName = existingLocation.name === location.name;
        const sameAbbr = existingLocation.abbr === location.abbr;
        return sameName && sameAbbr;
      });
      if (isIncluded) {
        return response.status(409).send({
          message:
            "You havent successfully added a location because its there already please try a PATCH instead"
        });
      }
      database("locations")
        .insert(location, "id")
        .then(location => {
          response
            .status(201)
            .send("you did it and added a location for bees to hang out in");
        })
        .catch(error => {
          response.status(500).json(error);
        });
    });
});

app.get("/api/v1/location/:id", (request, response) => {
  let { id } = request.params;
  database("bees")
    .where("location_id", id)
    .select()
    .then(bees => {
      response.status(200).json(bees);
    })
    .catch(error => {
      response.status(500).json(error);
    });
});

app.post("/api/v1/location/:id", (request, response) => {
  const newBee = request.body;
  if (!(newBee.name && newBee.desc && newBee.beeFact)) {
    response.status(422).send({
      message: "You messed up"
    });
  } else {
    response.status(201).send({ message: `Bee ${newBee.name} added.` });
  }
});

app.listen(app.get("port"), () => {
  console.log(`${app.name} is running on ${app.get("port")}.`);
});

module.exports = app;

const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true });
const { writeFileSync } = require("fs");
var i = 0;

var runItAgain = function(i) {
  let wordList = [
    "Anthophora abroniae",
    "Anthophora abrupta",
    "Anthophora affabilis",
    "Anthophora bomboides",
    "Anthophora californica",
    "Anthophora centriformis",
    "Anthophora cockerelli",
    "Anthophora columbariae",
    "Anthophora coptognatha",
    "Anthophora crotchii",
    "Anthophora dammersi",
    "Anthophora edwardsii",
    "Anthophora erythrothorax",
    "Anthophora estebana",
    "Anthophora exigua",
    "Anthophora flavocincta",
    "Anthophora flexipes",
    "Anthophora forbesi",
    "Anthophora fulvicauda",
    "Anthophora hololeuca",
    "Anthophora linsleyi",
    "Anthophora maculifrons",
    "Anthophora mortuaria",
    "Anthophora neglecta",
    "Anthophora nigritula",
    "Anthophora pachyodonta",
    "Anthophora pacifica",
    "Anthophora peritomae",
    "Anthophora petrophila",
    "Anthophora phaceliae",
    "Anthophora phenax",
    "Anthophora platti",
    "Anthophora porterae",
    "Anthophora rhodothorax",
    "Anthophora salazariae",
    "Anthophora signata",
    "Anthophora terminalis",
    "Anthophora urbana",
    "Anthophora ursina",
    "Anthophora vannigera",
    "Anthophorula albata",
    "Anthophorula albicans",
    "Anthophorula albovestita",
    "Anthophorula cerei",
    "Anthophorula chionura",
    "Anthophorula cockerelli",
    "Anthophorula completa",
    "Anthophorula deserticola",
    "Anthophorula eriogoni",
    "Anthophorula euphorbiae",
    "Anthophorula minima",
    "Anthophorula nitens",
    "Anthophorula palmarum",
    "Anthophorula sidae",
    "Anthophorula torticornis",
    "Anthophorula varleyi",
    "Anthophorula yoloensis",
    "Apis mellifera",
    "Bombus affinis",
    "Bombus appositus",
    "Bombus ashtoni",
    "Bombus auricomus",
    "Bombus bifarius",
    "Bombus bimaculatus",
    "Bombus borealis",
    "Bombus californicus",
    "Bombus caliginosus",
    "Bombus centralis",
    "Bombus citrinus",
    "Bombus crotchii",
    "Bombus fernaldae",
    "Bombus fervidus",
    "Bombus flavifrons",
    "Bombus franklini",
    "Bombus griseocollis",
    "Bombus huntii",
    "Bombus impatiens",
    "Bombus insularis",
    "Bombus melanopygus",
    "Bombus mixtus",
    "Bombus morrisoni",
    "Bombus nevadensis",
    "Bombus occidentalis",
    "Bombus pensylvanicus",
    "Bombus perplexus",
    "Bombus rufocinctus",
    "Bombus sandersoni",
    "Bombus sitkensis",
    "Bombus sonorus",
    "Bombus suckleyi",
    "Bombus sylvicola",
    "Bombus ternarius",
    "Bombus terricola",
    "Bombus vagans",
    "Bombus vandykei",
    "Bombus vosnesenskii",
    "Brachynomada annectens",
    "Brachynomada melanantha",
    "Cemolobus ipomoeae",
    "Centris californica",
    "Centris rhodomelas",
    "Ceratina acantha",
    "Ceratina apacheorum",
    "Ceratina arizonensis",
    "Ceratina calcarata",
    "Ceratina dallatorreana",
    "Ceratina dupla",
    "Ceratina hurdi",
    "Ceratina micheneri",
    "Ceratina nanula",
    "Ceratina neomexicana",
    "Ceratina pacifica",
    "Ceratina punctigena",
    "Ceratina sequoiae",
    "Ceratina strenua",
    "Ceratina tejonensis",
    "Ceratina timberlakei",
    "Diadasia angusticeps",
    "Diadasia australis",
    "Diadasia bituberculata",
    "Diadasia consociata",
    "Diadasia diminuta",
    "Diadasia enavata",
    "Diadasia laticauda",
    "Diadasia lutzi",
    "Diadasia martialis",
    "Diadasia nigrifrons",
    "Diadasia nitidifrons",
    "Diadasia ochracea",
    "Diadasia opuntiae",
    "Diadasia palmarum",
    "Diadasia rinconis",
    "Diadasia sphaeralcearum",
    "Diadasia tuberculifrons",
    "Diadasia vallicola",
    "Epeolus americanus",
    "Epeolus asperatus",
    "Epeolus bifasciatus",
    "Epeolus compactus",
    "Epeolus interruptus",
    "Epeolus mesillae",
    "Epeolus minimus",
    "Epeolus pusillus",
    "Epeolus scutellaris",
    "Eucera acerba",
    "Eucera actuosa",
    "Eucera albescens",
    "Eucera amsinckiae",
    "Eucera angustifrons",
    "Eucera californica",
    "Eucera cordleyi",
    "Eucera delphinii",
    "Eucera dorsata",
    "Eucera edwardsii",
    "Eucera frater",
    "Eucera fulvitarsis",
    "Eucera hamata",
    "Eucera hurdi",
    "Eucera lunata",
    "Eucera mohavensis",
    "Eucera monozona",
    "Eucera primiveris",
    "Eucera quadricincta",
    "Eucera stretchii",
    "Eucera territella",
    "Eucera tricinctella",
    "Eucera virgata",
    "Eucera zonata",
    "Exomalopsis solidaginis",
    "Habropoda cineraria",
    "Habropoda dammersi",
    "Habropoda depressa",
    "Habropoda excellens",
    "Habropoda miserabilis",
    "Habropoda morrisoni",
    "Habropoda murihirta",
    "Habropoda salviae",
    "Habropoda semifulva",
    "Habropoda tristissima",
    "Holcopasites arizonicus",
    "Holcopasites bohartorum",
    "Holcopasites calliopsidis",
    "Holcopasites insoletus",
    "Holcopasites ruthae",
    "Melecta edwardsii",
    "Melecta pacifica",
    "Melecta separata",
    "Melecta thoracica",
    "Melissodes agilis",
    "Melissodes bimatris",
    "Melissodes brevipyga",
    "Melissodes clarkiae",
    "Melissodes coloradensis",
    "Melissodes communis",
    "Melissodes glenwoodensis",
    "Melissodes grindeliae",
    "Melissodes hurdi",
    "Melissodes hymenoxidis",
    "Melissodes limbus",
    "Melissodes menuachus",
    "Melissodes micheneri",
    "Melissodes monoensis",
    "Melissodes moorei",
    "Melissodes nigracauda",
    "Melissodes ochraea",
    "Melissodes paroselae",
    "Melissodes rivalis",
    "Melissodes robustior",
    "Melissodes saponellus",
    "Melissodes stearnsi",
    "Melissodes subagilis",
    "Melissodes thelypodii",
    "Melissodes tribas",
    "Melissodes tristis",
    "Melissodes utahensis",
    "Melissodes verbesinarum",
    "Melissodes vernalis",
    "Neolarra alba",
    "Neolarra batrae",
    "Neolarra californica",
    "Neolarra clavigera",
    "Neolarra hurdi",
    "Neolarra linsleyi",
    "Neolarra orbiculata",
    "Neolarra penicula",
    "Neolarra pruinosa",
    "Neolarra vandykei",
    "Neolarra vigilans",
    "Neopasites cressoni",
    "Neopasites fulviventris",
    "Neopasites sierrae",
    "Neopasites timberlakei",
    "Nomada accepta",
    "Nomada angelarum",
    "Nomada articulata",
    "Nomada ashmeadi",
    "Nomada atrofrontata",
    "Nomada banksi",
    "Nomada bella",
    "Nomada bethunei",
    "Nomada bifurcata",
    "Nomada californiae",
    "Nomada citrina",
    "Nomada composita",
    "Nomada coquilletti",
    "Nomada cressonii",
    "Nomada crotchii",
    "Nomada cuneata",
    "Nomada davidsoni",
    "Nomada debilis",
    "Nomada denticulata",
    "Nomada depressa",
    "Nomada detrita",
    "Nomada dreisbachi",
    "Nomada edwardsii",
    "Nomada electa",
    "Nomada elegantula",
    "Nomada erythraea",
    "Nomada erythrospila",
    "Nomada florilega",
    "Nomada formula",
    "Nomada fragilis",
    "Nomada grayi",
    "Nomada hemphilli",
    "Nomada hesperia",
    "Nomada hurdi",
    "Nomada imbricata",
    "Nomada integerrima",
    "Nomada interruptella",
    "Nomada latifrons",
    "Nomada lehighensis",
    "Nomada lepida",
    "Nomada linsleyi",
    "Nomada luteola",
    "Nomada luteoloides",
    "Nomada maculata",
    "Nomada marginella",
    "Nomada mckenziei",
    "Nomada mediana",
    "Nomada melanosoma",
    "Nomada melliventris",
    "Nomada mendica",
    "Nomada mutans",
    "Nomada obliquella",
    "Nomada obscurella",
    "Nomada opacella",
    "Nomada opposita",
    "Nomada orcusella",
    "Nomada osborni",
    "Nomada ovata",
    "Nomada parva",
    "Nomada pascoensis",
    "Nomada perbella",
    "Nomada perplexa",
    "Nomada pygmaea",
    "Nomada pyrrha",
    "Nomada rhodalis",
    "Nomada rhodomelas",
    "Nomada rhodosoma",
    "Nomada rhodotricha",
    "Nomada rivalis",
    "Nomada rubrica",
    "Nomada sanctaecrucis",
    "Nomada sayi",
    "Nomada schwarzi",
    "Nomada semisuavis",
    "Nomada simplicicoxa",
    "Nomada sophiarum",
    "Nomada suavis",
    "Nomada subangusta",
    "Nomada subgracilis",
    "Nomada subvicinalis",
    "Nomada sulphurata",
    "Nomada timberlakei",
    "Nomada tintinnabulum",
    "Nomada ultimella",
    "Nomada valida",
    "Nomada verecunda",
    "Nomada vicina",
    "Nomada vicinalis",
    "Nomada xanthura",
    "Oreopasites albinota",
    "Oreopasites euphorbiae",
    "Oreopasites hurdi",
    "Oreopasites linsleyi",
    "Oreopasites powelli",
    "Oreopasites vanduzeei",
    "Paranomada californica",
    "Peponapis pruinosa",
    "Peponapis timberlakei",
    "Svastra duplocincta",
    "Svastra helianthelli",
    "Svastra machaerantherae",
    "Svastra nevadensis",
    "Svastra obliqua",
    "Svastra pallidior",
    "Svastra sabinensis",
    "Svastra texana",
    "Tetraloniella davidsoni",
    "Tetraloniella distata",
    "Tetraloniella eriocarpi",
    "Tetraloniella pomonae",
    "Tetraloniella vandykei",
    "Triepeolus ancoratus",
    "Triepeolus antiochensis",
    "Triepeolus argentimus",
    "Triepeolus argyreus",
    "Triepeolus blaisdelli",
    "Triepeolus brunnescens",
    "Triepeolus californicus",
    "Triepeolus callopus",
    "Triepeolus concavus",
    "Triepeolus cressonii",
    "Triepeolus diffusus",
    "Triepeolus diversipes",
    "Triepeolus donatus",
    "Triepeolus edwardi",
    "Triepeolus fraserae",
    "Triepeolus helianthi",
    "Triepeolus inyoensis",
    "Triepeolus joliae",
    "Triepeolus lunatus",
    "Triepeolus melanarius",
    "Triepeolus michiganensis",
    "Triepeolus micropygius",
    "Triepeolus mojavensis",
    "Triepeolus norae",
    "Triepeolus pectoralis",
    "Triepeolus penicilliferus",
    "Triepeolus permixtus",
    "Triepeolus perpictus",
    "Triepeolus pomonalis",
    "Triepeolus punctoclypeus",
    "Triepeolus quadratus",
    "Triepeolus remigatus",
    "Triepeolus robustus",
    "Triepeolus sarothrinus",
    "Triepeolus saturninus",
    "Triepeolus schwarzi",
    "Triepeolus simulatus",
    "Triepeolus subalpinus",
    "Triepeolus subnitens",
    "Triepeolus timberlakei",
    "Triepeolus utahensis",
    "Triepeolus verbesinae",
    "Xenoglossa angustior",
    "Xenoglossa patricia",
    "Xenoglossa strenua",
    "Xeromelecta californica",
    "Xeromelecta larreae",
    "Xylocopa californica",
    "Xylocopa micans",
    "Xylocopa tabaniformis",
    "Xylocopa varipuncta",
    "Xylocopa virginica",
    "Zacosmia maculata"
  ];
  if (i < wordList.length) {
    nightmare
      .viewport(1024, 1500)
      .goto("https://www.duckduckgo.com")
      .type("#search_form_input_homepage", `${wordList[i]}`)
      .click("#search_button_homepage")
      .wait(1000)
      .evaluate(() => {
        try {
          let description = document.querySelector(".js-about-item-abstr")
            .innerText;
          return description;
        } catch (error) {
          let undefinedDesc = "Unlisted";
          return undefinedDesc;
        }
      })
      .then(result => {
        writeFileSync(`../beeTemp/beeStats${i}.js`, result, function(err) {});
        nightmare.run(() => {
          i++;
          runItAgain(i);
        });
      })
      .catch(error => {
        console.log("error", error);
      });
  }
};
runItAgain(0);

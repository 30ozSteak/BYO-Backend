const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true });
const { writeFileSync } = require("fs");
var i = 0;

var runItAgain = function(i) {
  let wordList = [
    { name: "Anthophora abroniae" },
    { name: "Anthophora abrupta" },
    { name: "Anthophora affabilis" },
    { name: "Anthophora bomboides" },
    { name: "Anthophora californica" },
    { name: "Anthophora centriformis" },
    { name: "Anthophora cockerelli" },
    { name: "Anthophora columbariae" },
    { name: "Anthophora coptognatha" },
    { name: "Anthophora crotchii" },
    { name: "Anthophora dammersi" },
    { name: "Anthophora edwardsii" },
    { name: "Anthophora erythrothorax" },
    { name: "Anthophora estebana" },
    { name: "Anthophora exigua" },
    { name: "Anthophora flavocincta" },
    { name: "Anthophora flexipes" },
    { name: "Anthophora forbesi" },
    { name: "Anthophora fulvicauda" },
    { name: "Anthophora hololeuca" },
    { name: "Anthophora linsleyi" },
    { name: "Anthophora maculifrons" },
    { name: "Anthophora mortuaria" },
    { name: "Anthophora neglecta" },
    { name: "Anthophora nigritula" },
    { name: "Anthophora pachyodonta" },
    { name: "Anthophora pacifica" },
    { name: "Anthophora peritomae" },
    { name: "Anthophora petrophila" },
    { name: "Anthophora phaceliae" },
    { name: "Anthophora phenax" },
    { name: "Anthophora platti" },
    { name: "Anthophora porterae" },
    { name: "Anthophora rhodothorax" },
    { name: "Anthophora salazariae" },
    { name: "Anthophora signata" },
    { name: "Anthophora terminalis" },
    { name: "Anthophora urbana" },
    { name: "Anthophora ursina" },
    { name: "Anthophora vannigera" },
    { name: "Anthophorula albata" },
    { name: "Anthophorula albicans" },
    { name: "Anthophorula albovestita" },
    { name: "Anthophorula cerei" },
    { name: "Anthophorula chionura" },
    { name: "Anthophorula cockerelli" },
    { name: "Anthophorula completa" },
    { name: "Anthophorula deserticola" },
    { name: "Anthophorula eriogoni" },
    { name: "Anthophorula euphorbiae" },
    { name: "Anthophorula minima" },
    { name: "Anthophorula nitens" },
    { name: "Anthophorula palmarum" },
    { name: "Anthophorula sidae" },
    { name: "Anthophorula torticornis" },
    { name: "Anthophorula varleyi" },
    { name: "Anthophorula yoloensis" },
    { name: "Apis mellifera" },
    { name: "Bombus affinis" },
    { name: "Bombus appositus" },
    { name: "Bombus ashtoni" },
    { name: "Bombus auricomus" },
    { name: "Bombus bifarius" },
    { name: "Bombus bimaculatus" },
    { name: "Bombus borealis" },
    { name: "Bombus californicus" },
    { name: "Bombus caliginosus" },
    { name: "Bombus centralis" },
    { name: "Bombus citrinus" },
    { name: "Bombus crotchii" },
    { name: "Bombus fernaldae" },
    { name: "Bombus fervidus" },
    { name: "Bombus flavifrons" },
    { name: "Bombus franklini" },
    { name: "Bombus griseocollis" },
    { name: "Bombus huntii" },
    { name: "Bombus impatiens" },
    { name: "Bombus insularis" },
    { name: "Bombus melanopygus" },
    { name: "Bombus mixtus" },
    { name: "Bombus morrisoni" },
    { name: "Bombus nevadensis" },
    { name: "Bombus occidentalis" },
    { name: "Bombus pensylvanicus" },
    { name: "Bombus perplexus" },
    { name: "Bombus rufocinctus" },
    { name: "Bombus sandersoni" },
    { name: "Bombus sitkensis" },
    { name: "Bombus sonorus" },
    { name: "Bombus suckleyi" },
    { name: "Bombus sylvicola" },
    { name: "Bombus ternarius" },
    { name: "Bombus terricola" },
    { name: "Bombus vagans" },
    { name: "Bombus vandykei" },
    { name: "Bombus vosnesenskii" },
    { name: "Brachynomada annectens" },
    { name: "Brachynomada melanantha" },
    { name: "Cemolobus ipomoeae" },
    { name: "Centris californica" },
    { name: "Centris rhodomelas" },
    { name: "Ceratina acantha" },
    { name: "Ceratina apacheorum" },
    { name: "Ceratina arizonensis" },
    { name: "Ceratina calcarata" },
    { name: "Ceratina dallatorreana" },
    { name: "Ceratina dupla" },
    { name: "Ceratina hurdi" },
    { name: "Ceratina micheneri" },
    { name: "Ceratina nanula" },
    { name: "Ceratina neomexicana" },
    { name: "Ceratina pacifica" },
    { name: "Ceratina punctigena" },
    { name: "Ceratina sequoiae" },
    { name: "Ceratina strenua" },
    { name: "Ceratina tejonensis" },
    { name: "Ceratina timberlakei" },
    { name: "Diadasia angusticeps" },
    { name: "Diadasia australis" },
    { name: "Diadasia bituberculata" },
    { name: "Diadasia consociata" },
    { name: "Diadasia diminuta" },
    { name: "Diadasia enavata" },
    { name: "Diadasia laticauda" },
    { name: "Diadasia lutzi" },
    { name: "Diadasia martialis" },
    { name: "Diadasia nigrifrons" },
    { name: "Diadasia nitidifrons" },
    { name: "Diadasia ochracea" },
    { name: "Diadasia opuntiae" },
    { name: "Diadasia palmarum" },
    { name: "Diadasia rinconis" },
    { name: "Diadasia sphaeralcearum" },
    { name: "Diadasia tuberculifrons" },
    { name: "Diadasia vallicola" },
    { name: "Epeolus americanus" },
    { name: "Epeolus asperatus" },
    { name: "Epeolus bifasciatus" },
    { name: "Epeolus compactus" },
    { name: "Epeolus interruptus" },
    { name: "Epeolus mesillae" },
    { name: "Epeolus minimus" },
    { name: "Epeolus pusillus" },
    { name: "Epeolus scutellaris" },
    { name: "Eucera acerba" },
    { name: "Eucera actuosa" },
    { name: "Eucera albescens" },
    { name: "Eucera amsinckiae" },
    { name: "Eucera angustifrons" },
    { name: "Eucera californica" },
    { name: "Eucera cordleyi" },
    { name: "Eucera delphinii" },
    { name: "Eucera dorsata" },
    { name: "Eucera edwardsii" },
    { name: "Eucera frater" },
    { name: "Eucera fulvitarsis" },
    { name: "Eucera hamata" },
    { name: "Eucera hurdi" },
    { name: "Eucera lunata" },
    { name: "Eucera mohavensis" },
    { name: "Eucera monozona" },
    { name: "Eucera primiveris" },
    { name: "Eucera quadricincta" },
    { name: "Eucera stretchii" },
    { name: "Eucera territella" },
    { name: "Eucera tricinctella" },
    { name: "Eucera virgata" },
    { name: "Eucera zonata" },
    { name: "Exomalopsis solidaginis" },
    { name: "Habropoda cineraria" },
    { name: "Habropoda dammersi" },
    { name: "Habropoda depressa" },
    { name: "Habropoda excellens" },
    { name: "Habropoda miserabilis" },
    { name: "Habropoda morrisoni" },
    { name: "Habropoda murihirta" },
    { name: "Habropoda salviae" },
    { name: "Habropoda semifulva" },
    { name: "Habropoda tristissima" },
    { name: "Holcopasites arizonicus" },
    { name: "Holcopasites bohartorum" },
    { name: "Holcopasites calliopsidis" },
    { name: "Holcopasites insoletus" },
    { name: "Holcopasites ruthae" },
    { name: "Melecta edwardsii" },
    { name: "Melecta pacifica" },
    { name: "Melecta separata" },
    { name: "Melecta thoracica" },
    { name: "Melissodes agilis" },
    { name: "Melissodes bimatris" },
    { name: "Melissodes brevipyga" },
    { name: "Melissodes clarkiae" },
    { name: "Melissodes coloradensis" },
    { name: "Melissodes communis" },
    { name: "Melissodes glenwoodensis" },
    { name: "Melissodes grindeliae" },
    { name: "Melissodes hurdi" },
    { name: "Melissodes hymenoxidis" },
    { name: "Melissodes limbus" },
    { name: "Melissodes menuachus" },
    { name: "Melissodes micheneri" },
    { name: "Melissodes monoensis" },
    { name: "Melissodes moorei" },
    { name: "Melissodes nigracauda" },
    { name: "Melissodes ochraea" },
    { name: "Melissodes paroselae" },
    { name: "Melissodes rivalis" },
    { name: "Melissodes robustior" },
    { name: "Melissodes saponellus" },
    { name: "Melissodes stearnsi" },
    { name: "Melissodes subagilis" },
    { name: "Melissodes thelypodii" },
    { name: "Melissodes tribas" },
    { name: "Melissodes tristis" },
    { name: "Melissodes utahensis" },
    { name: "Melissodes verbesinarum" },
    { name: "Melissodes vernalis" },
    { name: "Neolarra alba" },
    { name: "Neolarra batrae" },
    { name: "Neolarra californica" },
    { name: "Neolarra clavigera" },
    { name: "Neolarra hurdi" },
    { name: "Neolarra linsleyi" },
    { name: "Neolarra orbiculata" },
    { name: "Neolarra penicula" },
    { name: "Neolarra pruinosa" },
    { name: "Neolarra vandykei" },
    { name: "Neolarra vigilans" },
    { name: "Neopasites cressoni" },
    { name: "Neopasites fulviventris" },
    { name: "Neopasites sierrae" },
    { name: "Neopasites timberlakei" },
    { name: "Nomada accepta" },
    { name: "Nomada angelarum" },
    { name: "Nomada articulata" },
    { name: "Nomada ashmeadi" },
    { name: "Nomada atrofrontata" },
    { name: "Nomada banksi" },
    { name: "Nomada bella" },
    { name: "Nomada bethunei" },
    { name: "Nomada bifurcata" },
    { name: "Nomada californiae" },
    { name: "Nomada citrina" },
    { name: "Nomada composita" },
    { name: "Nomada coquilletti" },
    { name: "Nomada cressonii" },
    { name: "Nomada crotchii" },
    { name: "Nomada cuneata" },
    { name: "Nomada davidsoni" },
    { name: "Nomada debilis" },
    { name: "Nomada denticulata" },
    { name: "Nomada depressa" },
    { name: "Nomada detrita" },
    { name: "Nomada dreisbachi" },
    { name: "Nomada edwardsii" },
    { name: "Nomada electa" },
    { name: "Nomada elegantula" },
    { name: "Nomada erythraea" },
    { name: "Nomada erythrospila" },
    { name: "Nomada florilega" },
    { name: "Nomada formula" },
    { name: "Nomada fragilis" },
    { name: "Nomada grayi" },
    { name: "Nomada hemphilli" },
    { name: "Nomada hesperia" },
    { name: "Nomada hurdi" },
    { name: "Nomada imbricata" },
    { name: "Nomada integerrima" },
    { name: "Nomada interruptella" },
    { name: "Nomada latifrons" },
    { name: "Nomada lehighensis" },
    { name: "Nomada lepida" },
    { name: "Nomada linsleyi" },
    { name: "Nomada luteola" },
    { name: "Nomada luteoloides" },
    { name: "Nomada maculata" },
    { name: "Nomada marginella" },
    { name: "Nomada mckenziei" },
    { name: "Nomada mediana" },
    { name: "Nomada melanosoma" },
    { name: "Nomada melliventris" },
    { name: "Nomada mendica" },
    { name: "Nomada mutans" },
    { name: "Nomada obliquella" },
    { name: "Nomada obscurella" },
    { name: "Nomada opacella" },
    { name: "Nomada opposita" },
    { name: "Nomada orcusella" },
    { name: "Nomada osborni" },
    { name: "Nomada ovata" },
    { name: "Nomada parva" },
    { name: "Nomada pascoensis" },
    { name: "Nomada perbella" },
    { name: "Nomada perplexa" },
    { name: "Nomada pygmaea" },
    { name: "Nomada pyrrha" },
    { name: "Nomada rhodalis" },
    { name: "Nomada rhodomelas" },
    { name: "Nomada rhodosoma" },
    { name: "Nomada rhodotricha" },
    { name: "Nomada rivalis" },
    { name: "Nomada rubrica" },
    { name: "Nomada sanctaecrucis" },
    { name: "Nomada sayi" },
    { name: "Nomada schwarzi" },
    { name: "Nomada semisuavis" },
    { name: "Nomada simplicicoxa" },
    { name: "Nomada sophiarum" },
    { name: "Nomada suavis" },
    { name: "Nomada subangusta" },
    { name: "Nomada subgracilis" },
    { name: "Nomada subvicinalis" },
    { name: "Nomada sulphurata" },
    { name: "Nomada timberlakei" },
    { name: "Nomada tintinnabulum" },
    { name: "Nomada ultimella" },
    { name: "Nomada valida" },
    { name: "Nomada verecunda" },
    { name: "Nomada vicina" },
    { name: "Nomada vicinalis" },
    { name: "Nomada xanthura" },
    { name: "Oreopasites albinota" },
    { name: "Oreopasites euphorbiae" },
    { name: "Oreopasites hurdi" },
    { name: "Oreopasites linsleyi" },
    { name: "Oreopasites powelli" },
    { name: "Oreopasites vanduzeei" },
    { name: "Paranomada californica" },
    { name: "Peponapis pruinosa" },
    { name: "Peponapis timberlakei" },
    { name: "Svastra duplocincta" },
    { name: "Svastra helianthelli" },
    { name: "Svastra machaerantherae" },
    { name: "Svastra nevadensis" },
    { name: "Svastra obliqua" },
    { name: "Svastra pallidior" },
    { name: "Svastra sabinensis" },
    { name: "Svastra texana" },
    { name: "Tetraloniella davidsoni" },
    { name: "Tetraloniella distata" },
    { name: "Tetraloniella eriocarpi" },
    { name: "Tetraloniella pomonae" },
    { name: "Tetraloniella vandykei" },
    { name: "Triepeolus ancoratus" },
    { name: "Triepeolus antiochensis" },
    { name: "Triepeolus argentimus" },
    { name: "Triepeolus argyreus" },
    { name: "Triepeolus blaisdelli" },
    { name: "Triepeolus brunnescens" },
    { name: "Triepeolus californicus" },
    { name: "Triepeolus callopus" },
    { name: "Triepeolus concavus" },
    { name: "Triepeolus cressonii" },
    { name: "Triepeolus diffusus" },
    { name: "Triepeolus diversipes" },
    { name: "Triepeolus donatus" },
    { name: "Triepeolus edwardi" },
    { name: "Triepeolus fraserae" },
    { name: "Triepeolus helianthi" },
    { name: "Triepeolus inyoensis" },
    { name: "Triepeolus joliae" },
    { name: "Triepeolus lunatus" },
    { name: "Triepeolus melanarius" },
    { name: "Triepeolus michiganensis" },
    { name: "Triepeolus micropygius" },
    { name: "Triepeolus mojavensis" },
    { name: "Triepeolus norae" },
    { name: "Triepeolus pectoralis" },
    { name: "Triepeolus penicilliferus" },
    { name: "Triepeolus permixtus" },
    { name: "Triepeolus perpictus" },
    { name: "Triepeolus pomonalis" },
    { name: "Triepeolus punctoclypeus" },
    { name: "Triepeolus quadratus" },
    { name: "Triepeolus remigatus" },
    { name: "Triepeolus robustus" },
    { name: "Triepeolus sarothrinus" },
    { name: "Triepeolus saturninus" },
    { name: "Triepeolus schwarzi" },
    { name: "Triepeolus simulatus" },
    { name: "Triepeolus subalpinus" },
    { name: "Triepeolus subnitens" },
    { name: "Triepeolus timberlakei" },
    { name: "Triepeolus utahensis" },
    { name: "Triepeolus verbesinae" },
    { name: "Xenoglossa angustior" },
    { name: "Xenoglossa patricia" },
    { name: "Xenoglossa strenua" },
    { name: "Xeromelecta californica" },
    { name: "Xeromelecta larreae" },
    { name: "Xylocopa californica" },
    { name: "Xylocopa micans" },
    { name: "Xylocopa tabaniformis" },
    { name: "Xylocopa varipuncta" },
    { name: "Xylocopa virginica" },
    { name: "Zacosmia maculata" }
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

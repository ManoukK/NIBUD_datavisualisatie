console.log("hoi");

const data = d3.csv('/data/begrotingNibudDataseDeJuisteKopie.csv')
  .then(data => {
      console.log("ruwe data:", data)
        return data.map(data => {
            return {
              post: data.Post,
              bedrag: Number(data.Bedrag),
              inkomen: Number(data.Inkomen),
              huishouden: data.Huishouden,
              woonsituatie: data.Woonsituatie,
              jaar: Number(data.Jaar)
            }
        })
    })
  .then(data => {
    console.log("opgeschoonde data", data)
    opschonenHuishouden(data);
  })
  .catch(error => {
    console.log(error)
  });

// filter code van Roy Csuka
// https://github.com/RoyCsuka/nibud/blob/master/src/cleanData.js
function opschonenHuishouden(data){
  const huishoudenFilter = data.filter(data => data.huishouden == "Paar zonder kinderen");
  console.log("filter huishouden", huishoudenFilter);
  opschonenWonen(huishoudenFilter);
};

function opschonenWonen(huishoudenFilter){
  const woonsituatieFilter = huishoudenFilter.filter(huishoudenFilter => huishoudenFilter.woonsituatie == "gemiddelde hypotheek");
  console.log("filter woon situatie", woonsituatieFilter);
  opschonenInkomen(woonsituatieFilter);
};

function opschonenInkomen(woonsituatieFilter){
  const inkomenFilter = woonsituatieFilter.filter(woonsituatieFilter => woonsituatieFilter.inkomen == 2500);
  //note: hier zijn al de array items eruit gefilterd die ik in de volgende function pas doe.
  console.log("filter inkomen", inkomenFilter);
  itemsVerwijderen(inkomenFilter);
};

function itemsVerwijderen(inkomenFilter){
  //https://stackoverflow.com/questions/500606/deleting-array-elements-in-javascript-delete-vs-splice
  //splice zorgt ervoor dat de items daadwerkelijk verwijderd worden en dat ze dan ook niet meer mee tellen in de array
  const schoneData = inkomenFilter;
  //verwijder totaal inkomen, totaal uitgaven en huur/hypotheek
  schoneData.splice(0, 3)
  //verwijder totaal vaste lasten 
  schoneData.splice(10, 1)
  //verwijder totaal reserveringsuitgaven
  schoneData.splice(15, 1)
  //verwijder totaal huishoudelijke uitgaven en overschot/tekort
  schoneData.splice(17, 2)
  console.log("nieuwe array", schoneData);
}

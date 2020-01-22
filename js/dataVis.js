//values uit de local storage ophalen om het vervolgens in een object te stoppen
//https://www.kirupa.com/html5/storing_and_retrieving_an_array_from_local_storage.htm
// het parsen van de local storage https://theshravan.net/blog/storing-json-objects-in-html5-local-storage/
//https://stackoverflow.com/questions/51173341/crossfilter-loading-a-json-file-from-localstorage
// stap 1 van het formulier
// geen parse gebruikt omdat het anders word gezien als nummers
const huishoudenData = localStorage.getItem("huishouden");
const wonenData = localStorage.getItem("woon situatie");
const inkomenData = localStorage.getItem("inkomen");
// stap 2 van het formulier
const gasData = JSON.parse(localStorage.getItem("gas"));
const elektriciteitData = JSON.parse(localStorage.getItem("elektriciteit"));
const waterData = JSON.parse(localStorage.getItem("water"));
const lokaleLastenData = JSON.parse(localStorage.getItem("lokale lasten"));
const telefoonTVInternetData = JSON.parse(localStorage.getItem("telefoon tv internet"));
const verzekeringenData = JSON.parse(localStorage.getItem("verzekeringen"));
const onderwijsData = JSON.parse(localStorage.getItem("onderwijs"));
const kinderopvangData = JSON.parse(localStorage.getItem("kinderopvang"));
const contributiesAbonnementenData = JSON.parse(localStorage.getItem("contributies abonnementen"));
const vervoerData = JSON.parse(localStorage.getItem("vervoer"));
// stap 3 van het formulier
const kledingSchoenenData = JSON.parse(localStorage.getItem("kleding schoenen"));
const inventarisData = JSON.parse(localStorage.getItem("inventaris"));
const onderhoudHuisTuinData = JSON.parse(localStorage.getItem("onderhoud huis tuin"));
const nietVergoedeZiektekostenData = JSON.parse(localStorage.getItem("niet vergoede ziektekosten"));
const vrijetijdsuitgavenData = JSON.parse(localStorage.getItem("vrijetijdsuitgaven"));
const voedingData = JSON.parse(localStorage.getItem("voeding"));
const overigeHuishoudelijkeUitgavenData = JSON.parse(localStorage.getItem("overige huishoudelijke uitgaven"));

console.log(huishoudenData);
console.log(wonenData);
console.log(inkomenData);

const resultsPersoonlijk = [
  gasData,
  elektriciteitData,
  waterData,
  lokaleLastenData,
  telefoonTVInternetData,
  verzekeringenData,
  onderwijsData,
  kinderopvangData,
  contributiesAbonnementenData,
  vervoerData,
  // stap 3 van het formulier
  kledingSchoenenData,
  inventarisData,
  onderhoudHuisTuinData,
  nietVergoedeZiektekostenData,
  vrijetijdsuitgavenData,
  voedingData,
  overigeHuishoudelijkeUitgavenData,
];

const resultsPersoonlijkSchoon = resultsPersoonlijk;
  const i = resultsPersoonlijk.indexOf(0);
  resultsPersoonlijk[i] = 1;

console.log("testj", resultsPersoonlijkSchoon);

// csv inladen nieuwe manier
//comment deze code aan als je werkt met de officiele dataset:
// const dataNibud = d3.csv('/data/NibudDataset.csv')

//comment deze code uit als je werkt met de officiele dataset:
const dataNibud = d3.csv('/data/AlternatiefDataset.csv')
.then(dataNibud  => {
      console.log("ruwe data:", dataNibud )
        return dataNibud.map(dataNibud  => {
            return {
              post: dataNibud.Post,
              huishouden: dataNibud.Huishouden,
              woonsituatie: dataNibud.Woonsituatie,
              inkomen: Number(dataNibud.Inkomen),
              jaar: Number(dataNibud.Jaar),
              bedrag: Number(dataNibud.Bedrag)
            }
        })
    })
  .then(dataNibud  => {
    console.log("opgeschoonde data", dataNibud)
    //comment deze code aan als je werkt met de officiele dataset:
    // opschonenHuishouden(dataNibud);

    //comment deze twee regels code uit als je werkt met de officiele dataset:
    const inkomenFilter = dataNibud;
    itemsVerwijderen(inkomenFilter)
  })
  .catch(error => {
    console.log(error)
  });

// filter code van Roy Csuka
// https://github.com/RoyCsuka/nibud/blob/master/src/cleanData.js

// //comment deze code aan als je werkt met de officiele dataset:
// function opschonenHuishouden(dataNibud ){
//   const huishoudenFilter = dataNibud.filter(dataNibud  => dataNibud.huishouden == huishoudenData);
//   console.log("filter huishouden", huishoudenFilter);
//   opschonenWonen(huishoudenFilter);
// };

// function opschonenWonen(huishoudenFilter){
//   const woonsituatieFilter = huishoudenFilter.filter(huishoudenFilter => huishoudenFilter.woonsituatie == wonenData);
//   console.log("filter woon situatie", woonsituatieFilter);
//   opschonenInkomen(woonsituatieFilter);
// };

// function opschonenInkomen(woonsituatieFilter){
//   const inkomenFilter = woonsituatieFilter.filter(woonsituatieFilter => woonsituatieFilter.inkomen == inkomenData);
//   //note: hier zijn al de array items eruit gefilterd die ik in de volgende function pas doe.
//   console.log("filter inkomen", inkomenFilter);
//   itemsVerwijderen(inkomenFilter);
// };

function itemsVerwijderen(inkomenFilter){
  //https://stackoverflow.com/questions/500606/deleting-array-elements-in-javascript-delete-vs-splice
  //splice zorgt ervoor dat de items daadwerkelijk verwijderd worden en dat ze dan ook niet meer mee tellen in de array
  const itemsFilter = inkomenFilter;
  //verwijder totaal inkomen, totaal uitgaven en huur/hypotheek
  itemsFilter.splice(0, 3);
  //verwijder totaal vaste lasten 
  itemsFilter.splice(10, 1);
  //verwijder totaal reserveringsuitgaven
  itemsFilter.splice(15, 1);
  //verwijder totaal huishoudelijke uitgaven en overschot/tekort
  itemsFilter.splice(17, 2);

  const schoneData = itemsFilter.map(function(d){return d.bedrag});
  const i = schoneData.indexOf(0);
  schoneData[i] = 1;
  
  console.log("nieuwe array", schoneData);
  // renderPersoonlijk(resultsPersoonlijk, schoneData);
  berekeningProcent(resultsPersoonlijk, schoneData);
};

function berekeningProcent(resultsPersoonlijkSchoon, schoneData){
  const eigen = resultsPersoonlijkSchoon
  const nibud = schoneData

  const gasBerekening = Math.round(((eigen[0] / nibud[0]) - 1) * 100);
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
  if (gasBerekening >= 1000){gas = gasBerekening / 10;} 
  else {gas = gasBerekening};

  const elektriciteitBerekening = Math.round(((eigen[1] / nibud[1]) - 1) * 100);
  if (elektriciteitBerekening >= 1000){elektriciteit = elektriciteitBerekening / 10;} 
  else {elektriciteit = elektriciteitBerekening};

  const waterBerekening = Math.round(((eigen[2] / nibud[2]) - 1) * 100);
  if (waterBerekening >= 1000){water = waterBerekening / 10;} 
  else {water = waterBerekening};

  const lokaleLastenBerekening = Math.round(((eigen[3] / nibud[3]) - 1) * 100);
  if (lokaleLastenBerekening >= 1000){lokaleLasten = lokaleLastenBerekening / 10;} 
  else {lokaleLasten = lokaleLastenBerekening};

  const telefoonTvInternetBerekening = Math.round(((eigen[4] / nibud[4]) - 1) * 100);
  if (telefoonTvInternetBerekening >= 1000){telefoonTvInternet = telefoonTvInternetBerekening / 10;} 
  else {telefoonTvInternet = telefoonTvInternetBerekening};

  const verzekeringenBerekening = Math.round(((eigen[5] / nibud[5]) - 1) * 100);
  if (verzekeringenBerekening >= 1000){verzekeringen = verzekeringenBerekening / 10;} 
  else {verzekeringen = verzekeringenBerekening};

  const onderwijsBerekening = Math.round(((eigen[6] / nibud[6]) - 1) * 100);
  if (onderwijsBerekening >= 1000){onderwijs = onderwijsBerekening / 10;} 
  else {onderwijs = onderwijsBerekening};

  const kinderopvangBerekening = Math.round(((eigen[7] / nibud[7]) - 1) * 100);
  if (kinderopvangBerekening >= 1000){kinderopvang = kinderopvangBerekening / 10;} 
  else {kinderopvang = kinderopvangBerekening};

  const contributiesBerekening = Math.round(((eigen[8] / nibud[8]) - 1) * 100);
  if (contributiesBerekening >= 1000){contributies = contributiesBerekening / 10;} 
  else {contributies = contributiesBerekening};

  const vervoerBerekening = Math.round(((eigen[9] / nibud[9]) - 1) * 100);
  if (vervoerBerekening >= 1000){vervoer = vervoerBerekening / 10;} 
  else {vervoer = vervoerBerekening};

  const kledingBerekening = Math.round(((eigen[10] / nibud[10]) - 1) * 100);
  if (kledingBerekening >= 1000){kleding = kledingBerekening / 10;} 
  else {kleding = kledingBerekening};

  const inventarisBerekening = Math.round(((eigen[11] / nibud[11]) - 1) * 100);
  if (inventarisBerekening >= 1000){inventaris = inventarisBerekening / 10;} 
  else {inventaris = inventarisBerekening};

  const huisTuinBerekening = Math.round(((eigen[12] / nibud[12]) - 1) * 100);
  if (huisTuinBerekening >= 1000){huisTuin = huisTuinBerekening / 10;} 
  else {huisTuin = huisTuinBerekening};

  const ziektekostenBerekening = Math.round(((eigen[13] / nibud[13]) - 1) * 100);
  if (ziektekostenBerekening >= 1000){ziektekosten = ziektekostenBerekening / 10;} 
  else {ziektekosten = ziektekostenBerekening};

  const vrijetijdsuitgavenBerekening = Math.round(((eigen[14] / nibud[14]) - 1) * 100);
  if (vrijetijdsuitgavenBerekening >= 1000){vrijetijdsuitgaven = vrijetijdsuitgavenBerekening / 10;} 
  else {vrijetijdsuitgaven = vrijetijdsuitgavenBerekening};

  const voedingBerekening = Math.round(((eigen[15] / nibud[15]) - 1) * 100);
  if (voedingBerekening >= 1000){voeding = voedingBerekening / 10;} 
  else {voeding = voedingBerekening};

  const overigBerekening = Math.round(((eigen[16] / nibud[16]) - 1) * 100);
  if (overigBerekening >= 1000){overig = overigBerekening / 10;} 
  else {overig = overigBerekening};

  const procentenArray = [
    {
      post: "gas",
      bedrag: gas
    },
    {
      post: "elektriciteit",
      bedrag: elektriciteit
    },
    {
      post: "water",
      bedrag: water
    },
    {
      post: "lokale lasten",
      bedrag: lokaleLasten
    },
    {
      post: "telefoon, tv, internet",
      bedrag: telefoonTvInternet
    },
    {
      post: "verzekeringen",
      bedrag: verzekeringen
    },
    {
      post: "onderwijs",
      bedrag: onderwijs
    },
    {
      post: "kinderopvang",
      bedrag: kinderopvang
    },
    {
      post: "contributies en abonnementen",
      bedrag: contributies
    },
    {
      post: "vervoer",
      bedrag: vervoer
    },
    // stap 3 van het formulier
    {
      post: "kleding en schoenen",
      bedrag: kleding
    },
    {
      post: "inventaris",
      bedrag: inventaris
    },
    {
      post: "onderhoud huis en tuin",
      bedrag: huisTuin
    },
    {
      post: "niet vergoede ziektekosten",
      bedrag: ziektekosten
    },
    {
      post: "vrijetijdsuitgaven",
      bedrag: vrijetijdsuitgaven
    },
    {
      post: "voeding",
      bedrag: voeding
    },
    {
      post: "overige huishoudelijke uitgaven",
      bedrag: overig
    },
  ];

  console.log("hoi", procentenArray);
  renderPersoonlijk(procentenArray);
};

function renderPersoonlijk(procentenArray){

  const svg = d3.select(".persoonlijk");

  // + zet stings om in nummers
  const width = +svg.attr('width');
  const height = +svg.attr('height');

  const margin = {top: 50, right: 100, bottom: 50, left: 200};
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xScale = d3.scaleLinear()
    // extent zorgt ervoor dat bedragen in de min kunnen staan. 
    // extent kijkt naar de laagste en hoogste waarde in de array
    .domain(d3.extent(procentenArray, function(d){return d.bedrag}))
    .range([0, innerWidth]);

  //per post een bar maken
  const yScale = d3.scaleBand()
  .domain(procentenArray.map(function(d){return d.post}))
    .range([0, innerHeight])
    .padding(0.2);

  //betere margin maken
  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  g.append('g')
    .call(d3.axisBottom(xScale))
    //X as onder zetten ipv boven
    .attr('transform', `translate(0,${innerHeight})`)
    .append('text') 
      //tekst onder de as plaatsen
      .attr('y', 35)
      //bottom tekst in het midden zetten
      .attr('x', innerWidth / 2)
      .attr('fill', 'black')
      .text('Posten');

    //de teksten onder aan rotaten 
  // g.call(d3.axisBottom(xScale))
  // 	.selectAll('.tick text')
	// 			.append("g")
	// 			.attr("class", "yaxis")
	// 			.attr("transform", "translate(" + x(0) + ",0)")
	// 			.call(axisLeft(y))
	// 			.selectAll(".tick")
	// 			.filter(function(d, i) { return data[i].value < 0; })
  // 		  .attr('y', 20)
  // 		//35 graden draaien
  // 		// .attr('transform', `rotate(35)`)
  // 		// // de anchor van de teksten staan bij start, dus onder de bar waar ze bijhoren
  // 		// .style('text-anchor', 'start');

  g.append('g')
    .call(d3.axisLeft(yScale))
    .append('text')
      .attr('x', -120)
      .attr('y', -60)
      .attr('fill', 'black')
      .text('Geld in euros')
      .attr('transform', `rotate(-90)`);

  g.append("g")
    .attr("class", "yaxis")
      .attr("transform", "translate(" + xScale(0) + ",0)")
      .call(d3.axisLeft(yScale))
      .selectAll(".tick")
      .filter(function(d, i) { return procentenArray[i].value < 0; });

  g.selectAll('.bar')
      .data(procentenArray)
    .enter().append('rect')
    .attr("class", function (d) {return "bar bar--" + (d.bedrag < 0 ? "negative" : "positive")})
        .attr('y', function(d){ return yScale(d.post)})
        .attr('height', yScale.bandwidth())
        //zorgt ervoor dat bedragen ook in de min kunnen staan
        .attr("x", function (d) {return xScale(Math.min(0, d.bedrag))})
        .attr("width", function (d) {return Math.abs(xScale(d.bedrag) - xScale(0))});
};

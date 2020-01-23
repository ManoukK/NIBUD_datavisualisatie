//hoi test

//values uit de local storage ophalen om het vervolgens in een object te stoppen
//https://www.kirupa.com/html5/storing_and_retrieving_an_array_from_local_storage.htm
// het parsen van de local storage 
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

const personalData = [
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

const personalDataClean = personalData;
const i = personalData.indexOf(0);
personalData[i] = 1;

console.log("test", personalDataClean);

// csv inladen nieuwe manier
//comment deze code aan als je werkt met de officiele dataset:
// const nibudData = d3.csv('/data/NibudDataset.csv')

//comment deze code uit als je werkt met de officiele dataset:
const nibudData = d3.csv('/data/AlternatiefDataset.csv')
  .then(nibudData  => {
    console.log("ruwe data:", nibudData )
    return nibudData.map(nibudData  => {
      return {
        post: nibudData.Post,
        huishouden: nibudData.Huishouden,
        woonsituatie: nibudData.Woonsituatie,
        inkomen: Number(nibudData.Inkomen),
        jaar: Number(nibudData.Jaar),
        bedrag: Number(nibudData.Bedrag)
      }
    })
  })
  .then(nibudData  => {
    console.log("opgeschoonde data", nibudData)
    //comment deze code aan als je werkt met de officiele dataset:
    // householdFilterFunction(nibudData);

    //comment deze twee regels code uit als je werkt met de officiele dataset:
    const incomeFilter = nibudData;
    removeArrayItemsFunction(incomeFilter)
  })
  .catch(error => {
    console.log(error)
  });

// filter code van Roy Csuka
// https://github.com/RoyCsuka/nibud/blob/master/src/cleanData.js

// //comment deze code aan als je werkt met de officiele dataset:
// function householdFilterFunction(nibudData){
//   const householdFilter = nibudData.filter(nibudData => nibudData.huishouden == huishoudenData);
//   console.log("filter huishouden", householdFilter);
//   livingSituationFilterFunction(householdFilter);
// };

// function livingSituationFilterFunction(householdFilter){
//   const livingSituationFilter = householdFilter.filter(householdFilter => householdFilter.woonsituatie == wonenData);
//   console.log("filter woon situatie", livingSituationFilter);
//   incomeFilterFunction(livingSituationFilter);
// };

// function incomeFilterFunction(livingSituationFilter){
//   const incomeFilter = livingSituationFilter.filter(livingSituationFilter => livingSituationFilter.inkomen == inkomenData);
//   //note: hier zijn al de array items eruit gefilterd die ik in de volgende function pas doe.
//   console.log("filter inkomen", incomeFilter);
//   removeArrayItemsFunction(incomeFilter);
// };

function removeArrayItemsFunction(incomeFilter){
  //https://stackoverflow.com/questions/500606/deleting-array-elements-in-javascript-delete-vs-splice
  //splice zorgt ervoor dat de items daadwerkelijk verwijderd worden en dat ze dan ook niet meer mee tellen in de array
  const removeArrayItems = incomeFilter;
  //verwijder totaal inkomen, totaal uitgaven en huur/hypotheek
  removeArrayItems.splice(0, 3);
  //verwijder totaal vaste lasten 
  removeArrayItems.splice(10, 1);
  //verwijder totaal reserveringsuitgaven
  removeArrayItems.splice(15, 1);
  //verwijder totaal huishoudelijke uitgaven en overschot/tekort
  removeArrayItems.splice(17, 2);

  const nibudDataClean = removeArrayItems.map(function(d){return d.bedrag});
  const i = nibudDataClean.indexOf(0);
  nibudDataClean[i] = 1;
  
  console.log("nieuwe array", nibudDataClean);
  // renderBarChart(personalData, nibudDataClean);
  percentCalculation(personalData, nibudDataClean);
};

function percentCalculation(personalDataClean, nibudDataClean){
  const personalSpending = personalDataClean
  const nibudSpendingAdvice = nibudDataClean

  const gasCalculation = Math.round(((personalSpending[0] / nibudSpendingAdvice[0]) - 1) * 100);
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
  if (gasCalculation >= 1000){gas = gasCalculation / 10;} 
  else {gas = gasCalculation};

  const elektriciteitCalculation = Math.round(((personalSpending[1] / nibudSpendingAdvice[1]) - 1) * 100);
  if (elektriciteitCalculation >= 1000){elektriciteit = elektriciteitCalculation / 10;} 
  else {elektriciteit = elektriciteitCalculation};

  const waterCalculation = Math.round(((personalSpending[2] / nibudSpendingAdvice[2]) - 1) * 100);
  if (waterCalculation >= 1000){water = waterCalculation / 10;} 
  else {water = waterCalculation};

  const lokaleLastenCalculation = Math.round(((personalSpending[3] / nibudSpendingAdvice[3]) - 1) * 100);
  if (lokaleLastenCalculation >= 1000){lokaleLasten = lokaleLastenCalculation / 10;} 
  else {lokaleLasten = lokaleLastenCalculation};

  const telefoonTvInternetCalculation = Math.round(((personalSpending[4] / nibudSpendingAdvice[4]) - 1) * 100);
  if (telefoonTvInternetCalculation >= 1000){telefoonTvInternet = telefoonTvInternetCalculation / 10;} 
  else {telefoonTvInternet = telefoonTvInternetCalculation};

  const verzekeringenCalculation = Math.round(((personalSpending[5] / nibudSpendingAdvice[5]) - 1) * 100);
  if (verzekeringenCalculation >= 1000){verzekeringen = verzekeringenCalculation / 10;} 
  else {verzekeringen = verzekeringenCalculation};

  const onderwijsCalculation = Math.round(((personalSpending[6] / nibudSpendingAdvice[6]) - 1) * 100);
  if (onderwijsCalculation >= 1000){onderwijs = onderwijsCalculation / 10;} 
  else {onderwijs = onderwijsCalculation};

  const kinderopvangCalculation = Math.round(((personalSpending[7] / nibudSpendingAdvice[7]) - 1) * 100);
  if (kinderopvangCalculation >= 1000){kinderopvang = kinderopvangCalculation / 10;} 
  else {kinderopvang = kinderopvangCalculation};

  const contributiesCalculation = Math.round(((personalSpending[8] / nibudSpendingAdvice[8]) - 1) * 100);
  if (contributiesCalculation >= 1000){contributies = contributiesCalculation / 10;} 
  else {contributies = contributiesCalculation};

  const vervoerCalculation = Math.round(((personalSpending[9] / nibudSpendingAdvice[9]) - 1) * 100);
  if (vervoerCalculation >= 1000){vervoer = vervoerCalculation / 10;} 
  else {vervoer = vervoerCalculation};

  const kledingCalculation = Math.round(((personalSpending[10] / nibudSpendingAdvice[10]) - 1) * 100);
  if (kledingCalculation >= 1000){kleding = kledingCalculation / 10;} 
  else {kleding = kledingCalculation};

  const inventarisCalculation = Math.round(((personalSpending[11] / nibudSpendingAdvice[11]) - 1) * 100);
  if (inventarisCalculation >= 1000){inventaris = inventarisCalculation / 10;} 
  else {inventaris = inventarisCalculation};

  const huisTuinCalculation = Math.round(((personalSpending[12] / nibudSpendingAdvice[12]) - 1) * 100);
  if (huisTuinCalculation >= 1000){huisTuin = huisTuinCalculation / 10;} 
  else {huisTuin = huisTuinCalculation};

  const ziektekostenCalculation = Math.round(((personalSpending[13] / nibudSpendingAdvice[13]) - 1) * 100);
  if (ziektekostenCalculation >= 1000){ziektekosten = ziektekostenCalculation / 10;} 
  else {ziektekosten = ziektekostenCalculation};

  const vrijetijdsuitgavenCalculation = Math.round(((personalSpending[14] / nibudSpendingAdvice[14]) - 1) * 100);
  if (vrijetijdsuitgavenCalculation >= 1000){vrijetijdsuitgaven = vrijetijdsuitgavenCalculation / 10;} 
  else {vrijetijdsuitgaven = vrijetijdsuitgavenCalculation};

  const voedingCalculation = Math.round(((personalSpending[15] / nibudSpendingAdvice[15]) - 1) * 100);
  if (voedingCalculation >= 1000){voeding = voedingCalculation / 10;} 
  else {voeding = voedingCalculation};

  const overigCalculation = Math.round(((personalSpending[16] / nibudSpendingAdvice[16]) - 1) * 100);
  if (overigCalculation >= 1000){overig = overigCalculation / 10;} 
  else {overig = overigCalculation};

  const cleanData = [
    {
      post: "Gas",
      bedrag: gas,
      eigenBedrag: personalSpending[0],
      nibudAdvies: nibudSpendingAdvice[0]
    },
    {
      post: "Elektriciteit",
      bedrag: elektriciteit,
      eigenBedrag: personalSpending[1],
      nibudAdvies: nibudSpendingAdvice[1]
    },
    {
      post: "Water",
      bedrag: water,
      eigenBedrag: personalSpending[2],
      nibudAdvies: nibudSpendingAdvice[2]
    },
    {
      post: "Lokale lasten",
      bedrag: lokaleLasten,
      eigenBedrag: personalSpending[3],
      nibudAdvies: nibudSpendingAdvice[3]
    },
    {
      post: "Telefoon, TV, internet",
      bedrag: telefoonTvInternet,
      eigenBedrag: personalSpending[4],
      nibudAdvies: nibudSpendingAdvice[4]
    },
    {
      post: "Verzekeringen",
      bedrag: verzekeringen,
      eigenBedrag: personalSpending[5],
      nibudAdvies: nibudSpendingAdvice[5]
    },
    {
      post: "Onderwijs",
      bedrag: onderwijs,
      eigenBedrag: personalSpending[6],
      nibudAdvies: nibudSpendingAdvice[6]
    },
    {
      post: "Kinderopvang",
      bedrag: kinderopvang,
      eigenBedrag: personalSpending[7],
      nibudAdvies: nibudSpendingAdvice[7]
    },
    {
      post: "Contributies en abonnementen",
      bedrag: contributies,
      eigenBedrag: personalSpending[8],
      nibudAdvies: nibudSpendingAdvice[8]
    },
    {
      post: "Vervoer",
      bedrag: vervoer,
      eigenBedrag: personalSpending[9],
      nibudAdvies: nibudSpendingAdvice[9]
    },
    // stap 3 van het formulier
    {
      post: "Kleding en schoenen",
      bedrag: kleding,
      eigenBedrag: personalSpending[10],
      nibudAdvies: nibudSpendingAdvice[10]
    },
    {
      post: "Inventaris",
      bedrag: inventaris,
      eigenBedrag: personalSpending[11],
      nibudAdvies: nibudSpendingAdvice[11]
    },
    {
      post: "Onderhoud huis en tuin",
      bedrag: huisTuin,
      eigenBedrag: personalSpending[12],
      nibudAdvies: nibudSpendingAdvice[12]
    },
    {
      post: "Niet vergoede ziektekosten",
      bedrag: ziektekosten,
      eigenBedrag: personalSpending[13],
      nibudAdvies: nibudSpendingAdvice[13]
    },
    {
      post: "Vrijetijdsuitgaven",
      bedrag: vrijetijdsuitgaven,
      eigenBedrag: personalSpending[14],
      nibudAdvies: nibudSpendingAdvice[14]
    },
    {
      post: "Voeding",
      bedrag: voeding,
      eigenBedrag: personalSpending[15],
      nibudAdvies: nibudSpendingAdvice[15]
    },
    {
      post: "Overige huishoudelijke uitgaven",
      bedrag: overig,
      eigenBedrag: personalSpending[16],
      nibudAdvies: nibudSpendingAdvice[16]
    },
  ];

  console.log("hoi", cleanData);

  renderBarChart(cleanData);
};

function renderBarChart(cleanData){

  //sorteerd alle code van hoge naar lage waardes
  cleanData.sort(function(a, b) {return d3.descending(a.bedrag, b.bedrag)});

  const svg = d3.select(".datavis");

  // + zet stings om in nummers
  const width = +svg.attr('width');
  const height = +svg.attr('height');
  const margin = {top: 50, right: 100, bottom: 50, left: 200};
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const tooltip = d3.select("body").append("div").attr("class", "toolTip");

  const xScale = d3.scaleLinear()
    // extent zorgt ervoor dat bedragen in de min kunnen staan. 
    // extent kijkt naar de laagste en hoogste waarde in de array
    .domain(d3.extent(cleanData, function(d){return d.bedrag}))
    .range([0, innerWidth])
    //nice zorgt ervoor dat ik de begin en eind waarde ziet in de x-as
    .nice();

  //per post een bar maken
  const yScale = d3.scaleBand()
    .domain(cleanData.map(function(d){return d.post}))
    .range([0, innerHeight])
    .padding(0.2);

  //betere margin maken
  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  //x as aanmaken
  //https://stackoverflow.com/questions/18474620/d3-js-tickformat-adding-a-sign-without-multiplying-by-100
  const xAxisMaker = d3.axisBottom(xScale);
  xAxisMaker.tickFormat(function(d){return d + "%"});
  xAxisMaker.tickSize(-innerHeight);

  const xAxis = g.append('g')
    .call(xAxisMaker);

  xAxis.attr('transform', `translate(0,${innerHeight})`);
  xAxis.selectAll('text')
    .attr('y', 15)
    .style('font-size', '1em')

  const yAxis = g.append("g")
    // .data(cleanData)
    .attr("class", "yaxis")
    .attr("transform", "translate(" + xScale(0) + ",0)")
    .call(d3.axisLeft(yScale))
    .selectAll(".tick")
    .style('font-size', '1.5em') 
    .filter(function(d, i){ return cleanData[i].bedrag < 0 })

  yAxis.selectAll('line')
    .attr("x2", 6)
			
  yAxis.selectAll("text")
    .attr("x", 9)
    .style("text-anchor", "start");	
     

  const createBarChart = g
    .selectAll('.bar')
    .data(cleanData)
    .enter().append('rect')
    .attr("class", function (d) {return "bar bar--" + (d.bedrag < 0 ? "negative" : "positive")})
    .attr('y', function(d){ return yScale(d.post)})
    .attr('height', yScale.bandwidth())
    //zorgt ervoor dat bedragen ook in de min kunnen staan
    .attr("x", function (d) {return xScale(Math.min(0, d.bedrag))})
    .attr("width", function (d) {return Math.abs(xScale(d.bedrag) - xScale(0))})
    //bron tooltip: https://bl.ocks.org/alandunning/274bf248fd0f362d64674920e85c1eb7
    .on("mousemove", function(d){
      tooltip
        .style("left", d3.event.pageX - 50 + "px")
        .style("top", d3.event.pageY - 110 + "px")
        .style("display", "inline-block")
        .html((d.post) + "<br>" + "<br>" + "Advies: " + '€' + (d.nibudAdvies) + "<br>" + "Uitgegeven: " + '€' + (d.eigenBedrag));
        // .html((d.post) + "<br>" + "Geadviseerde bedrag: " + (d.bedrag) + "<br>" + "Uitgegeven: " + (d.bedrag));
    })
    .on("mouseout", function(d){ 
      tooltip
        .style("display", "none");
    });   
};

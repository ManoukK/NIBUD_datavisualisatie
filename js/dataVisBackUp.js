//values uit de local storage ophalen om het vervolgens in een object te stoppen
//https://www.kirupa.com/html5/storing_and_retrieving_an_array_from_local_storage.htm
// het parsen van de local storage https://theshravan.net/blog/storing-json-objects-in-html5-local-storage/
//https://stackoverflow.com/questions/51173341/crossfilter-loading-a-json-file-from-localstorage
// stap 1 van het formulier
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

// //object met alle data van de local storage 
const resultsPersoonlijk = {
    gas: gasData,
    elektriciteit: elektriciteitData,
    water: waterData,
    lokaleLasten: lokaleLastenData,
    telefoonTvInternet: telefoonTVInternetData,
    verzekeringen: verzekeringenData,
    onderwijs: onderwijsData,
    kinderopvang: kinderopvangData,
    contributiesAbonnementen: contributiesAbonnementenData,
    vervoer: vervoerData,
    // stap 3 van het formulier
    kledingSchoenen: kledingSchoenenData,
    inventaris: inventarisData,
    onderhoudHuisTuin: onderhoudHuisTuinData,
    nietVergoedeZiektekosten: nietVergoedeZiektekostenData,
    vrijetijdsuitgaven: vrijetijdsuitgavenData,
    voeding: voedingData,
    overigeHuishoudelijkeUitgaven: overigeHuishoudelijkeUitgavenData
};

function renderPersoonlijk(resultsPersoonlijk){
  const svg = d3.select(".persoonlijk");

  // + zet stings om in nummers
  const width = +svg.attr('width');
  const height = +svg.attr('height');

  //https://stackoverflow.com/questions/4437916/how-to-convert-all-elements-in-an-array-to-integer-in-javascript
  // Object.values of keys https://javascript.info/keys-values-entries
  const bedragenPersoonlijk = Object.values(resultsPersoonlijk);
  const postenPersoonlijk = Object.keys(resultsPersoonlijk);

  const yValue = bedragenPersoonlijk;
  const xValue = postenPersoonlijk;

  const margin = {top: 50, right: 100, bottom: 50, left: 100};
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const yScale = d3.scaleLinear()
    // .domain(bedragen.map(function(key, values){results[values]}))
    .domain([0, d3.max(yValue)])
    // .domain([0, 400])
    .range([innerHeight, 0]);

  //per post een bar maken
  const xScale = d3.scaleBand()
    .domain(xValue)
    .range([0, innerWidth])
    .padding(0.2);

  //betere margin maken
  const g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  const xAxisGroup = g.append('g')
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
  g.call(d3.axisBottom(xScale))
  	.selectAll('.tick text')
  		.attr('y', 20)
  		//35 graden draaien
  		.attr('transform', `rotate(35)`)
  		// de anchor van de teksten staan bij start, dus onder de bar waar ze bijhoren
  		.style('text-anchor', 'start');

  const yAxisGroup = g.append('g')
    .call(d3.axisLeft(yScale))
    .append('text')
      .attr('x', -120)
      .attr('y', -60)
      .attr('fill', 'black')
      .text('Geld in euros')
      .attr('transform', `rotate(-90)`);

  g.selectAll('.bar')
      .data(postenPersoonlijk)
    .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', function(d){ return xScale(d)})
        .attr('width', xScale.bandwidth())
        //zonder d hier word alles op zn kop gezet
        .attr('y', function(d, i) {return yScale(bedragenPersoonlijk[i])})
        .attr('height', function(d, i){ console.log(); return innerHeight - yScale(bedragenPersoonlijk[i])});

  // g.selectAll('.NIBUD')
  //   .data(dataNIBUD)
  // .enter().append('rect')
  //   .attr('class', 'NIBUD')
  //   .attr('x', function(d){ return xScale(d)})
  //   .attr('width', xScale.bandwidth())
  //   //zonder d hier word alles op zn kop gezet
  //   .attr('y', function(d, i) {return yScale(dataNIBUD.bedrag[i])})
  //   .attr('height', function(d, i){ console.log(); return innerHeight - yScale(dataNIBUD.bedrag[i])});

	// g.selectAll('.NIBUD').data(dataNIBUD)
  // 	.enter().append('rect')
  // 		.attr('class', '.NIBUD')
  //     .attr('x', d => xScale(dataNIBUD.post(d)))
  //     .attr('width', d => xScale.bandwidth())
  // 		//deze onderste twee regels code van: 
  // 		//https://codepen.io/bclinkinbeard/pen/aqOLNq?editors=1010 
  // 		//Dit 'invert' de bars omdat 0 eigenlijk boven is. 
  //     .attr('y', d => yScale(dataNIBUD.bedrag(d)))
  //     .attr('height', d => innerHeight - yScale(dataNIBUD.bedrag(d)))
      

  // g.selectAll('.NIBUD')
  //     .data(dataNIBUD)
  //   .enter().append('rect')
  //       .attr('class', 'NIBUD')
  //       .attr('x', function(d){ return xScaleTwee(d)})
  //       .attr('width', xScaleTwee.bandwidth())
  //       //zonder d hier word alles op zn kop gezet
  //       .attr('y', function(d, i) {return yScaleTwee(testBedrag[i])})
  //       .attr('height', function(d, i){ console.log(); return innerHeight - yScaleTwee(testBedrag[i])});
};

// // csv inladen (oude manier)
// const dataNIBUD = d3.csv('/data/begrotingNIBUD2.csv')
//   .then(dataNIBUD => {
//       // console.log(dataNIBUD)
//         	return dataNIBUD.map(dataNIBUD => {
//             return {
//               post: dataNIBUD.post,
//               bedrag: Number(dataNIBUD.bedrag),
//               // inkomen: dataNIBUD.Inkomen
//             }
//         })
//     })
//   .then(dataNIBUD => {
//     // console.log(dataNIBUD)
//     renderNibud(dataNIBUD);
//   })
//   .catch(error => {
//     console.log(error)
//   });

// csv inladen nieuwe manier
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
  renderNibud(schoneData);
}

  //bar chart voor nibud
function renderNibud(schoneData){

  const svg = d3.select(".nibud");

// deze link bracht me op het idee op d.post te proberen
//https://stackoverflow.com/questions/48390208/d3-attribute-height-expected-length-nan
  const nibudPost = schoneData => d.post;
  const nibudBedrag = schoneData => d.bedrag;

  // + zet stings om in nummers
  const width = +svg.attr('width');
  const height = +svg.attr('height');

  const yValue = nibudBedrag;
  const xValue = nibudPost;
    
  const margin = {top: 50, right: 100, bottom: 50, left: 100};
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  
  const yScale = d3.scaleLinear()
    .domain([0, d3.max(schoneData, function(d){return d.bedrag})])
    // .domain([0, 1400])
    .range([innerHeight, 0]);

    //per post een bar maken
    const xScale = d3.scaleBand()
    //door de posten mappen om de posten te zien
    //bron: https://stackoverflow.com/questions/58786822/error-rect-attribute-and-expected-length-d3-js
      //.domain(schoneData function(d){return d.post})
      //.domain(schoneData.post)
      .domain(schoneData.map(function(d){return d.post}))
      .range([0, innerWidth])
      .padding(0.2);
  
    //betere margin maken
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
  
    const xAxisGroup = g.append('g')
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
    g.call(d3.axisBottom(xScale))
        .selectAll('.tick text')
            .attr('y', 20)
            //35 graden draaien
            .attr('transform', `rotate(35)`)
            // de anchor van de teksten staan bij start, dus onder de bar waar ze bijhoren
            .style('text-anchor', 'start');
  
    const yAxisGroup = g.append('g')
      .call(d3.axisLeft(yScale))
      .append('text')
        .attr('x', -120)
        .attr('y', -60)
        .attr('fill', 'black')
        .text('Geld in euros')
        .attr('transform', `rotate(-90)`);
  
  // g.selectAll('.barNibud')
  //   .data(dataNIBUD)
  // .enter().append('rect')
  //     .attr('class', '.barNibud')
  //     .attr('x', function(d){ return xScale(d)})
  //     .attr('width', xScale.bandwidth())
  //     //zonder d hier word alles op zn kop gezet
  //     .attr('y', d => yScale(yValue(d)))
  //     .attr('height', d => innerHeight - yScale(yValue(d)));

  // //bar chart 
  // g.selectAll('.barNibud')
  //     .data(schoneData)
  //   .enter().append('rect')
  //       .attr('class', 'barNibud')
  //       .attr('x', function(d){ return xScale(d.post)})
  //       .attr('width', xScale.bandwidth())
  //       //zonder d hier word alles op zn kop gezet
  //       .attr('y', function(d, i) {return yScale(d.bedrag)})
  //       .attr('height', function(d, i){return innerHeight - yScale(d.bedrag)});

//   var eSel = chart1.selectAll(".barNibud")
//   .data(schoneData)
//   .enter();

// eSel.append("rect")
//   .attr("class", "bar")

// //https://www.dashingd3js.com/svg-paths-and-d3js
// //https://stackoverflow.com/questions/29257809/d3-js-bar-chart-with-target-lines
// g.selectAll('.lineNibud')
//   .data(schoneData)
//   .enter().append("path")
//   .attr('class', 'lineNibud')
//   .attr("d", function(d){
//     let makeLineValues = 'm' + xScale(d.post) + ',' + yScale(d.bedrag); // move to
//     makeLineValues += 'l' + xScale(d.post) + xScale.bandwidth() + ',' + yScale(d.bedrag); // line
//     console.log(makeLineValues)
//     return makeLineValues});

//goede code
// g.selectAll('.lineNibud')
//   .data(schoneData)
//   .enter().append("path")
//   .attr('class', 'lineNibud')
//   .attr("d", function(d){
//     //volgonde is x, y 
//     // m = verplicht. Een path moet beginnen met een m anders word er niks gemaakt. 
//     let makeLineValues = 'm' + xScale(d.post) + ',' + yScale(d.bedrag);
//     //h = horizontaal, alle lijnen die ik nu maak worden horizontaal gemaakt.
//     makeLineValues += 'h' + xScale.bandwidth();

//     console.log(makeLineValues)
//     return makeLineValues
//   });


g.selectAll('.lineNibud')
  .data(schoneData)
  .enter().append("path")
  .attr('class', 'lineNibud')
  .attr("d", function(d){
    //volgonde is x, y 
    // m = verplicht. Een path moet beginnen met een m anders word er niks gemaakt. 
    // nu beginnen ze op de x-as helemaal onderaan
    let makeLineValues = 'm' + xScale(d.post) + ',' + innerHeight;
    //v = verticaal, alle lijnen worden nu verticaal gemaakt. Ik zet er een - voor zodat het omhoog gaat ipv naar beneden
    makeLineValues += 'v' + '-' + (innerHeight - yScale(d.bedrag));
    //h = horizontaal, alle lijnen die ik nu maak worden horizontaal gemaakt.
    makeLineValues += 'h' + xScale.bandwidth();
    //v = verticaal, alle lijnen worden nu verticaal gemaakt. Nu staat er geen - voor want ze gaan onaar beneden
    makeLineValues += 'v' + (innerHeight - yScale(d.bedrag));

    console.log(makeLineValues)
    return makeLineValues
  });

};

renderPersoonlijk(resultsPersoonlijk);
// renderNibud(schoneData);
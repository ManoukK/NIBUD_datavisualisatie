// //values uit de local storage ophalen om het vervolgens in een object te stoppen
// //https://www.kirupa.com/html5/storing_and_retrieving_an_array_from_local_storage.htm
// // het parsen van de local storage https://theshravan.net/blog/storing-json-objects-in-html5-local-storage/
// //https://stackoverflow.com/questions/51173341/crossfilter-loading-a-json-file-from-localstorage
// // stap 1 van het formulier
// const huishoudenData = localStorage.getItem("huishouden");
// const wonenData = localStorage.getItem("woon situatie");
// const inkomenData = localStorage.getItem("inkomen");
// // stap 2 van het formulier
// const gasData = JSON.parse(localStorage.getItem("gas"));
// const elektriciteitData = JSON.parse(localStorage.getItem("elektriciteit"));
// const waterData = JSON.parse(localStorage.getItem("water"));
// const lokaleLastenData = JSON.parse(localStorage.getItem("lokale lasten"));
// const telefoonTVInternetData = JSON.parse(localStorage.getItem("telefoon tv internet"));
// const verzekeringenData = JSON.parse(localStorage.getItem("verzekeringen"));
// const onderwijsData = JSON.parse(localStorage.getItem("onderwijs"));
// const kinderopvangData = JSON.parse(localStorage.getItem("kinderopvang"));
// const contributiesAbonnementenData = JSON.parse(localStorage.getItem("contributies abonnementen"));
// const vervoerData = JSON.parse(localStorage.getItem("vervoer"));
// // stap 3 van het formulier
// const kledingSchoenenData = JSON.parse(localStorage.getItem("kleding schoenen"));
// const inventarisData = JSON.parse(localStorage.getItem("inventaris"));
// const onderhoudHuisTuinData = JSON.parse(localStorage.getItem("onderhoud huis tuin"));
// const nietVergoedeZiektekostenData = JSON.parse(localStorage.getItem("niet vergoede ziektekosten"));
// const vrijetijdsuitgavenData = JSON.parse(localStorage.getItem("vrijetijdsuitgaven"));
// const voedingData = JSON.parse(localStorage.getItem("voeding"));
// const overigeHuishoudelijkeUitgavenData = JSON.parse(localStorage.getItem("overige huishoudelijke uitgaven"));

// // // //object met alle data van de local storage 
// // const results = {
// //     // stap 1 van het formulier
// //     // huishouden: huishoudenData,
// //     // wonen: wonenData,
// //     // inkomen: inkomenData, 
// //     // stap 2 van het formulier
// //     gas: gasData,
// //     elektriciteit: elektriciteitData,
// //     water: waterData,
// //     lokaleLasten: lokaleLastenData,
// //     telefoonTvInternet: telefoonTVInternetData,
// //     verzekeringen: verzekeringenData,
// //     onderwijs: onderwijsData,
// //     kinderopvang: kinderopvangData,
// //     contributiesAbonnementen: contributiesAbonnementenData,
// //     vervoer: vervoerData,
// //     // stap 3 van het formulier
// //     kledingSchoenen: kledingSchoenenData,
// //     inventaris: inventarisData,
// //     onderhoudHuisTuin: onderhoudHuisTuinData,
// //     nietVergoedeZiektekosten: nietVergoedeZiektekostenData,
// //     vrijetijdsuitgaven: vrijetijdsuitgavenData,
// //     voeding: voedingData,
// //     overigeHuishoudelijkeUitgaven: overigeHuishoudelijkeUitgavenData
// // };

// //array van hemaakt dankzij https://stackoverflow.com/questions/13715891/d3-json-uncaught-typeerror-cannot-read-property-children-of-undefined
// // const results = {
// //     // stap 1 van het formulier
// //     // gegevens: {
// //     //     post: "Huishouden",
// //     //     bedrag: huishoudenData,
// //     // },
// //     // gegevens: {
// //     //     post: "Wonen",
// //     //     bedrag: wonenData,
// //     // },
// //     // gegevens: {
// //     //     post: "Inkomen",
// //     //     bedrag: inkomenData,
// //     // },

//     // stap 2 van het formulier
// const results = {
//     0: {
//         post: "gas",
//         bedrag: gasData,
//     },
//     1: {
//         post: "elektriciteit",
//         bedrag: elektriciteitData,
//     },
//     2: {
//         post: "water",
//         bedrag: waterData,
//     },
//     3: {
//         post: "lokale lasten",
//         bedrag: lokaleLastenData,
//     },
//     4: {
//         post: "telefoon, televisie, internet",
//         bedrag: telefoonTVInternetData,
//     },
//     5: {
//         post: "verzekeringen",
//         bedrag: verzekeringenData,
//     },
//     6: {
//         post: "onderwijs",
//         bedrag: onderwijsData,
//     },
//     7: {
//         post: "kinderopvang",
//         bedrag: kinderopvangData,
//     },
//     8: {
//         post: "contributies en abonnementen",
//         bedrag: contributiesAbonnementenData,
//     },
//     9: {
//         post: "vervoer",
//         bedrag: vervoerData,
//     },  
//     // stap 3 van het formulier
//     10: {
//         post: "kleding en schoenen",
//         bedrag: kledingSchoenenData,
//     },    
//     11: {
//         post: "inventaris",
//         bedrag: inventarisData,
//     },  
//     12: {
//         post: "onderhoud huis en tuin",
//         bedrag: onderhoudHuisTuinData,
//     },  
//     13: {
//         post: "niet-vergoede ziektekosten",
//         bedrag: nietVergoedeZiektekostenData,
//     },  
//     14: {
//         post: "vrijetijdsuitgaven",
//         bedrag: vrijetijdsuitgavenData,
//     },  
//     15: {
//         post: "voeding",
//         bedrag: voedingData,
//     },  
//     16: {
//         post: "overige huishoudelijke uitgaven",
//         bedrag: overigeHuishoudelijkeUitgavenData,
//     },  
// };

// console.log(results);

// const svg = d3.select('svg');

// // + zet stings om in nummers
// const width = +svg.attr('width');
// const height = +svg.attr('height');
  
//   //basis regels voor de bar chart
// function render(results) {
//   //const yValue = results.bedrag;
//   //const xValue = results.post;

//   //https://stackoverflow.com/questions/4437916/how-to-convert-all-elements-in-an-array-to-integer-in-javascript
//   // Object.values of keys https://javascript.info/keys-values-entries
//   // const bedragen = Object.values(results);
//   // const posten = Object.keys(results);
//   const bedragen = results => result.bedrag;
//   const posten = results => result.post;

//   const yValue = bedragen;
//   const xValue = posten;

//   console.log("yValue is nu: ", yValue);
//   console.log("xValue is nu: ", xValue);

//   const margin = {top: 50, right: 100, bottom: 50, left: 100};
//   const innerWidth = width - margin.left - margin.right;
//   const innerHeight = height - margin.top - margin.bottom;
  
//   const yScale = d3.scaleLinear()
//     // .domain(bedragen.map(function(key, values){results[values]}))
//     .domain([0, d3.max(results, yValue)])
//     .range([innerHeight, 0]);
  
//   //per post een bar maken
//   const xScale = d3.scaleBand()
//     .domain(results.map(xValue))
//     .range([0, innerWidth])
//     .padding(0.2);
  
//   //betere margin maken
//   const g = svg.append('g')
//     .attr('transform', `translate(${margin.left},${margin.top})`);
  
//   const xAxisGroup = g.append('g')
//     .call(d3.axisBottom(xScale))
//     //X as onder zetten ipv boven
//     .attr('transform', `translate(0,${innerHeight})`)
//     .append('text') 
//       //tekst onder de as plaatsen
//       .attr('y', 35)
//       //bottom tekst in het midden zetten
//       .attr('x', innerWidth / 2)
//         .attr('fill', 'black')
//       .text('Posten')
  
//   // g.call(d3.axisBottom(xScale))
//   //   .selectAll('.tick line')
//   //     .remove();
  
//   const yAxisGroup = g.append('g')
//     .call(d3.axisLeft(yScale))
//     .append('text')
//        .attr('x', -120)
//       .attr('y', -60)
//       .attr('fill', 'black')
//       .text('Geld in euros')
//       .attr('transform', `rotate(-90)`);
  
//   // rechthoeken maken
//   g.selectAll('.bar').data(results)
//     .enter().append('rect')
//         .attr('class', 'bar')
//         .attr('x', d => xScale(xValue(d)))
//         .attr('width', d => xScale.bandwidth())
//         .attr('y', d => yScale(yValue(d)))
//         .attr('height', d => innerHeight - yScale(yValue(d)));

// //   // rechthoeken maken
// //   g.selectAll('.bar').data(results)
// //     .enter().append('rect')
// //         .attr('class', 'bar')
// //         .attr('x', xValue)
// //         .attr('width', xScale.bandwidth())
// //         .attr('y', yValue)
// //         .attr('height', innerHeight - yScale);

//   // // rechthoeken maken
//   // g.selectAll('.bar')
//   //     .data(results)
//   //   .enter().append('rect')
//   //       .attr('class', 'bar')
//   //       .attr('x', function(d){return xScale(posten(d))})
//   //       .attr('width', xScale.bandwidth())
//   //       .attr('y', function(d) {return yScale(bedragen(d))})
//   //       .attr('height', function(d){ return innerHeight - yScale(+d[bedragen(d)])});

// };

// render(results);




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
const results = {
    // stap 1 van het formulier
    // huishouden: huishoudenData,
    // wonen: wonenData,
    // inkomen: inkomenData, 
    // stap 2 van het formulier
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

const svg = d3.select('svg');

// + zet stings om in nummers
const width = +svg.attr('width');
const height = +svg.attr('height');

  //basis regels voor de bar chart
const render = results => {
  //const yValue = results.bedrag;
  //const xValue = results.post;


  //https://stackoverflow.com/questions/4437916/how-to-convert-all-elements-in-an-array-to-integer-in-javascript
  // Object.values of keys https://javascript.info/keys-values-entries
  const bedragen = Object.values(results);
  const posten = Object.keys(results);
  // const yValue = bedragen.map(Number);
  const yValue = bedragen;
  const xValue = posten;

  console.log("resultaten", results);
  console.log("bedragen", bedragen);
  console.log("posten", posten);

  const margin = {top: 50, right: 100, bottom: 50, left: 100};
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const yScale = d3.scaleLinear()
    // .domain(bedragen.map(function(key, values){results[values]}))
    .domain([0, d3.max(yValue)])
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
      .text('Posten')

  const yAxisGroup = g.append('g')
    .call(d3.axisLeft(yScale))
    .append('text')
       .attr('x', -120)
      .attr('y', -60)
      .attr('fill', 'black')
      .text('Geld in euros')
      .attr('transform', `rotate(-90)`);

  g.selectAll('.bar')
      .data(posten)
    .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', function(d){ return xScale(d)})
        .attr('width', xScale.bandwidth())
        //zonder d hier word alles op zn kop gezet
        .attr('y', function(d, i) {return yScale(bedragen[i])})
        .attr('height', function(d, i){ console.log(); return innerHeight - yScale(bedragen[i])});

};

render(results);

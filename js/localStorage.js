// //hier begint de code voor de localstorage
// //bron: https://www.youtube.com/watch?v=NxVCq4p0Kb0
// //bron: https://www.youtube.com/watch?v=k8yJCeuP6I8

// function store(){
//     // stap 1 van het formulier
//     localStorage.setItem("huishouden", document.getElementById('huishouden').value);

//     // localStorage.setItem("aantal kinderen 0", document.getElementById('kind0').value);
//     // localStorage.setItem("aantal kinderen 1", document.getElementById('kind1').value);
//     // localStorage.setItem("aantal kinderen 2", document.getElementById('kind2').value);
//     // localStorage.setItem("aantal kinderen 3", document.getElementById('kind3').value);

//     localStorage.setItem("woon situatie", document.getElementById('wonen').value);
//     localStorage.setItem("inkomen", document.getElementById('inkomen').value);
//     //stap 2 van het formulier
//     localStorage.setItem("gas", document.getElementById('gas').value);
//     localStorage.setItem("elektriciteit", document.getElementById('elektriciteit').value);
//     localStorage.setItem("water", document.getElementById('water').value);
//     localStorage.setItem("lokale lasten", document.getElementById('lokaleLasten').value);
//     localStorage.setItem("telefoon tv internet", document.getElementById('telefoonTvInternet').value);
//     localStorage.setItem("verzekeringen", document.getElementById('verzekeringen').value);
//     localStorage.setItem("onderwijs", document.getElementById('onderwijs').value);
//     localStorage.setItem("kinderopvang", document.getElementById('kinderopvang').value);
//     localStorage.setItem("contributies abonnementen", document.getElementById('contributiesAbonnementen').value);
//     localStorage.setItem("vervoer", document.getElementById('vervoer').value);
//     //stap 3 van het formulier
//     localStorage.setItem("kleding schoenen", document.getElementById('kledingSchoenen').value);
//     localStorage.setItem("inventaris", document.getElementById('inventaris').value);
//     localStorage.setItem("onderhoud huis tuin", document.getElementById('onderhoudHuisTuin').value);
//     localStorage.setItem("niet vergoede ziektekosten", document.getElementById('nietVergoedeZiektekosten').value);
//     localStorage.setItem("vrijetijdsuitgaven", document.getElementById('vrijetijdsuitgaven').value);
//     localStorage.setItem("voeding", document.getElementById('voeding').value);
//     localStorage.setItem("overige huishoudelijke uitgaven", document.getElementById('overigeHuishoudelijkeUitgaven').value);
//    };

// console.log(localStorage);

//https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse

function store(){
    // stap 1 van het formulier
    localStorage.setItem("huishouden", document.getElementById('huishouden').value);

    // localStorage.setItem("aantal kinderen 0", document.getElementById('kind0').value);
    // localStorage.setItem("aantal kinderen 1", document.getElementById('kind1').value);
    // localStorage.setItem("aantal kinderen 2", document.getElementById('kind2').value);
    // localStorage.setItem("aantal kinderen 3", document.getElementById('kind3').value);

    localStorage.setItem("woon situatie", document.getElementById('wonen').value);
    localStorage.setItem("inkomen", document.getElementById('inkomen').value);
    //stap 2 van het formulier
    localStorage.setItem("gas", document.getElementById('gas').value);
    localStorage.setItem("elektriciteit", document.getElementById('elektriciteit').value);
    localStorage.setItem("water", document.getElementById('water').value);
    localStorage.setItem("lokale lasten", document.getElementById('lokaleLasten').value);
    localStorage.setItem("telefoon tv internet", document.getElementById('telefoonTvInternet').value);
    localStorage.setItem("verzekeringen", document.getElementById('verzekeringen').value);
    localStorage.setItem("onderwijs", document.getElementById('onderwijs').value);
    localStorage.setItem("kinderopvang", document.getElementById('kinderopvang').value);
    localStorage.setItem("contributies abonnementen", document.getElementById('contributiesAbonnementen').value);
    localStorage.setItem("vervoer", document.getElementById('vervoer').value);
    //stap 3 van het formulier
    localStorage.setItem("kleding schoenen", document.getElementById('kledingSchoenen').value);
    localStorage.setItem("inventaris", document.getElementById('inventaris').value);
    localStorage.setItem("onderhoud huis tuin", document.getElementById('onderhoudHuisTuin').value);
    localStorage.setItem("niet vergoede ziektekosten", document.getElementById('nietVergoedeZiektekosten').value);
    localStorage.setItem("vrijetijdsuitgaven", document.getElementById('vrijetijdsuitgaven').value);
    localStorage.setItem("voeding", document.getElementById('voeding').value);
    localStorage.setItem("overige huishoudelijke uitgaven", document.getElementById('overigeHuishoudelijkeUitgaven').value);
   };


// const result = {};

// // stap 1 van het formulier
// // result.huishouden = document.getElementById('huishouden').value;
// // localStorage.setItem("aantal kinderen 0", document.getElementById('kind0').value);
// // localStorage.setItem("aantal kinderen 1", document.getElementById('kind1').value);
// // localStorage.setItem("aantal kinderen 2", document.getElementById('kind2').value);
// // localStorage.setItem("aantal kinderen 3", document.getElementById('kind3').value);
// // result.wonen = document.getElementById('wonen').value;
// // result.inkomen = document.getElementById('inkomen').value;

// //stap 2 van het formulier
// result.gas = document.getElementById('gas').value;
// result.elektriciteit = document.getElementById('elektriciteit').value;
// result.water = document.getElementById('water').value;
// result.vasteLasten = document.getElementById('lokaleLasten').value;
// result.telefoonTVInternet = document.getElementById('telefoonTvInternet').value;
// result.verzekeringen = document.getElementById('verzekeringen').value;
// result.onderwijs = document.getElementById('onderwijs').value;
// result.kinderopvang = document.getElementById('kinderopvang').value;
// result.contributiesAbonnementen = document.getElementById('contributiesAbonnementen').value;
// result.vervoer = document.getElementById('vervoer').value;
//        //stap 3 van het formulier
// result.kledingSchoenen = document.getElementById('kledingSchoenen').value;
// result.inventaris = document.getElementById('inventaris').value;
// result.onderhoudHuisTuin = document.getElementById('onderhoudHuisTuin').value;
// result.nietVergoedeZiektekosten = document.getElementById('nietVergoedeZiektekosten').value;
// result.vrijetijdsuitgaven = document.getElementById('vrijetijdsuitgaven').value;
// result.voeding = document.getElementById('voeding').value;
// result.overigeHuishoudelijkeUitgaven = document.getElementById('overigeHuishoudelijkeUitgaven').value;
       

// memories = localStorage.getItem('memories') ?
//               JSON.parse(localStorage.getItem('memories')) : 
//               [];
// memories.push(result);
// localStorage.setItem('memories', JSON.stringify(memories));

// console.log(result);

// //hier begint de code voor de localstorage
// //bron: https://www.youtube.com/watch?v=NxVCq4p0Kb0
// //bron: https://www.youtube.com/watch?v=k8yJCeuP6I8

//https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse
function store(){
    // stap 1 van het formulier
    localStorage.setItem("huishouden", document.getElementById('huishouden').value);
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



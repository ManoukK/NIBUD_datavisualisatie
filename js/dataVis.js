//values uit de local storage ophalen om het vervolgens in een object te stoppen
//https://www.kirupa.com/html5/storing_and_retrieving_an_array_from_local_storage.htm
// stap 1 van het formulier
const huishoudenData = localStorage.getItem("huishouden");
const wonenData = localStorage.getItem("woon situatie");
const inkomenData = localStorage.getItem("inkomen");
// stap 2 van het formulier
const gasData = localStorage.getItem("gas");
const elektriciteitData = localStorage.getItem("elektriciteit");
const waterData = localStorage.getItem("water");
const lokaleLastenData = localStorage.getItem("lokale lasten");
const telefoonTVInternetData = localStorage.getItem("telefoon tv internet");
const verzekeringenData = localStorage.getItem("verzekeringen");
const onderwijsData = localStorage.getItem("onderwijs");
const kinderopvangData = localStorage.getItem("kinderopvang");
const contributiesAbonnementenData = localStorage.getItem("contributies abonnementen");
const vervoerData = localStorage.getItem("vervoer");
// stap 3 van het formulier
const kledingSchoenenData = localStorage.getItem("kleding schoenen");
const inventarisData = localStorage.getItem("inventaris");
const onderhoudHuisTuinData = localStorage.getItem("onderhoud huis tuin");
const nietVergoedeZiektekostenData = localStorage.getItem("niet vergoede ziektekosten");
const vrijetijdsuitgavenData = localStorage.getItem("vrijetijdsuitgaven");
const voedingData = localStorage.getItem("voeding");
const overigeHuishoudelijkeUitgavenData = localStorage.getItem("overige huishoudelijke uitgaven");

//object met alle data van de local storage 
const lijst = {
    // stap 1 van het formulier
    huishouden: huishoudenData,
    wonen: wonenData,
    inkomen: inkomenData, 
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

console.log(lijst);

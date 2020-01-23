# Budget Boksen 
> Een tool voor het Nibud 

> Let op! Voor de onlineversie word er een alternatieve dataset gebruikt. Het Nibud wilde niet dat de echte dataset waarmee wij werkte online kwam te staan dus hebben wij voor de onlineversie er zelf een gemaakt.  

## De opdracht 
Voor deze opdracht hebben wij in een team gewerkt met drie mensen: Raven Lakerveld, Jasper Koenen en ik (Manouk Kappé). Jasper en Raven deden voornamelijk het visuele aspect van het concept en ik deed de technische kant. Later in het proces hebben zij mij ook geholpen met de website met html en css. 

Wij hadden als opdrachtgever het Nibud. Zij helpen mensen die dreigen in de schulden te raken en mensen die al schulden hebben. 
Zij wilde graag een online tool om mensen te helpen. Met de dataset die wij kregen kon je veel kanten op en wij besloten om een online tool te maken waarbij je een begroting kan maken van je uitgaven. Hieronder verder over het concept. 

Het liefst wilde zij een datavisualisatie hebben die gemaakt was in Tableau. Het was geen must have voor hun dus hebben we ervoor gekozen om een data visualisatie te maken in D3.js. Dit biedt meer mogelijkheden. Niet alleen voor de technische kant maar ook voor de visuele kant. 

## Het concept 
Ons concept heet Budget Boksen.

##### Dit is de data visualisatie pagina van onze website. Dit is gemaakt in Adobe XD en niet in code
![Visualisatie – 21](https://user-images.githubusercontent.com/45541885/72887194-809e1600-3d0b-11ea-8347-cfb753f59698.jpg)

Onze doelgroep voor dit concept is iemand die in de schulden dreigt te raken maar er nog niet diep in zit. Diegene heeft dan ook zelf een budget coach ingeschakeld en is bereid/gemotiveerd om zijn geldzaken weer op orde te hebben. 

Het doel met onze tool is om het gesprek te starten tussen de doelgroep en de budget coach. Het is de bedoeling dat diegene inzicht krijgt in zijn huidige uitgaven en waar er mogelijkheden liggen om zijn uitgaven te verminderen/verbeteren. 

Het concept zelf werkt als volgt: iemand gaan naar de budget coach toe en samen gaan zij naar onze website zij vullen het formulier in met de juiste bedragen/gegevens en vervolgens krijgen zij een grafiek te zien. In het grafiek zie je hoeveel procent je boven of onder zit ten opzichte van het advies van Nibud. Zo kan je zien of je relatief meer of minder uitgeeft dan wat er geadviseerd wordt. Onder het grafiek worden er tips getoond en kan de doelgroep samen met de budget coach bepalen wat hij die maand wilt bereiken en waar hij op moet letten. 

##### Dit is de eind versie van de data visualisatie pagina van onze website
- FOTO VAN WAT HIER BOVEN STAAT

## installatie 
Let op! Voor de onlineversie word er een alternatieve dataset gebruikt. Het Nibud wilde niet dat de echte dataset waarmee wij werkte online kwam te staan dus hebben wij voor de onlineversie er zelf een gemaakt. Wil je dit project gebruiken met de echte dataset vraag hier dan naar bij het Nibud. 

In deze repo bovenin kun je dit project forken of downloaden. Dit doe je door op de groene knop te klikken. Als je dit project wilt gebruiken heb je D3.js nodig, jquery en de dataset. Voor meer informatie over de dataset vind je in het kopje hieronder. 

#### D3.js installeren
Om gebruik te maken van de data visualisatie moet je de D3.js link in de html body hebben staan waar op je de data visualisatie wilt laten zien. Dit is de link. Let wel op dat je de juiste versie hebt. Ik heb zelf gewerkt in versie 5. Mocht er een nieuwe versie uit zijn let dan ook op dat de namen van de d3 elementen nog correct zijn, dit kan in de nieuwere versies veranderen. 

Verder werk je met D3.js in een svg. Er zijn meerdere manieren om deze aan te maken. Ik heb de svg tag in mijn html gezet en daarin heb ik ook al de width en de height aan mee gegeven samen met een class. 
```html
<body>
    <script src="https://d3js.org/d3.v5.js"></script>
    <svg width="960" height="500" class=""></svg>
</body>
```

#### jquery installeren 
Voor dit project hebben wij ook gebruik gemaakt van jquery. Dit gebruikte wij met name voor toggle functies en andere kleine javascript functies. Om jquery te installeren heb je ook weer een script tag nodig net zoals D3.js.
```html
<script src="js/jquery-3.4.1.min.js"></script>
```
#### Let op!
Als je met de echte dataset te werk gaat van het Nibud. Lees dan ook de tekst onder het kopje: De dataset. 

## De dataset 
Het Nibud wil liever niet dat we hun dataset die wij gebruiken online komt te staan. Om toch een indruk te krijgen van het concept hebben wij een alternatieve dataset gemaakt die lijkt op wat het Nibud heeft. 

#### De dataset van het Nibud, hoe ziet dat eruit?
Ik wil/kan niet helemaal vrijgeven hoe de dataset eruit ziet maar ik laat de alternatieve dataset zien. 
In het excel bestand ziet de dataset er zo uit: 

![Schermafbeelding 2020-01-22 om 13 10 52](https://user-images.githubusercontent.com/45541885/72893460-54899180-3d19-11ea-9605-1af9da81e060.png)

De categorieën waar ik mee heb gewerkt in de data visualisatie waren eigenlijk alleen maar post en bedrag. Om persoonlijk advies te krijgen heb ik filters gemaakt die kijkt naar wat je inkomen is, je woonsituatie en je huishouden. Op basis van die gegevens wordt de rest die niet overeenkomt met deze gegevens weg gefilterd. Zo hou je uiteindelijk een kleine array over met bedragen die het Nibud adviseert per post. 

#### Code aanpassen als je met de echte dataset te werk gaat
Omdat we nu werken met een alternatieve dataset heb ik wat code moeten toevoegen en wat code moeten uit zetten. Hier ga ik uitleggen wat je aan en uit moet zetten als je met de echte dataset te werk gaat. Dit heb ik in het javascript bestand ook met commends aangegeven maar het is ook fijn en makkelijk als ik het hier duidelijk even neer zet. 

Deze codes staan allemaal in het dataVis.js bestand. 

Allereerst moet je bij het inladen van de csv de juiste dataset link aangeven.
```js
const dataNibud = d3.csv('/data/AlternatiefDataset.csv')
```

Vervolgens moet je deze code:
```js
.then(dataNibud  => {
    console.log("opgeschoonde data", dataNibud)
    const inkomenFilter = dataNibud;
    itemsVerwijderen(inkomenFilter)
  })
```
vervangen voor deze code (in het javascript bestand kan je het gewoon uit en aan zetten):
```js
.then(dataNibud  => {
    console.log("opgeschoonde data", dataNibud)
    comment deze code aan als je werkt met de officiele dataset:
    opschonenHuishouden(dataNibud);
  })
```
Voor de alternatieve dataset kan je de filterstappen overslaan. Om het over te slaan en niet veel aan de code aan te hoeven passen heb ik deze regel code geschreven: const inkomenFilter = dataNibud.

Als je met de echte dataset werkt moet je het tweede stukje code gebruiken. In de function opschonenHuishouden(dataNibud) word alles gefilterd tot een kleine gepersonaliseerde array.

Vervolgens moet je alleen nog deze code weer aan zetten en werkt alles op basis van de echte dataset van het Nibud. 
```js
function opschonenHuishouden(dataNibud ){
  const huishoudenFilter = dataNibud.filter(dataNibud  => dataNibud.huishouden == huishoudenData);
  console.log("filter huishouden", huishoudenFilter);
  opschonenWonen(huishoudenFilter);
};

function opschonenWonen(huishoudenFilter){
  const woonsituatieFilter = huishoudenFilter.filter(huishoudenFilter => huishoudenFilter.woonsituatie == wonenData);
  console.log("filter woon situatie", woonsituatieFilter);
  opschonenInkomen(woonsituatieFilter);
};

function opschonenInkomen(woonsituatieFilter){
  const inkomenFilter = woonsituatieFilter.filter(woonsituatieFilter => woonsituatieFilter.inkomen == inkomenData);
  //note: hier zijn al de array items eruit gefilterd die ik in de volgende function pas doe.
  console.log("filter inkomen", inkomenFilter);
  itemsVerwijderen(inkomenFilter);
};
```

## Procentuele berekening
Voor de data visualisatie maken wij gebruik van een procentuele berekening tussen het advies van het Nibud en wat diegene zelf in het formulier heeft ingevuld. Hieronder leg ik de berekening uit zodat je een idee krijgt hoe wij aan deze data komen. 

#### Let op!
Ik laat alleen zien hoe het werkt met de post: gas. Dit doe ik omdat het voor elke post hetzelfde is en zodat deze uitleg niet al te lange code bevat. 

Allereerst werken wij met twee verschillende array's Die worden boven in de function al benoemt. 
```js
const eigen = resultsPersoonlijkSchoon
const nibud = schoneData
```

Vervolgens maak ik een nieuwe variable die de uitslag van de berekening teruggeeft. Dit stukje: eigen[0], betekend dat het de eerste item uit de array is. Wat bij beide arrays gas is. De berekening werkt eigenlijk als volgt:
1. eigen uitgaven : Nibud advies = A
2. A - 1 = B
3. B x 100 = De uitkomst

```js 
const gasBerekening = Math.round(((eigen[0] / nibud[0]) - 1) * 100);
```
Toen ik deze code schreef liep ik tegen het probleem aan dat sommige uitkomsten boven de 1000 komen. Dit is niet de bedoeling en klopt ook niet helemaal. Dit heb ik opgelost door bij elke berekening een stukje code te schrijven die deze errors oplost. Als de uitkomst groter is dan 1000 moet de uitkomst gedeeld worden door 10. Als het niet groter is dan 1000 dan kan het door met de variable gas. 

```js
if (gasBerekening >= 1000){gas = gasBerekening / 10;} 
  else {gas = gasBerekening};
```

Op het laatst stop ik de uitkomst in een nieuwe array die samenhangt met een post titel. 
```js
const procentenArray = [
    {
      post: "gas",
      bedrag: gas
    },
```

Deze code had misschien sneller en korter gekund maar ik wist niet hoe ik dat aan moest pakken dus heb ik het op deze manier geschreven. Het was voor mij allemaal erg nieuw en om het op deze manier te schrijven heb ik wel veel geleerd hoe het werkt. Als iemand een betere manier heeft om dit te schrijven hoor ik het graag!

## Features
- [ ] Gepersonaliseerde tips 
- [ ] Webpage met alle tips 
- [ ] Beter stap 1 formulier (bijvoorbeeld aantal kinderen en huishouden gescheiden)
- [x] Animaties  

## Documentatie in de wiki
- Het proces van de data visualisatie: https://github.com/ManoukK/NIBUD_datavisualisatie/wiki/Mijn-proces
- Hoe werkt de bar chart: https://github.com/ManoukK/NIBUD_datavisualisatie/wiki/Hoe-werkt-de-bar-chart

## Bronnenlijst
#### Belangrijkste bronnen
- Het grafiek met negatieve en positieve waardes: https://bl.ocks.org/mbostock/2368837
- Een basis grafiek van Curran: https://www.youtube.com/watch?v=NlBt-7PuaLk&list=PL9yYRbwpkykvOXrZumtZWbuaXWHvjD8gi&index=7
- Local storage: https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse
- De dataset opschonen: Roy Csuka, https://github.com/RoyCsuka/nibud/blob/master/src/cleanData.js
- Animaties komen van Animista: https://animista.net/

#### overige bronnen
- Local storage begrijpen: https://www.youtube.com/watch?v=k8yJCeuP6I8 en https://www.youtube.com/watch?v=NxVCq4p0Kb0
- Values opslaan in local storage:  https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse
- Local storage waardes ophalen: https://www.kirupa.com/html5/storing_and_retrieving_an_array_from_local_storage.htm
- Local strorage parsen: https://stackoverflow.com/questions/51173341/crossfilter-loading-a-json-file-from-localstorage
- Filteren binnen de dataset: https://github.com/RoyCsuka/nibud/blob/master/src/cleanData.js
- Items verwijderen uit een array: https://stackoverflow.com/questions/500606/deleting-array-elements-in-javascript-delete-vs-splice
- If else statement voor tegen errors: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
- bar chart maken op basis van local storage: https://stackoverflow.com/questions/59736105/create-a-bar-chart-with-local-storage-data-drawing-the-bars-doesnt-work

## credits voor: 
- Jasper Koenen, die veel html en css heeft geschreven voor dit project 
- Raven Laverveld, Die mee hielp met html en css en de afbeeldingen en iconen heeft gemaakt
- Roy Csuka, die zijn opschoon code met mij wilde delen
- Mamoun Othman, die in stack overflow mij heeft geholpen met een bar chart op basis van local storage (https://stackoverflow.com/questions/59736105/create-a-bar-chart-with-local-storage-data-drawing-the-bars-doesnt-work)
- Laurens Aarnoudse, die mij heeft geholpen met het bedenken van een berekening zodat ik alle procentuele cijfers kreeg, relatief gezien van wat het Nibud adviseert

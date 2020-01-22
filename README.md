# Budget Boksen 
### Een tool voor het Nibud 

### verder bijvullen!!!!! 

## De opdracht 
Voor deze opdracht hebben wij in een team gewerkt met drie mensen. Raven Lakerveld, Jasper Koenen en ik (Manouk Kappé). Jasper en Raven deden voornamelijk het visuele aspect van het concept en ik deed de technische kant. Later in het proces hebben zij mij ook geholpen met de website met html en css. 

Wij hadden als opdrachtgever het Nibud. Zij helpen mensen die dreigen in de schulden te raken en mensen die al schulden hebben. 
Zij wilde graag een online tool om mensen te helpen. Met de dataset die wij kregen kon je veel kanten op en wij besloten om een online tool te maken waarbij je een begroting kan maken van je uitgaven. Hier onder verder over het concept. 

Het liefst wilde zij een datavisualisatie hebben die gemaakt was in Tableau. Het was geen must have voor hun dus hebben we ervoor gekozen om een data visualisatie te maken in D3.js. Dit bied meer mogelijkheden. Niet alleen voor de technische kant maar ook voor de visuele kant. 

## Het concept 
Ons concept heet Budget Boksen.

#### Dit is de data visualisatie pagina van onze website. Dit is gemaakt in Adobe XD en niet in code
![Visualisatie – 21](https://user-images.githubusercontent.com/45541885/72887194-809e1600-3d0b-11ea-8347-cfb753f59698.jpg)

Onze doelgroep voor dit concept is iemand die in de schulden dreigt te raken maar er nog niet diep in zit. Diegene heeft dan ook zelf een budget coach ingeschakeld en is bereid/gemotiveerd om zijn geld zaken weer op orde te hebben. 

Het doel met onze tool is om het gesprek te starten tussen de doelgroep en de budget coach. Het is de bedoeling dat diegene inzicht krijgt in zijn huidige uitgaven en waar er mogelijkheden liggen om zijn uitgaven te verminderen/verbeteren. 

Het concept zelf werkt alsvolgt: iemand gaan naar de budget coach toe en samen gaan zij naar onze website zij vullen het formulier in met de juiste bedragen/gegevens en vervolgens krijgen zij een grafiek te zien. In het grafiek zie je hoeveel porcent je boven of onder zit ten opzichte van het advies van Nibud. Zo kan je zien of je relatief meer of minder uitgeeft dan wat er geadviseerd word. Onder het grafiek worden er tips getoont en kan de doelgroep samen met de budget coach bepalen wat hij die maand wilt bereiken en waar hij op moet letten. 

## installatie 
- via github 
- d3.js
- de dataset 

## De dataset 

## Features
- [ ] Gepersonaliseerde tips 
- [ ] Webpage met alle tips 
- [ ] Beter stap 1 formulier (bijvoorbeeld aantal kinderen en huishouden opgesplists)
- [ ] Animaties  

## Documentatie in de wiki
- Het proces van de data visualisatie: https://github.com/ManoukK/NIBUD_datavisualisatie/wiki/Mijn-proces
- Hoe werkt de bar chart: https://github.com/ManoukK/NIBUD_datavisualisatie/wiki/Hoe-werkt-de-bar-chart
- Hoe zit de dataset in elkaar: https://github.com/ManoukK/NIBUD_datavisualisatie/wiki/De-dataset-van-het-Nibud

## Bronnenlijst
Hier onder zie je een bronnenlijst met de belangrijkste of grootste elementen uit dit concept. Uiteraard heb ik ook veel kleine dingentjes op gezocht. Deze staan in de comments in de code vermeld. 

- Het grafiek met negatieve en positieve waardes: https://bl.ocks.org/mbostock/2368837
- Een basis grafiek van Curran: https://www.youtube.com/watch?v=NlBt-7PuaLk&list=PL9yYRbwpkykvOXrZumtZWbuaXWHvjD8gi&index=7
- Local storage: https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse
- De dataset opschonen: Roy Csuka, https://github.com/RoyCsuka/nibud/blob/master/src/cleanData.js

## credits voor: 
- Jasper Koenen, die heel erg veel html en css heeft geschreven voor dit project 
- Raven Laverveld, Die mee hielp met html en css en de afbeeldingen heeft gemaakt
- Roy Csuka, die zijn opschoon code met mij wilde delen
- Mamoun Othman, die in stack overflow mij heeft geholpen met een bar chart op basis van local storage (https://stackoverflow.com/questions/59736105/create-a-bar-chart-with-local-storage-data-drawing-the-bars-doesnt-work)
- Laurens Aarnoudse, die mij heeft geholpen met het bedenken van een berekening zodat ik alle procentuele cijfers kreeg, relatief gezien van wat het Nibud adviseerd

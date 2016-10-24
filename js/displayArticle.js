//
//		displayArticle.js
//		by Tobias Wulvik
//

// Laster inn tagene til variabler
var paragraph = document.getElementById("articleP");
var title = document.getElementsByClassName("sectionTitle")[0];
var image = document.getElementById("articlePhoto");
console.log(image)

function readXML() {

    var xml = new XMLHttpRequest();
    xml.open("GET", "wikiArtikler.xml", false);
    xml.send();

    var xmlData = xml.responseText;
    document.write(xmlData);
    

}

readXML()
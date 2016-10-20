//
//		displayArticle.js
//		by Tobias Wulvik
//

// Laster inn tagene til variabler
var paragraph = document.getElementById("articleP");
var title = document.getElementsByClassName("sectionTitle")[0];
console.log(title);
var image = document.getElementById("articlePhoto");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        updateArticle(this);
    }
};
xhttp.open("GET", "wikiArtikler.xml", true);
xhttp.send();

function updateArticle(xml) {
    var xmlDoc = xml.responseXML;
    var x;
    var txt = "";
    x = xmlDoc.getElementsByTagName("title")[0].childNodes[0];
    txt += x.nodeValue + "<br>";
    x.nodeValue = "Easy Cooking";
    x = xmlDoc.getElementsByTagName("title")[0].childNodes[0];
    txt += x.nodeValue + "<br>";
    paragrapg = txt;
}


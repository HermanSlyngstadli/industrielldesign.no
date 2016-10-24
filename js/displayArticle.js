//
//		displayArticle.js
//		by Tobias Wulvik
//

var artikkel = 0;

/*var xml = new XMLHttpRequest();
xml.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        updateArticle(this);
    }
};

xml.open("GET", "wikiArtikler.xml", false);
xml.send();*/

// Array med titlene fra xml-dokumentet
var alleArtikkelTitler = ["laserkutter", "rød benk", "sag", "styret"];

// Array med titlene fra xml-dokumentet
var alleArtikkelP = ["1Dette er en paragraf", "2Dette er en paragraf", "3Dette er en paragraf", "4Dette er en paragraf"];

// Skal være det faktiske søket
var sok = "Sag";

function sokArticle() {
    
    sok = sok.toLowerCase().trim();
    // alleArtikkelTitler = array fra xml med alle titler
    var artikkelIndex = alleArtikkelTitler.indexOf(sok);
    return artikkelIndex;
}

function updateArticle() {
    
    var artikkel = sokArticle(sok, alleArtikkelTitler);
    
    document.getElementsByClassName("sectionTitle")[0].innerHTML = alleArtikkelTitler[artikkel];

    document.getElementById("articleP").innerHTML = alleArtikkelP[artikkel];
    
}

updateArticle();
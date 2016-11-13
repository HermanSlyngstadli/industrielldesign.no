//
//		displayArticle.js
//		by Tobias Wulvik
//




// Array med titlene fra json-dokumentet
var alleArtikkelTitler = ["laserkutter", "rød benk", "sag", "styret"];
console.log(alleArtikkelTitler);

// Array med titlene fra json-dokumentet
var alleArtikkelP = ["1Dette er en paragraf", "2Dette er en paragraf", "3Dette er en paragraf", "4Dette er en paragraf"];
console.log(alleArtikkelP);

// Skal være det faktiske søket
var sok = "Sag";

function sokArticle() {
    
	sok = sok.toLowerCase().trim();
	// alleArtikkelTitler = array fra js-array med alle titler
	var artikkelIndex = alleArtikkelTitler.indexOf(sok);
	return artikkelIndex;
}

function updateArticle() {
    
    var artikkel = sokArticle(sok, alleArtikkelTitler);
    
    document.getElementsByClassName("sectionTitle")[0].innerHTML = alleArtikkelTitler[artikkel];

    document.getElementById("articleP").innerHTML = alleArtikkelP[artikkel];
    
}

updateArticle();
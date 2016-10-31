//
//		Accordianmenu.js
//		by Ragnhild Bakli
//

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}

var arr = [{tittel:"R", url:"http://www.vg.no"},{tittel:"A", url:""},
			{tittel:"G", url:""},{tittel:"N", url:""},
			{tittel:"H", url:""},{tittel:"I", url:""},
			{tittel:"L", url:""},{tittel:"D", url:""}]
			
for (i=0; i<=arr.length; i++){
	var fyll = '<a href="' + arr[i].tittel + '">' + arr[i].tittel + '</a>';
	document.getElementById('verksted').innerHTML += '<li>' + fyll + '</li>';
	document.getElementById('programmer').innerHTML += '<li>' + fyll + '</li>';
	document.getElementById('lærere').innerHTML += '<li>' + fyll + '</li>';
}

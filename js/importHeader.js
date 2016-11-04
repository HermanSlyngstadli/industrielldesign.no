//
//	Import Header
//		by Herman Slyngstadli
//

var header = document.getElementById('header');

header.innerHTML = '<div id="headerFixed" class="header">'
						+'<a id="logo" href="index.html" style="width:60px;height:60px; padding:0; float:left;">'
							+'<img src="http://industrielldesign.com/wp-content/uploads/2013/10/leonardo-logo-60x60.png" />'
						+'</a>'
						+'<div id="navToggle" class="accordion navBurger">'
							+ '<div class="burgerWrapper">'
								+ '<div class="burgerPart"></div>'
								+ '<div class="burgerPart"></div>'
								+ '<div class="burgerPart"></div>'
							+ '</div>'
						+'</div>'
						+'<ul id="headerAccordionPanel" class="panel headerpanel">'
							+'<li><a href="prosjekter.html">Prosjekter</a></li>'
							+'<li><a href="student.html">Student</a></li>'
							+'<li><a href="business.html">Bedrift</a></li>'
							+'<li><a href="aboutLeo.html">Om Leonardo</a></li>' 
						+'</ul>'
					+'</div>';

window.addEventListener('scroll', function() {
	if(window.pageYOffset > 100) {
		document.getElementById('headerFixed').className = 'header headerScrolled';
	} else if (window.pageYOffset <= 100) {
		document.getElementById('headerFixed').className = 'header';
	}
});

document.getElementById('navToggle').addEventListener('click', function() {
	this.classList.toggle('open');
});
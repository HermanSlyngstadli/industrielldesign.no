//
//	Import Footer
//		by Tobias Wulvik
//
var footer = document.getElementById('footer');

// Adding each element one by one for easier editing
var footerText = ''
+'<div class="centerWrapper">'
	+ '<div class="footerLogo">'
		+   '<div><a href="https://www.facebook.com/LeonardoLinjeforening/?fref=ts" target="_blank">'
			// facebookbilde i svg-format (class="socialLogo")
			+ '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g class="socialLogo"><path d="M13.7 24.9h3.7V16h2.5l0.3-3.1h-2.8l0-1.5c0-0.8 0.1-1.2 1.2-1.2h1.5V7.1h-2.5c-2.9 0-4 1.5-4 4v1.8h-1.8V16h1.8C13.7 16 13.7 24.9 13.7 24.9z"/></g></svg>'
		+'</a></div>'
			+   '<div><a href="https://www.instagram.com/leonardo.linjeforening/" target="_blank">'
			// instagrambilde i svg-format (class="socialLogo")
		+ '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g class="socialLogo"><path d="M22.1 7.9H9.9c-1.1 0-2 0.9-2 2v12.1c0 1.1 0.9 2 2 2h12.1c1.1 0 2-0.9 2-2V9.9C24.1 8.8 23.2 7.9 22.1 7.9zM16 12.8c1.8 0 3.2 1.4 3.2 3.1s-1.5 3.1-3.2 3.1c-1.8 0-3.2-1.4-3.2-3.1C12.8 14.2 14.2 12.8 16 12.8zM22.1 21.6c0 0.4-0.2 0.5-0.5 0.5H10.4c-0.4 0-0.5-0.2-0.5-0.5v-7.1l1.3 0.3c-0.1 0.4-0.2 0.9-0.2 1.4 0 2.7 2.2 4.9 5 4.9 2.8 0 5-2.2 5-4.9 0-0.5-0.1-0.9-0.2-1.4l1.2-0.3L22.1 21.6 22.1 21.6zM22.1 12.5c0 0.3-0.2 0.5-0.5 0.5h-2c-0.3 0-0.5-0.2-0.5-0.5v-2c0-0.3 0.2-0.5 0.5-0.5h2c0.3 0 0.5 0.2 0.5 0.5C22.1 10.5 22.1 12.5 22.1 12.5z"/></g></svg>'
			
		+ '</a></div>'
		+   '<div><a href="https://www.behance.net/IndustrialDesignNTNU" target="_blank">'
			// behancebilde i svg-format (class="socialLogo")
			+ '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g class="socialLogo"><path d="M14.3 15.6c0 0 1.7-0.1 1.7-2.1 0-2-1.1-3-2.9-3l-6 0v11.1h6.1c0 0 3 0.1 3-3.3C16.3 18.2 16.5 15.6 14.3 15.6zM9.3 12.1h3.1c0 0 1 0 1 1.4 0 1.4-1 1.4-1 1.4H9.3V12.1zM12.7 19.9H9.3v-3.3h3.3c0 0 1.7 0 1.7 1.7S12.9 19.9 12.7 19.9z"/><path d="M21 13.2c-4.2 0-4.2 4.2-4.2 4.2s-0.3 4.2 4.2 4.2c0 0 3.9 0 3.9-3.3h-2.2c0 0 0 1.7-1.7 1.7 0 0-1.7 0-1.7-2.2 0 0 4.4 0 5.5 0C24.9 16.6 24.9 13.2 21 13.2zM19.3 16.6c0 0 0-1.7 1.7-1.7s1.7 1.7 1.7 1.7H19.3z"/><rect x="18.8" y="11.6" width="4.4" height="1.1"/></g></svg>'
		+ '</a></div>'
	+ '</div>'

	+ '<div class="clearfix">'
		+ '<div class="footerLeft">'
			+'Webredaktør: Herman Slyngstadli<br />'
			+'Webdesign: Muggkopp</p>'
		+ '</div>'     

		+ '<div class="footerRight">'
			+   '<p>Leonardo Linjeforening<br>Kolbjørn Hejes vei 2B<br>'
			+   '7349 Trondheim</p>'
		+ '</div>'
	+ '</div>'

+'</div>'
+'<div class="fullLength">'
	+ '<p>Copyright &copy; 2011 - 2016 LEONARDO, Linjeforening for Industriell Design NTNU'
+'</div>';

footer.innerHTML = footerText;
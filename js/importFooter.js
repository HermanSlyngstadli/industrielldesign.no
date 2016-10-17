//
//	Import Footer
//		by Herman Slyngstadli
//
var footer = document.getElementById('footer');

// Adding each element one by one for easier editing
var footerText = ''

+ '<div class="footerLogo">'
+   '<div><img src="" alt="facebookLogo"></div>'
+   '<div><img src="" alt="instagramLogo"></div>'
+   '<div><img src="" alt="behanceLogo"></div>'
+ '</div>'

+ '<p>Copyright &copy;2011 - 2016 LEONARDO<br>'
+ 'Linjeforening for Industriell Design, NTNU<br>'
+ 'Webredaktør: Herman Slyngstadli | Webdesign: Muggkopp</p>'

+ '<p>Leonardo Linjeforening<br>Kolbjørn Hejes vei 2B<br>'
+ '7349 Trondheim</p>';


footer.innerHTML = footerText;
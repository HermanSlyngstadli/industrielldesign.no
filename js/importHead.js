// 
//	Import Head
// 		by Herman Slyngstadli
// 

var head = document.head;

var fyll;

// Adding each element one by one for easier editing
fyll = '<meta charset="utf-8">';
fyll += '<meta lang="no">';
fyll += '<meta name="description" content="Leonardo, Linjeforening for Industriell Design ved NTNU">';
fyll += '<meta name="keywords" content="arrangementer, student, bedriftspresentasjon, workshop, ntnu, linjeforening">';
fyll += '<meta name="author" content="Leonardo Linjeforening">';
fyll += '<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,800|Raleway" rel="stylesheet">';
fyll += '<link rel="stylesheet" href="css/style.css">';
fyll += '<link rel="stylesheet" href="css/crayslider.css">';
fyll += '<link rel="icon" type="image/png" href="http://industrielldesign.com/wp-content/uploads/2013/10/leonardo-logo-60x60.png">';


head.innerHTML += fyll;
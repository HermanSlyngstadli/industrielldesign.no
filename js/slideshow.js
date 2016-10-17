//
//		Slideshow.js aka. Crayslider (So cray ammagad)
//		by Herman Slyngstadli
//

/*
	To Do:
		- automatisk rullerende slides
		- trykke på slide for preview
		- highlighte preview slide
		- trykke neste slide
		- trykke neste arr preview
*/

// Init
var sliderWrapperId = 'eventSlider';
var sliderId = 'eventSlider';
var focusedSlide = 'focusedEvent';
var slidesOnEachPage = 3;

var sliderWrapper = document.getElementById(sliderWrapperId);
var slider = document.getElementById(sliderId);

var slides;
var currentSlide = 1; // Sets the startslide of the slider
var currentPreview = 1; // Set first preview element

// START temporary database of events
function happening(image, title, text, date, time, location) {
	this.image = image;
	this.title = title;
	this.text = text;
	this.date = date;
	this.time = time;
	this.location = location;
};

var slide1 = new happening('','Halloween','Det er halloweenfest på huset i år også!','29.10','20:00','IPD');
var slide2 = new happening('','Gravøl','Det er Gravøl på huset i år også!','03.02','17:00','IPD');
var slide3 = new happening('','Festfest','Det er festfest på huset i år også!','09.03','19:00','IPD');
var slide4 = new happening('','Halloween','Det er halloweenfest på huset i år også!','29.10','20:00','IPD');

slides = [slide1, slide2, slide3, slide4];
// END temporary database of events


// Create a sliderWrapper
var craysliderWrapper = document.createElement('ul');
craysliderWrapper.className='craysliderWrapper';

// Adjust the size of the slides and the slidewrapper
craysliderWrapper.style.width = 100*slides.length + '%';

// Don't create all the elements before the site is fully loaded. Better UX!
window.onload = function() {
	// Make slides and append them to the DOM
	createSliderElements();

	slider.appendChild(craysliderWrapper);


}

function createSliderElements() {
	for (var i = 0; i < slides.length; i++) {
		// Create list element
		var craysliderElement = document.createElement('li');
		craysliderElement.className = 'craysliderElement';
		// Create a header for the element
		var craysliderElementHeader = document.createElement('h4');
		craysliderElementHeader.className = 'craysliderElementHeader';
		// Create a wrapper for the description
		var craysliderElementText = document.createElement('div');
		craysliderElementText.className = 'craysliderElementText';

		var crayElementHeader = document.createTextNode(slides[i].title);
		var crayElementText = document.createTextNode(slides[i].text);

		craysliderElementHeader.appendChild(crayElementHeader);
		craysliderElementText.appendChild(crayElementText);
		
		craysliderElement.appendChild(craysliderElementHeader);
		craysliderElement.appendChild(craysliderElementText);

		// Set the width of the slides
		craysliderElement.style.width = 100/(slides.length*slidesOnEachPage) + '%';

		craysliderWrapper.appendChild(craysliderElement);
	}
}

function pushIt(direction) {
	if(direction === 'left' && currentSlide > 1) {
		craysliderWrapper.style.left = 100*(currentSlide-2) + '%';
		currentSlide--;
	} else if(direction === 'right' && currentSlide < Math.ceil(slides.length/slidesOnEachPage)) {
		craysliderWrapper.style.left = -100*currentSlide + '%';
		currentSlide++;
	}
}

function changeSlide() {

}


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
var sliderId = 'eventSlider';
var focusedSlideWrapperId = 'focusedEvent';
var slidesOnEachPage = 3;

var slider = document.getElementById(sliderId);
var sliderFocused = document.getElementById(focusedSlideWrapperId);

var slides;
var currentSlide = 1; // Sets the startslide of the slider
var currentPreview = 0; // Set first preview element
var previewSlide = true;
var sliderArrows = true;

var currentPosition = 0;

// START ===== temporary database of events
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
// ==== END temporary database of events

var craysliderWrapperWrapper = document.createElement('div');
craysliderWrapperWrapper.className = 'craysliderWrapperWrapper';

var craysliderWrapperWrapperHolder = document.createElement('div');
craysliderWrapperWrapperHolder.className = 'craysliderWrapperWrapperHolder';

// Create a sliderWrapper
var craysliderWrapper = document.createElement('ul');
craysliderWrapper.className='craysliderWrapper'; // For styling off all sliders
craysliderWrapper.id = craysliderWrapper.className + '-' + sliderId; // For identification of specific slider

craysliderWrapperWrapper.appendChild(craysliderWrapper);

// Adjust the size of the slides and the slidewrapper
//craysliderWrapper.style.width = 100*Math.ceil(slides.length/slidesOnEachPage) + '%';

// Don't create all the elements before the site is fully loaded. Better UX!
window.onload = function() {
	// Make slides and append them to the DOM
	if (sliderArrows == true) {
		createSliderArrows();
	}

	createSliderElements();
	makeElementsClickable();

	if (previewSlide == true) {
		createPreviewElements();
	}

	craysliderWrapperWrapperHolder.appendChild(craysliderWrapper);
	craysliderWrapperWrapper.appendChild(craysliderWrapperWrapperHolder);
	slider.appendChild(craysliderWrapperWrapper);
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
		craysliderElement.style.width = 100/(slidesOnEachPage) + '%';


		craysliderWrapper.appendChild(craysliderElement);
	}
}

function pushIt(direction) {
	console.log(this);
	if(direction === 'left' && currentSlide > 1) {
		linearEase(-100);
		currentSlide--;
	} else if(direction === 'right' && currentSlide < Math.ceil(slides.length/slidesOnEachPage)) {
		linearEase(100);
		currentSlide++;
	}
}

function linearEase(targetPosition) {
	if (targetPosition > currentPosition) {
		nesteStop(targetPosition, -1);
	} else if (targetPosition < currentPosition) {
		nesteStop(targetPosition, 1);
	}
}

function nesteStop(targetPosition, direction) { // negative is and positive is 
	if (currentPosition <= targetPosition) {
		console.log(currentPosition);
		craysliderWrapper.style.left = currentPosition + '%';
		currentPosition += 2;
		setTimeout(function() {nesteStop(targetPosition);}, 20);
	} else {
		return;
	}
}

function makeElementsClickable() {
	for (var i = 0; i < craysliderWrapper.children.length; i++) {
		(function(i){
			craysliderWrapper.children[i].onclick = function(){
				changePreviewSlide(i);
			}
		})(i);
	}
}

function changePreviewSlide(slide) {
	var header = document.getElementById('crayslider-previewContentText-header'+'-'+sliderId);
	var description = document.getElementById('crayslider-previewContentText-description'+'-'+sliderId);
	var picture = document.getElementById('crayslider-previewContentPicture'+'-'+sliderId);

	header.innerHTML = slides[slide].title;
	description.innerHTML = slides[slide].text;
	picture.innerHTML = slides[slide].image;
}

function createPreviewElements() {
	var previewElementWrapper = document.createElement('div');
	previewElementWrapper.className = 'crayslider-previewElementWrapper';

	var previewContentText = document.createElement('div');
	previewContentText.className = 'crayslider-previewContentText';

	var previewHeader = document.createElement('h4');
	previewHeader.className = 'crayslider-previewContentText-header';
	previewHeader.id = previewHeader.className + '-' + sliderId;
	
	var previewDescription = document.createElement('div');
	previewDescription.className = 'crayslider-previewContentText-description';
	previewDescription.id = previewDescription.className + '-' + sliderId;

	
	var previewIcon = document.createElement('div');
	previewIcon.className = 'crayslider-previewContentText-icons';

	previewContentText.appendChild(previewHeader);
	previewContentText.appendChild(previewIcon);
	previewContentText.appendChild(previewDescription);

	// ====================================== Fix real pictures!!
	var previewContentPicture = document.createElement('div');
	previewContentPicture.className='crayslider-previewContentPicture';
	previewContentPicture.id='crayslider-previewContentPicture'+'-'+sliderId;
	// =================================================

	previewElementWrapper.appendChild(previewContentText);
	previewElementWrapper.appendChild(previewContentPicture);

	sliderFocused.appendChild(previewElementWrapper);
}

function createSliderArrows() {
	var rightArrow = document.createElement('a');
	var leftArrow = document.createElement('a');



	rightArrow.className = 'crayslider-nav-button crayslider-nav-button-right';
	leftArrow.className = 'crayslider-nav-button crayslider-nav-button-left';

	slider.appendChild(leftArrow);
	slider.appendChild(rightArrow);
	/*
	var arrowWrapper = document.createElement('div');
	arrowWrapper.className = "crayslider-nav";

	arrowWrapper.appendChild(leftArrow);
	arrowWrapper.appendChild(rightArrow);

	var sliderParent = slider.parentElement;
	sliderParent.appendChild(arrowWrapper);
	*/
}
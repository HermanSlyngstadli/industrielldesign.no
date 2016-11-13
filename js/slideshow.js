//
//		Slideshow.js aka. Crayslider (So cray ammagad)
//		by Herman Slyngstadli
//


// Init
var sliderId = 'eventSlider';
var focusedSlideWrapperId = 'focusedEvent';
var slidesOnEachPage = 3;

var slider = document.getElementById(sliderId);
var sliderFocused = document.getElementById(focusedSlideWrapperId);

var slides = [] ;
var currentSlide = 1; // Sets the startslide of the slider
var currentPreview = 0; // Set first preview element
var previewSlide = true;
var sliderArrows = true;

var currentPosition = 0;

// ============= get slides
if (db) {
	for (i in db.arrangementer) {
		slides.push(db.arrangementer[i]);
	}
}

var craysliderWrapperWrapper = document.createElement('div');
craysliderWrapperWrapper.className = 'craysliderWrapperWrapper';

var craysliderWrapperWrapperHolder = document.createElement('div');
craysliderWrapperWrapperHolder.className = 'craysliderWrapperWrapperHolder';

// Create a sliderWrapper
var craysliderWrapper = document.createElement('ul');
craysliderWrapper.className = 'craysliderWrapper'; // For styling off all sliders
craysliderWrapper.id = craysliderWrapper.className + '-' + sliderId; // For identification of specific slider

var sliderStateMin = false;


craysliderWrapperWrapper.appendChild(craysliderWrapper);

// Don't create all the elements before the site is fully loaded. Better UX!
window.onload = function() {
	// Make slides and append them to the DOM
	if (sliderArrows == true) {
		createSliderArrows();
	}

	if(window.innerWidth > 700) {
		slidesOnEachPage = 3;
	} else {
		slidesOnEachPage = 1;
	}

	craysliderWrapper.style.width = 100*Math.ceil(slides.length/slidesOnEachPage) + '%';

	createSliderElements();
	makeElementsClickable();

	if (previewSlide == true) {
		createPreviewElements();
	}

	changePreviewSlide(0);

	craysliderWrapperWrapperHolder.appendChild(craysliderWrapper);
	craysliderWrapperWrapper.appendChild(craysliderWrapperWrapperHolder);
	slider.appendChild(craysliderWrapperWrapper);

	window.addEventListener('resize', function() {
		if(window.innerWidth > 700) {
			slidesOnEachPage = 3;
		} else {
			slidesOnEachPage = 1;
		}

		if (window.innerWidth > 700 && slidesOnEachPage == 3) {
			adjustWidthOfElements(slidesOnEachPage);
			if (currentSlide > Math.ceil(slides.length/slidesOnEachPage)) {
				console.log('Oh shjit asklj');
				currentSlide = 1;
				animateSlider(0, -1);
			}

		} else if (window.innerWidth < 700 && slidesOnEachPage == 1) {
			adjustWidthOfElements(slidesOnEachPage);

		}
	});
}

function adjustWidthOfElements(newSlidesOnEachPage) {
	slidesOnEachPage = newSlidesOnEachPage;
	craysliderWrapper.style.width = 100*Math.ceil(slides.length/slidesOnEachPage) + '%';
	var elements = document.getElementsByClassName('craysliderElement');
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.width = 100/((slidesOnEachPage)*Math.ceil(slides.length/slidesOnEachPage)) + '%';
		console.log(elements[i].style.width);
	}
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

		var crayElementHeader = document.createTextNode(slides[i].tittel);
		var crayElementText = document.createTextNode(slides[i].tekst);

		craysliderElementHeader.appendChild(crayElementHeader);
		craysliderElementText.appendChild(crayElementText);
		
		craysliderElement.appendChild(craysliderElementHeader);
		craysliderElement.appendChild(craysliderElementText);

		// Set the width of the slides
		craysliderElement.style.width = 100/((slidesOnEachPage)*Math.ceil(slides.length/slidesOnEachPage)) + '%';

		craysliderWrapper.appendChild(craysliderElement);
	}
}

function slideTo(direction) {
	if(currentSlide >= 1 && currentSlide <= Math.ceil(slides.length/slidesOnEachPage)) {
		if (currentSlide == 1 && direction < 0) {
			console.log('Går ikke lenger åt venster');
			return;
		} else if (currentSlide == Math.ceil(slides.length/slidesOnEachPage) && direction > 0) {
			console.log('Går ikke lenger til høyre');
			return;
		}

		currentSlide += direction;
		targetPosition = -(currentSlide-1)*(100);
		animateSlider(targetPosition, direction);
	}
}

function animateSlider(targetPosition, direction) { // negative is and positive is 
	if (Math.abs(targetPosition-currentPosition) > 0) {
		currentPosition -= 2*direction;
		craysliderWrapper.style.left = currentPosition + '%';
		setTimeout(function() {animateSlider(targetPosition, direction);}, 10);
	} else {
		return;
	}
}

function makeElementsClickable() {
	for (var i = 0; i < craysliderWrapper.children.length; i++) {
		(function(i){
			craysliderWrapper.children[i].onclick = function(){
				changePreviewSlide(i);
				makeActiveSlide(this);
			}
		})(i);
	}
}

function changePreviewSlide(slide) {
	var header = document.getElementById('crayslider-previewContentText-header'+'-'+sliderId);
	var description = document.getElementById('crayslider-previewContentText-description'+'-'+sliderId);
	var picture = document.getElementById('crayslider-previewContentPicture'+'-'+sliderId);

	header.innerHTML = slides[slide].tittel;
	description.innerHTML = slides[slide].tekst;
	picture.innerHTML = slides[slide].img;
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

	rightArrow.addEventListener('click', function(){
		slideTo(1);
	});
	leftArrow.addEventListener('click', function(){
		slideTo(-1);
	});

	rightArrow.className = 'crayslider-nav-button crayslider-nav-button-right';
	leftArrow.className = 'crayslider-nav-button crayslider-nav-button-left';

	slider.appendChild(leftArrow);
	slider.appendChild(rightArrow);
}

function makeActiveSlide(element) {
	var activeClassName = 'crayslider-activeSlide';
	if (document.getElementsByClassName(activeClassName)[0]) {
		document.getElementsByClassName(activeClassName)[0].classList.toggle(activeClassName);
	}
	element.classList.toggle(activeClassName);
}
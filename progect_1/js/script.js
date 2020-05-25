let dots = document.getElementsByClassName('dots__item'),
	dotsArea = document.getElementsByClassName('slider__dots')[0],
	slides = document.getElementsByClassName('slides__item'),
	prevBtn = document.getElementById('button__left'),
	nextBtn = document.getElementById('button__right'),
	slideIndex = 1,
	navBtn = document.getElementById('nav__btn'),
	navList = document.getElementById('nav__list');

showSlides(slideIndex);

function showSlides(n) {
	if (n < 1) {
		slideIndex = slides.length;
	} else if (n > slides.length) {
		slideIndex = 1;
	}

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}

	for (let i = 0; i < slides.length; i++) {
		dots[i].classList.remove('dots__item--active');
	}

	slides[slideIndex-1].style.display = 'block';
	dots[slideIndex-1].classList.add('dots__item--active');
}

function plusSlide(n) {
	showSlides(slideIndex+=n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

prevBtn.onclick = function() {
	plusSlide(-1);
}

nextBtn.onclick = function() {
	plusSlide(+1);
}

dotsArea.onclick = function(e) {
	for (let i = 0; i < dots.length + 1; i++) {
		if (e.target.classList.contains('dots__item') && e.target == dots[i-1]) {
			currentSlide(i);
		}
	}
}


navBtn.onclick = function(e) {
	if (navBtn.classList.contains('nav__btn--active')) {
		navBtn.classList.remove('nav__btn--active');
		navList.style.transform = "translateY(-150%)";
	} else {
		navBtn.classList.add('nav__btn--active');
		navList.style.transform = "translateY(0)";
	}
}

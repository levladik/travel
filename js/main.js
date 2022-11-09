(function () {
	const header = document.querySelector('.header');
	window.onscroll = () => {
		if (window.pageYOffset > 50) {
			header.classList.add('header__active');
		} else {
			header.classList.remove('header__active');
		}
	};
}());

// Burger handler

(function () {
	const burgerItem = document.querySelector('.burger');
	const menu = document.querySelector('.header__nav');
	const menuCloseItem = document.querySelector('.header__nav-close')
	burgerItem.addEventListener('click', () => {
		menu.classList.add('header__nav_active');	
	});
	menuCloseItem.addEventListener('click', () => {
		menu.classList.remove('header__nav_active');
	});
}());

//Slider

const swiper = new Swiper('.swiper', {
	loop: true,

	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnIteraction: false,
	},
	
  pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
  
	slidesPerView: 1,
	centeredSlides: true,
	spaceBetween: 10,

	breakpoints: {
    960: {
      slidesPerView: 2
    },
  }
});








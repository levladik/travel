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

let slides = document.querySelectorAll(".popular__slide");
let button = document.querySelectorAll(".slideshow-button");
let position = document.querySelector(".popular__slideshow-container");

button.forEach(x => {
	x.onclick = display;
});

function display() {
	let num;
	for (let i = 0; i < button.length; i++) {
		button[i].classList.remove("active");
		slides[i].classList.remove("active");
	}
	this.classList.add("active");
	for (let i = 0; i < button.length; i++) {
		if (button[i].classList.contains("active")) {
			num = i;
		}
	}
	slides[num].classList.add("active");
}

if (button[0].classList.contains("popular__slide active")) {
		position.style.justifyContent = "start";
	}
	else if (button[1].classList.contains("popular__slide active")) {
		position.style.justifyContent = "center";
	}
	else {
		position.style.justifyContent = "end";
}




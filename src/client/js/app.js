import Swiper from 'swiper';

export default class App {
	constructor() {
		// Banner slider
		let gallerySelector = '.js-banner-slider';
		let	interleaveOffsetGallery = 0.5;

		let galleryOptions = {
		  loop: true,
		  speed: 1500,
		  autoHeight: true,
		  initialSlide: 0,
		  spaceBetween: 0,
		  autoplay:{
			delay: 4000
		  },
		  grabCursor: false,
		  simulateTouch: true,
		  watchSlidesProgress: true,
		  pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
		  breakpoints: {
			961: {
			  simulateTouch: true
			}
		  },
		  on: {
			progress: function(){
			  let swiper = this;
			  for (let i = 0; i < swiper.slides.length; i++) {
				let slideProgress = swiper.slides[i].progress,
					innerOffset = swiper.width * interleaveOffsetGallery,
					innerTranslate = slideProgress * innerOffset;
					swiper.slides[i].querySelector(".js-banner-slider__slide").style.transform = "translate3d(" + innerTranslate + "px, 0, 0)";
			  }
			},
			touchStart: function() {
			  let swiper = this;
			  for (let i = 0; i < swiper.slides.length; i++) {
				swiper.slides[i].style.transition = "";
			  }
			},
			setTransition: function(speed) {
			  let swiper = this;
			  for (let i = 0; i < swiper.slides.length; i++) {
				swiper.slides[i].style.transition = speed + "ms";
				swiper.slides[i].querySelector(".js-banner-slider__slide").style.transition =
				  speed + "ms";
			  }
			}
		  }
		};
		let gallerySlider = new Swiper(gallerySelector, galleryOptions);

		document.querySelector('.js-slider-prev').addEventListener('click', () => gallerySlider.slidePrev())
		document.querySelector('.js-slider-next').addEventListener('click', () => gallerySlider.slideNext())


		//mobile menu
		let nav = document.querySelector('.js-nav'),
			burger = document.querySelector('.js-burger');

		const mobileMenu = () => {
			if (window.innerWidth <= 992) {
				nav.classList.toggle('is-active');
				burger.classList.toggle('is-active');
			}
		}

		burger.addEventListener('click', mobileMenu);
	}
}

window.addEventListener('DOMContentLoaded', () => {
    console.log('app.js dom ready');
	new App();
});

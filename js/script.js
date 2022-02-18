let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

$(document).ready(function(){
	  $('.box-container').slick({
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay:true,
		  dots:true,
		  responsive: [
							{
							  breakpoint: 1024,
							  settings: {
								slidesToShow: 3,
								slidesToScroll: 3,
								infinite: true,
								dots: true
							  }
							},
							{
							  breakpoint: 768,
							  settings: {
								slidesToShow: 2,
								slidesToScroll: 2
							  }
							},
							{
							  breakpoint: 580,
							  settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							  }
							}
	  				   ]
		});
	});

window.addEventListener('DOMContentLoaded', function () {

//1. Modal popup_engineet

let popupEngineerBtn = document.querySelector('.popup_engineer_btn'),
		popupEngineer = document.querySelector('.popup_engineer'),
		popupClose = document.querySelectorAll('.popup_close')[1];

		popupEngineerBtn.addEventListener('click', function() {
		popupEngineer.style.display = "block";
		});

		popupClose.addEventListener('click', function() {
		popupEngineer.style.display = "none";
		});
	
//2. Modal popup
let phoneLinkHeader = document.querySelectorAll('.phone_link')[0],
		phoneLinkFooter = document.querySelectorAll('.phone_link')[1],
		popupCloseTwo = document.querySelectorAll('.popup_close')[0],
		popup = document.querySelector('.popup');

		phoneLinkHeader.addEventListener('click', function() {
		popup.style.display = "block";
		});

		phoneLinkFooter.addEventListener('click', function() {
		popup.style.display = "block";
		});

		popupCloseTwo.addEventListener('click', function() {
		popup.style.display = "none";
		});


//3. form ajax

//4. Tabs

//5. Modal popup_calc
let priceBtnOne = document.querySelectorAll('.glazing_price_btn')[0],
		priceBtnTwo = document.querySelectorAll('.glazing_price_btn')[1],
		popupCalc = document.querySelector('.popup_calc'),
		calcClose = document.querySelector('.popup_calc_close');

		priceBtnOne.addEventListener('click', function() {
		popupCalc.style.display = "block";
		});

		priceBtnTwo.addEventListener('click', function() {
		popupCalc.style.display = "block";
		});

		calcClose.addEventListener('click', function() {
		popupCalc.style.display = "none";
		});

//Tabs

//Timer

//Photos

//Modal popup


});
	
			

		
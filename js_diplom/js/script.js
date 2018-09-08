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

//4. Tabs_glazing
let glazingTab = document.getElementsByClassName('slider_link'),
		glazingContent = document.getElementsByClassName('glazing_content'),
		glazingSlider = document.getElementsByClassName('glazing_slider')[0];

		function hideGlazingContent(a){
			for (let i = a; i < glazingContent; i++){
					glazingContent[i].classList.remove('show');
					glazingContent[i].classList.add('hide');
			}
		} 

		hideGlazingContent(1);

		function showGlazingContent(b) {
			if(glazingContent[b].classList.contains('hide')){
				hideGlazingContent(0);
				glazingContent[b].classList.remove('hide');
				glazingContent[b].classList.add('show');
			}
		}

		glazingSlider.addEventListener('click', function(event) {
			let target = event.target;
			if(target.className == 'slider_link') {
				for(let i = 0; i < glazingTab.lenght; i++) {
					if(target == glazingTab[i]) {
						showGlazingContent(i);
						break;
					}
				}
			};
		});









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

//Timer
function CountdownTimer(elm,tl,mes){
 this.initialize.apply(this,arguments);
}
CountdownTimer.prototype={
 initialize:function(elm,tl,mes) {
  this.elem = document.getElementById(elm);
  this.tl = tl;
  this.mes = mes;
 },countDown:function(){
  var timer='';
  var today=new Date();
  var day=Math.floor((this.tl-today)/(24*60*60*1000));
  var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
  var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
  var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
  var me=this;

  if( ( this.tl - today ) > 0 ){
   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">дней</div><span class="number day">'+day+'</span></span>';
   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">часов</div><span class="number hour">'+hour+'</span></span>';
   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">минут</div><span class="number min">'+this.addZero(min)+'</span></span><span class="number-wrapper"><div class="line"></div><div class="caption">секунд</div><span class="number sec">'+this.addZero(sec)+'</span></span>';
   this.elem.innerHTML = timer;
   tid = setTimeout( function(){me.countDown();},10 );
  }else{
   this.elem.innerHTML = this.mes;
   return;
  }
 },addZero:function(num){ return ('0'+num).slice(-2); }
}
function CDT(){
	var tl = new Date('07/08/2019 00:00:00');
	var timer = new CountdownTimer('CDT',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Время вышло!</span></span>');
	 timer.countDown();
	}
	window.onload=function(){
	 CDT();
	}

//Photos

//Modal popup


});
	
			

		
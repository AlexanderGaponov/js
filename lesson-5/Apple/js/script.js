let menu = document.querySelector('.menu'),
		menu_item = document.querySelectorAll('.menu-item'),
		column = document.querySelectorAll('.column'),
		body = document.querySelector('body'),
		adv = document.querySelector('.adv'); 


adv.remove();
menu.insertBefore(menu_item[2], menu_item[1]);

let li = document.createElement('li');
li.classList.add("menu-item");
menu.appendChild(li);

let menuItem = document.querySelectorAll('.menu-item')[4];
menuItem.innerHTML = 'Пятый пункт';
	
	

body.style.background = 'url(img/apple_true.jpg)'; 

let newTitle = 'Мы продаем только подлинную технику Apple';
let title = document.getElementById('title');
title.innerText = newTitle;


let textPrompt = prompt('Какое у вас отношение к технике Apple?', '');
let divPrompt = document.getElementById('prompt');
divPrompt.innerText = textPrompt;


let money, 
		name, 
    time,
    price; 

function start(){
	 money = prompt("Ваш бюджет?");

	 while(isNaN(money) || money == '' || money == null){
	 	money = prompt("Ваш бюджет?");
	 }
	 name = prompt("Название вашего магазина?").toUpperCase();
   time = 19;
}

//start();

let mainList = {
		budget: money,
		shopName: name,
		shopGoods: [],
		employers: {},
		open: false,
		discount: true
 }; 

//Функция набора сотрудников
function employers () {
	for(let i = 0; i < 4; i++){
		let emp = prompt(" Введите фамилию сотрудника:");
		mainList.employers[i] = emp;
	}
}

employers();


//Функция дисконтной системы -- Почему не работает? 

function discountSistem () {

price = prompt("Какая стоимость товара?");
	
	if (mainList.discount == true) {
		console.log ((price * 80)/100);
	} else {
		console.log (price);
	}
}

//discountSistem();


function chooseGoods() { 
for (let i = 0; i < 5; i++) {
	let a = prompt("Какой тип товара будем продавать?");
		if( (typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {

				console.log('Всё верно!');
				mainList.shopGoods[i] = a;

		} else {
			i = i - 1;
		}
	}
}

//chooseGoods();


function workTime(time) {
	if (time < 0) {
		console.log('Такого не может быть');
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
		} else if(time < 24) {
		console.log('Уже слишком поздно!');
			} else {
				console.log('В сутках только 24 часа!');
			};
}

//workTime();



function budgetSizeDay (budget) {
	alert(budget / 30);
}

//budgetSizeDay ();

//console.log(mainList)
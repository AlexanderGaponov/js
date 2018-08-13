let money = prompt("Ваш бюджет?", "10000");
let name = prompt("Название вашего магазина?", "Абрикос");
let time = 19;

let mainList = {
		budget: money,
		shopName: name,
		shopGoods: [],
		employers: {},
		open: false
 } 

//Цикл for

for (let i = 0; i < 5; i++) {
	let a = prompt("Какой тип товара будем продавать?");
	if( (typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {

			console.log('Всё верно!');
			mainList.shopGoods[i] = a;

	} else {
		i = i - 1;
	}
}


//Цикл do while

/*let i = 0;
do {
	let a = prompt("Какой тип товара будем продавать?");
	mainList.shopGoods[i] = a;

		if( (typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {

				console.log('Всё верно!');
				mainList.shopGoods[i] = a;
				i++;

		} else {
			i = i - 1;
		}
	while (i < 5);

}*/

//Цикл while

/*
let i = 0;

while ( i < 5 ) {
	let a = prompt("Какой тип товара будем продавать?");
	mainList.shopGoods[i] = a;

	if( (typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {

				console.log('Всё верно!');
				mainList.shopGoods[i] = a;
				i++;

		}
}

*/

if (time < 0) {
	console.log('Такого не может быть');
} else if (time > 8 && time < 20) {
	console.log('Время работать!');
	} else if(time < 24) {
	console.log('Уже слишком поздно!');
		} else {
			console.log('В сутках только 24 часа!');
		};

alert(mainList.budget / 30);

console.log(mainList);
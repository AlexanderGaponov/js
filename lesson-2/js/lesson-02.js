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

/*

for (let i = 0; i < 5; i++) {
	let a = prompt("Какой тип товара будем продавать?");
	if( (typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {

			console.log('Всё верно!');
			mainList.shopGoods[i] = a;

	} else {
		console.log('Попробуй ещё раз!');
		let a = prompt("Какой тип товара будем продавать?");	
		mainList.shopGoods[i] != a;
	}
}

*/



//Цикл do while

/*

let i = 0;
do {
	let a = prompt("Какой тип товара будем продавать?");
	mainList.shopGoods[i] = a;

		if( (typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {

				console.log('Всё верно!');
				mainList.shopGoods[i] = a;
				i++;

		} else {
			console.log('Попробуй ещё раз!');
			let a = prompt("Какой тип товара будем продавать?");	
			mainList.shopGoods[i] != a;
		}

}

while(i < 5);

*/

//Цикл switch

let i = 0;
let a = prompt("Какой тип товара будем продавать?");

switch (i) {
	case 0 : 
		let a;
		mainList.shopGoods[i] = a;
	case 1 : 
		let a;
		mainList.shopGoods[i] = a;
	case 2 : 
		let a;
		mainList.shopGoods[i] = a;
	case 3 : 
		let a;
		mainList.shopGoods[i] = a;
	case 4 : 
		let a;
		mainList.shopGoods[i] = a;
	case 5 : 
		let a;
		mainList.shopGoods[i] = a;
	default:
		break;
}

alert(mainList.budget / 30);

console.log(mainList);
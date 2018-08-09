let userBudget = prompt("Ваш бюджет на месяц?", "10000");
let nameShop = prompt("Название вашего магазина?", "Абрикос");

let shopGoodOne = prompt("Какой тип товара будем продавать?", "Продукты");
let shopGoodTwo = prompt("Какой тип товара будем продавать?", "Техника");
let shopGoodThree = prompt("Какой тип товара будем продавать?", "Одежда");

let mainList = {
		Budget: userBudget,
		shopName: nameShop,
		shopGoods: [shopGoodOne, shopGoodTwo, shopGoodThree],
		employers: {emloyerOne: 'Petrov', 
								employerTwo: 'Ivanov', 
								empoyerThree: 'Sidorov'},
		open: true
 } 

alert( "Ваш бюджет на день=" + Math.round(mainList.Budget/30) + " рублей" );
let money, 
		name, 
    time,
    price,
    arrItems; 

function start(){
	 money = prompt("Ваш бюджет?", '');

	 while(isNaN(money) || money == '' || money == null){
	 	money = prompt("Ваш бюджет?");
	 }
	 name = prompt("Название вашего магазина?", '').toUpperCase();
   time = 19;
}

//start();

let mainList = {
		budget: money,
		shopName: name,
		shopGoods: [],
		employers: {},
		open: false,
		discount: false,
		shopItems: [],
		chooseGoods: function chooseGoods() { 
for (let i = 0; i < 5; i++) {
	let a = prompt("Какой тип товара будем продавать?", '');
				if( (typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {

						console.log('Всё верно!');
						mainList.shopGoods[i] = a;

				} else {
					i = i--;
				}
			}
		},
		workTime: function workTime(time) {
				if (time < 0) {
					console.log('Такого не может быть');
				} else if (time > 8 && time < 20) {
					console.log('Время работать!');
					mainList.open = true;
					} else if(time < 24) {
					console.log('Уже слишком поздно!');
						} else {
							console.log('В сутках только 24 часа!');
						}
			},
			dayBudget: function dayBudget () {
				alert("Ежедневный бюджет" + mainList.budget / 30);
			}, 
			makeDiscount: function makeDiscount () {

				price = prompt("Какая стоимость товара?", '');
					
					if (mainList.discount == true) {
						console.log ((price * 80)/100);
					} else {
						console.log (price);
					}
				},
			hireEmployers: function hireEmployers () {
				for(let i = 0; i < 4; i++){
					let name = prompt("Имя сотрудника:", '');
					mainList.employers[i] = name;
				}
			},


			
			chooseShopItems: function chooseShopItems (){
			
				
				let items = prompt("Перечислите через запятую ваши товары","");
					
					while ((typeof(items)) !== 'string' || (typeof(items)) === null || items === '') {

						items = prompt("Перечислите через запятую ваши товары","");
						} 
						
						mainList.shopItems = items.split(",");
						mainList.shopItems.push(prompt("Подождите, ещё ", ""));
						mainList.shopItems.sort();
							
			}

 };

			 mainList.chooseShopItems();

				mainList.shopItems.forEach(function(item, i,arr){
										arr[i] = (i + 1) + ' - ' + item;
										arrItems = arr;
									});
			 alert(arrItems);


			 for (let key in mainList) {
			 		console.log('Наш магазин включает в себя:' + key + ' => ' + mainList[key]);
			 }

console.log(mainList);



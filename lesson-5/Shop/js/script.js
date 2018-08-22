let openBtn = document.getElementById('open-btn'),
		nameValue = document.getElementsByClassName('name-value')[0],
		budgetValue = document.getElementsByClassName('budget-value')[0],
		goodsValue = document.getElementsByClassName('goods-value')[0],
		itemsValue = document.getElementsByClassName('items-value')[0],
		employersValue = document.getElementsByClassName('employers-value')[0],
		discountValue = document.getElementsByClassName('discount-value')[0],
		isopenValue = document.getElementsByClassName('isopen-value')[0],
		goodsItem = document.getElementsByClassName('goods-item'),
		chooseItem = document.querySelector('.choose-item'),
		timeValue = document.querySelector('.time-value'),
		countBudgetValue = document.querySelector('.count-budget-value'),
		hireEmployersItem = document.querySelectorAll('.hire-employers-item'),
		mainFunc = document.querySelector('.main-functions'),
		goodsItemBtn = mainFunc.getElementsByTagName('button')[1],
		countBudgetBtn = mainFunc.getElementsByTagName('button')[2],
		hireEmployersBtn = mainFunc.getElementsByTagName('button')[3];

		let money, 
    price,
    arrItems; 

openBtn.addEventListener('click', () => {
	money = prompt("Ваш бюджет?", '');

	 while(isNaN(money) || money == '' || money == null){
	 	money = prompt("Ваш бюджет?");
	 }

	 budgetValue.textContent = money;
	 
	 nameValue.textContent = prompt("Название вашего магазина?", '').toUpperCase();
});



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




		
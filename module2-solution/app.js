(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var toBuy = this;
	
	toBuy.items = ShoppingListCheckOffService.toBuy();
	
	toBuy.buyItem = function (index) {
		ShoppingListCheckOffService.buyingItem(index);
	};
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var alreadyBought = this;

	alreadyBought.items = ShoppingListCheckOffService.soBought();
}

function ShoppingListCheckOffService() {
	var service = this;
	
  var tobuy =   [
		{
			name: "Milk",
			quantity: "2"
		},
		{
			name: "Donuts",
			quantity: "200"
		},
		{
			name: "Cookies",
			quantity: "300"
		},
		{
			name: "Chocolates",
			quantity: "5"
		},
		{
			name: "Apples",
			quantity: "5"
		}
  ];
  
  var bought = [];
  
  service.buyingItem = function (itemIndex) {
  	var item = {
  		name: tobuy[itemIndex].name,
  		quantity: tobuy[itemIndex].quantity
  	};
  	
  	bought.push(newItem);
  	tobuy.splice(itemIndex,1);
  };
  
  service.toBuy = function (){
  	return tobuy;
  };
  
  service.soBought = function(){
  	return bought;
  };
}


})();

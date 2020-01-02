(function () {
'use strict';
angular.module('ShoppingListApp', [])
.controller("ToBuyController",ToBuyController)
.controller("AlreadyBoughtController",AlreadyBoughtController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tobuyctrl = this;
  tobuyctrl.itemsArray = ShoppingListCheckOffService.getItemsToBuy();
  tobuyctrl.buyItem = function(itemName,quantity){
    ShoppingListCheckOffService.buyItem(itemName,quantity);
  };
}
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyboughtctrl = this;
  alreadyboughtctrl.itemsArray = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var boughtItems = [];
  var tobuyItems = [
    {
      name: "Cheese",
      quantity: "2"
    },
    {
      name: "Cake",
      quantity: "5"
    },
    {
      name: "Cookies",
      quantity: "4"
    },
    {
      name: "Chocolate",
      quantity: "7"
    },
    {
      name: "Pringles",
      quantity: "3"
    }
  ];
  service.removeItem = function (item) {
    var boughtItemIndex = tobuyItems.map(function(item1) { return item1.name; }).indexOf(item.name);
    if( boughtItemIndex != -1)
    {
        tobuyItems.splice(boughtItemIndex, 1);
    }
  };
  service.buyItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    boughtItems.push(item);
    service.removeItem(item);
  };

  service.getItemsToBuy = function () {
    return tobuyItems;
  };
  service.getBoughtItems = function () {
    return boughtItems;
  };
}
})();

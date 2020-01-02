(function () {
'use strict';
angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];

function NarrowItDownController(MenuSearchService){
  var nidc = this;
  nidc.found  = MenuSearchService.getMatchedMenuItems('Chicken');
}
MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
   return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (response) {
        var foundItems = response.data;
        console.log(foundItems);
        console.log(foundItems.menu_items);
        for (var i = 0; i < foundItems.menu_items.length; i++) {
          if(foundItems.menu_items[i].description.indexOf(searchTerm) == -1){
          foundItems.menu_items.splice(i,1);
          }
        }
      console.log(foundItems.menu_items);
      return foundItems.menu_items;
    });
}

}
})();

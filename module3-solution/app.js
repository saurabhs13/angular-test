(function () {
'use strict';
angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems',FoundItems);

function FoundItems(){
  var ddo = {
    templateUrl:'founditems.html',
    retrict:'E',
    scope:{
      list:'<items',
      onRemove:'&'
    },
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];

function NarrowItDownController(MenuSearchService){
  var nidc = this;
    nidc.getMatchedMenuItems = function(){
      if(typeof nidc.searchTerm == 'undefined' || nidc.searchTerm.trim() == ""){
        nidc.categories = [];
      }else{
      var promise  = MenuSearchService.getMatchedMenuItems(nidc.searchTerm);

      promise.then(function(response){
      nidc.categories = response;
      }).catch(function(error){

      });
      }
    }

    nidc.removeItem = function(itemIndex){
      nidc.categories.splice(itemIndex,1);
    }

}
MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  service.getMatchedMenuItems = function (searchTerm) {
   return  $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (response) {
        var reponseArray = response.data.menu_items;
        var foundItems = [];
        for (var i = 0; i < reponseArray.length; i++) {
          if(reponseArray[i].description.indexOf(searchTerm) != -1){
            foundItems.push(reponseArray[i]);
          }
        }
        return foundItems;
    },function(error){
      console.log(error);
    });
}

}
})();

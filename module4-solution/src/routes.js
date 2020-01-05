(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
   url: '/categories',
   templateUrl: 'src/templates/categories.main.template.html',
   controller:'CategoriesController as catctrl',
   resolve:{
     categories:['MenuDataService',function(MenuDataService){
      return MenuDataService.getAllCategories();
     }]
   }
 }).state('items', {
   url: '/items/{categoryShortName}',
   templateUrl: 'src/templates/items.main.template.html',
   controller:'MenuItemsController as menuitemsctrl',
   resolve:{
     menuItems:['$stateParams','MenuDataService',
     function($stateParams,MenuDataService){
      return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
     }]
   }
 });
}

})();

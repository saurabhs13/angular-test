(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['AccountService','MenuService'];
function RegistrationController(AccountService,MenuService) {
  var reg = this;
    reg.submit = function () {
      console.log("I m here",reg.user);
      var response = MenuService.getMenuItemForShortName(reg.menunumber);
      response.then(function success(response) {
        reg.completed = true;
        AccountService.registerUser(reg.user);
        console.log(response);
      }, function error(response) {
        reg.menuItemerror="No such menu number exists";
      });
    };
}
})();

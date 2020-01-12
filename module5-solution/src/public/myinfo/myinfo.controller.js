(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['userinfo','MenuService'];
function MyInfoController(userinfo,MenuService) {
  var myinfoCtrl = this;
    myinfoCtrl.userinfo = userinfo;
  if(!myinfoCtrl.userinfo ===null ){

    myinfoCtrl.menuItem = MenuService.getMenuItemForShortName(userinfo.menunumber);
    console.log("Inside if",myinfoCtrl.menuItem );
  }


}
})();

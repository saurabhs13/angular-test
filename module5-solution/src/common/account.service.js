(function () {
"use strict";

angular.module('common')
.service('AccountService', AccountService);


//AccountService.$inject = ['$http', 'ApiPath'];
function AccountService() {
  var service = this;

  var currentUser;

  service.registerUser = function (user) {
      currentUser = user;
      console.log("Current User",currentUser);
  };

  service.getUserInfo = function(){
      return currentUser;
  };
}

})();

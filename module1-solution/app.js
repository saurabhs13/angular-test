(function (){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
$scope.checkLunch = function(){
  var lunchItemsStr = $scope.lunchItems;
  if (typeof lunchItemsStr === "undefined" ||lunchItemsStr === ""){
    $scope.lunchCheckResult='Please enter data first';
    $scope.messageType='Error';
   }
  else{
    var lunchItemArr = lunchItemsStr.split(',');
    $scope.messageType='Info';
    if(lunchItemArr.length <= 3){
        $scope.lunchCheckResult='Enjoy!';
    }else{
      $scope.lunchCheckResult='Too much!';
    }
  }
};
}
})();

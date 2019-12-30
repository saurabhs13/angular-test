(function (){
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
$scope.checkLunch = function(){
  var lunchItemsStr = $scope.lunchItems;
  if (typeof lunchItemsStr === "undefined"){
    $scope.lunchCheckResult='Please enter data first';
  }
  else{
    var lunchItemArr = lunchItemsStr.split(',');
    if(lunchItemArr.length <= 3){
        $scope.lunchCheckResult='Enjoy!';
    }else{
      $scope.lunchCheckResult='Too much!';
    }
  }
};
}
})();

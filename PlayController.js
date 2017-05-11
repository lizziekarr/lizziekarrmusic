(function(){

var app = angular.module('lk_music', []);

app.controller('PlayController', ['$scope', '$http', function($scope, $http){
  console.log('hi2')
  $scope.playerShowing = true;
  $scope.play = function(){
    $scope.playerShowing = true;
  };
}]);

})();

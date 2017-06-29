(function(){

	'use strict'
angular
	.module('app')
	.controller('PlayController', PlayController);

PlayController.$inject = ['$scope', '$http'];
	function PlayController($scope, $http) {
		alert('play')
		$scope.showNav = false;
		$scope.toggleNav = function(){
			if($scope.showNav === false){
				$(scope.showNav = true;)
			}
			else {
				$scope.showNav = false;
			}
		}
		$scope.playerShowing = false;
		$scope.play = function(){
			$scope.playerShowing = true;
			$('nav').fadeOut('slow');
		};
		$scope.exit = function(){
			$scope.playerShowing = false;
		};
	}
})();

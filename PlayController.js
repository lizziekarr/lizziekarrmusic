(function(){
	'use strict'

angular
	.module('app')
	.controller('PlayController', PlayController);

PlayController.$inject = ['$scope', '$http'];
	function PlayController($scope, $http) {
		console.log('hi2')
		
		$scope.playerShowing = true;
		$scope.play = function(){
			$scope.playerShowing = true;
		};
	}
})();
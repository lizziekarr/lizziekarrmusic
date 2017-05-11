(function(){
	'use strict';
	console.log('hi1')
	angular
		.module('app', ['ngRoute', 'ngCookies'])
		.config(config)
		.run(run);

config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider, $locationProvider) {
		$routeProvider
				.when('/', {
						controller: 'PlayController',
						templateUrl: 'index.html',
						controllerAs: 'playCtrl'
				})
}

run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
function run($rootScope, $location, $cookieStore, $http) {
		// keep user logged in after page refresh
		$rootScope.globals = $cookieStore.get('globals') || {};
}




})();

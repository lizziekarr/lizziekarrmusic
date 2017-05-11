(function(){
'use strict';
angular
	.module('app', ['ngRoute', 'ngCookies'])
	.config(config)
	.run(run);

config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider, $locationProvider) {
		console.log('hi1')
		$routeProvider
				.when('/', {
						controller: 'PlayController',
						templateUrl: './index.html',
						controllerAs: 'PlayController'
				})
				.when('/profile', {
						controller: 'ProfileController',
						templateUrl: './profile/index.html',
						controllerAs: 'ProfileController'					
				})
}

run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
function run($rootScope, $location, $cookieStore, $http) {
		// keep user logged in after page refresh
		$rootScope.globals = $cookieStore.get('globals') || {};
}
})();

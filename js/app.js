var app = angular.module("miApp", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	
	// $stateProvider
	//         .state('settings', {
	//             url: '/settings',
	//             templateUrl: 'templates/settings.html'
	//         })
	//         .state('settings.profile', {
	//             url: '/profile',
	//             templateUrl: 'templates/profile.html',
	//             controller: 'ProfileController'
	//         })
	//         .state('settings.account', {
	//             url: '/account',
	//             templateUrl: 'templates/account.html',
	//             controller: 'AccountController'
	//         });

	$stateProvider
        .state('inicio', {
            url: '',
            templateUrl: 'templates/inicio.html'
        })
        .state('abm', {
        	url: '/abm',
        	templateUrl: 'templates/abm.html'
        })
	
	$urlRouterProvider.otherwise('');
});
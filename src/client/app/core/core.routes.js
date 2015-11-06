(function () {
	'use strict'

	var moduleID = 'app.core';
	var injectParams = ['$mdThemingProvider'];

	angular.module(moduleID)
		.config(routeConfig);

	routeConfig.$inject = injectParams;
	function routeConfig($stateProvider, $urlRouterProvider) {
			
		// For any unmatched url, redirect to /tab1
		$urlRouterProvider.otherwise("/");
		// Now set up the states
		$stateProvider
			.state('contacts', {
				abstract: true,
				template: '<ui-view/>',
				url: '/contacts'
			})
			.state('contacts.all', {
				url: '/all',
				templateUrl: 'app/person/all.html',
				controller: 'ctrlPersonAll',
				controllerAs: 'vm',
			});


	};

})()
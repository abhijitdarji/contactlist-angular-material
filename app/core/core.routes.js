(function () {
	'use strict'

	var moduleID = 'app.core';
	var injectParams = ['$stateProvider', '$urlRouterProvider'];

	angular.module(moduleID)
		.config(routeConfig);

	routeConfig.$inject = injectParams;
	function routeConfig($stateProvider, $urlRouterProvider) {
			
		$urlRouterProvider.otherwise("/contacts/all");

		$stateProvider
			.state('contacts', {
				abstract: true,
				template: '<div ui-view></div>',
				url: '/contacts'
			})
			.state('contacts.all', {
				url: '/all',
				templateUrl: 'app/person/all.html',
				controller: 'personCtrl',
				controllerAs: 'vm',
			});


	};

})()
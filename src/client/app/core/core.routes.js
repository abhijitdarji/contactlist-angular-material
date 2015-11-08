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
				resolve: {
					somePerson: function () {
						return {};
					}
				}
			})
			.state('contacts.add', {
				url: '/add',
				templateUrl: 'app/person/add-edit.html',
				controller: 'personCtrl',
				controllerAs: 'vm',
				resolve: {
					somePerson: function () {
						return {};
					}
				}
			})
			.state('contacts.edit', {
				url: '/edit/{id:int}',
				templateUrl: 'app/person/add-edit.html',
				controller: 'personCtrl',
				controllerAs: 'vm',
				resolve: {
					somePerson: ['$stateParams', 'dataserv', function ($stateParams, dataserv) {

						return dataserv.getPerson($stateParams.id);
					}]
				}
			});


	};

})();
/* global faker */
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
						var per = {
							photo: faker.internet.avatar()
						}
						return per;
					}
				}
			})
			.state('modal', {
				abstract: true,
				parent: 'contacts.all',
				url: '',
				onEnter: ['$mdDialog', '$state', function ($mdDialog, $state) {
					$mdDialog.show({
						clickOutsideToClose: true, //default false
						escapeToClose: true, //default true
						controller: function ($scope) {
							$scope.setHeader = function (textVal) {
								$scope.headerText = textVal;
							}
						},
						template:
						'<md-dialog aria-label="Add">' +
						'	<md-toolbar>' +
						'		<div class="md-toolbar-tools">' +
						'			<h2>{{headerText}}</h2>' +
						'				<span flex></span>' +
						'		</div>' +
						'	</md-toolbar>' +
						'  	<md-dialog-content>' +
						'    	<div ui-view="modalx"></div>' +
						'  	</md-dialog-content>' +
						'</md-dialog>',
					}).finally(function () {
						$state.go('contacts.all', {}, { reload: true });
					});
				}]
			})
			.state('popupadd', {
				url: '',
				parent: 'modal',
				views: {
					'modalx@': {
						templateUrl: 'app/person/add-edit.html',
						controller: 'personCtrl',
						controllerAs: 'vm'
					}
				},
				resolve: {
					somePerson: function () {
						var per = {
							photo: faker.internet.avatar()
						}
						return per;
					}
				}
			})
			.state('contacts.edit', {
				url: '/edit/:id',
				templateUrl: 'app/person/add-edit.html',
				controller: 'personCtrl',
				controllerAs: 'vm',
				resolve: {
					somePerson: ['$stateParams', 'fPerson', function ($stateParams, fPerson) {

						return fPerson.get({ id: $stateParams.id });
					}]
				}
			})
			.state('contacts.view', {
				url: '/view/:id',
				templateUrl: 'app/person/view.html',
				controller: 'personCtrl',
				controllerAs: 'vm',
				resolve: {
					somePerson: ['$stateParams', 'fPerson', function ($stateParams, fPerson) {

						return fPerson.get({ id: $stateParams.id });
					}]
				}
			})
		;


	};

})();
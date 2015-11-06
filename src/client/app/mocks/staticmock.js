/* global faker */
(function () {
	'use strict'

	var moduleID = 'app.mocks';
	var injectParams = ['$httpBackend'];

	angular.module(moduleID)
		.run(mockConfig);

	mockConfig.$inject = injectParams;
	function mockConfig($httpBackend) {
		
		$httpBackend.whenGET(/\.html$/).passThrough();

	};

})()
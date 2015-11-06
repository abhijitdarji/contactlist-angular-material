(function () {
	'use strict'

	var moduleID = 'app.core';
	var injectParams = ['$mdThemingProvider'];

	angular.module(moduleID)
		.config(themeConfig);

	themeConfig.$inject = injectParams;
	function themeConfig($mdThemingProvider) {

		$mdThemingProvider.theme('default')
			.primaryPalette('blue')
			.accentPalette('red');

	};

})()
(function () {
	'use strict'

	var moduleID = 'app.core';

	angular.module(moduleID, [
		'ui.router',
		'ngMaterial',
		'ngMessages',
		'ngResource',
		'ngAnimate',
		'app.service',
		'app.directive'
	]);
	
})();
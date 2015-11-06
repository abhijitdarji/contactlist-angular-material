(function () {
	'use strict'

	var moduleID = 'app.core';
	var factID = 'toastServ'
	var injectParams = ['$mdToast'];

	angular.module(moduleID)
		.factory(factID, toastServ);

	toastServ.$inject = injectParams;
	function toastServ($mdToast) {
		
		var colors = {
			show: '#030303',
			success: '#51A351',
			error: '#BD362F',
			info: '#2F96B4',
			warning: '#F89406'
		};

		var service = {
			_def: _def,
			show: show,
			success: success,
			error: error,
			info: info,
			warn: warn
		}
		return service;

		function _def(msg, color) {
			var obj = $mdToast.simple();
			var other = {
				content: msg,
				capsule: true,
				template: [
					'<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}" ng-style="{\'background-color\':\'' + color + '\'}">',
					'<span flex>{{ toast.content }}</span>',
					'<md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()" ng-class="{\'md-highlight\': toast.highlightAction}">',
					'{{ toast.action }}',
					'</md-button>',
					'</md-toast>'
				].join(''),
				hideDelay: 3000,
				position: 'top right',
			};
			angular.extend(obj._options, other);
			$mdToast.show(obj);
		}

		function show(msg) {
			_def(msg, colors.show);
		}
		function success(msg) {
			_def(msg, colors.success);
		}
		function error(msg) {
			_def(msg, colors.error);
		}
		function info(msg) {
			_def(msg, colors.info);
		}
		function warn(msg) {
			_def(msg, colors.warning);
		}

	};

})();
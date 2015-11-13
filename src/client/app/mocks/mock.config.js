(function () {
	//https://endlessindirection.wordpress.com/2013/05/18/angularjs-delay-response-from-httpbackend/
	'use strict'

	var moduleID = 'app.mocks';
	var injectParams = ['$provide'];

	angular.module(moduleID)
		.config(mockConfig);

	mockConfig.$inject = injectParams;
	function mockConfig($provide) {

		$provide.decorator('$httpBackend', ['$delegate', function ($delegate) {
			var proxy = function (method, url, data, callback, headers) {
				var interceptor = function () {
					var _this = this,
						_arguments = arguments;
					setTimeout(function () {
						callback.apply(_this, _arguments);
					}, Math.random()*700+100);
				};
				return $delegate.call(this, method, url, data, interceptor, headers);
			};
			for (var key in $delegate) {
				proxy[key] = $delegate[key];
			}
			return proxy;
		}]);

	};

})();
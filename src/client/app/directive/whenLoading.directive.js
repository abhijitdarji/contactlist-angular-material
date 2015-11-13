(function () {
  'use strict';

  var moduleID = 'app.directive';
  var dirID = 'whenLoading';
  var injectParams = ['$http'];

  angular
    .module(moduleID)
    .directive(dirID, whenLoading);

  whenLoading.$inject = injectParams
  function whenLoading($http) {
    var directive = {
      restrict: 'A',
      link: linkFn
    };

    function linkFn(scope, element, attrs) {
      scope.isLoading = function () {
        return $http.pendingRequests.length > 0;
      };
      scope.$watch(scope.isLoading, function (value) {
        if (value) {
          element.removeClass('ng-hide');
        } else {
          element.addClass('ng-hide');
        }
      });
    }
    
    return directive;
  }
})();

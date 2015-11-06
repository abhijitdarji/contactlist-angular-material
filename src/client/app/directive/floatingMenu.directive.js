(function () {
    'use strict';

    var moduleID = 'app.directive';
    var dirID = 'floatingMenu';
    var injectParams = ['$scope', '$timeout','$mdDialog'];

    angular
        .module(moduleID)
        .directive(dirID, floatingMenu);

    function floatingMenu() {
        var directive = {
            bindToController: true,
            controller: MenuController,
            controllerAs: 'fm',
            restrict: 'EA',
            scope: {
                'msg': '='
            },
            templateUrl: 'app/directive/floating-Menu.html'
        };

        MenuController.$inject = injectParams;
        function MenuController($scope, $timeout, $mdDialog) {
            var fm = this;

            fm.hidden = false;
            fm.isOpen = false;
            // On opening, add a delayed property which shows tooltips after the speed dial has opened
            // so that they have the proper position; if closing, immediately hide the tooltips
            $scope.$watch('fm.isOpen', function (isOpen) {
                if (isOpen) {
                    $timeout(function () {
                        $scope.tooltipVisible = fm.isOpen;
                    }, 600);
                } else {
                    $scope.tooltipVisible = fm.isOpen;
                }
            });

            fm.items = [
                { name: "person_add", toltip: "Add New Contact", direction: "left", color: "black", size:24 },
                { name: "group_add", toltip: "Add New Group", direction: "left", color: "black", size:24 }
            ];

            fm.openDialog = function ($event, item) {
                // Show the dialog
                $mdDialog.show({
                    clickOutsideToClose: true,
                    controller: function ($mdDialog) {
                        // Save the clicked item
                        this.item = item;
                        // Setup some handlers
                        this.close = function () {
                            $mdDialog.cancel();
                        };
                        this.submit = function () {
                            $mdDialog.hide();
                        };
                    },
                    controllerAs: 'dialog',
                    templateUrl: 'dialog.html',
                    targetEvent: $event
                });
            }
        }

        return directive;
    }
})();

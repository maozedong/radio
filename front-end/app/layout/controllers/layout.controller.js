/**
 * Created by Galyna on 16.03.2016.
 */
(function () {

    angular
        .module('layout')
        .controller('LayoutController', ['$mdDialog', '$mdSidenav','$templateCache', LayoutController
        ]);

    /**
     * Main Controller for the  App
     * @param $mdDialog
     * @constructor
     */
    function LayoutController($mdDialog, $mdSidenav, $templateCache) {
        var vm = this;

        vm.showLogin = showLogin;
        vm.showRegistration = showRegistration;
        vm.toggleLeftMenu = toggleLeftMenu;

        function toggleLeftMenu() {
            $mdSidenav('left').toggle();
        }

        function showRegistration() {
            $mdDialog.show({
                controller: 'LoginController',
                controllerAs: "vm",
                template:  $templateCache.get('users/views/registration.form.html'),
                parent: angular.element(document.body),
                clickOutsideToClose: true
            });
        }

        /**
         * Show Login dialog
         */
        function showLogin() {
            $mdDialog.show({
                controller: 'LoginController',
                controllerAs: "vm",
                template: $templateCache.get('users/views/login.form.html'),
                parent: angular.element(document.body),
                clickOutsideToClose: true
            });
        }
    }
})();


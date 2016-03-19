/**
 * Created by Galyna on 16.03.2016.
 */
(function () {

    angular
        .module('layout')
        .controller('LayoutController', ['$mdDialog', '$mdSidenav', LayoutController
        ]);

    /**
     * Main Controller for the  App
     * @param $mdDialog
     * @constructor
     */
    function LayoutController($mdDialog, $mdSidenav) {
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
                templateUrl: '../app/users/views/registration.form.html',
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
                templateUrl: '../app/users/views/login.form.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true
            });
        }
    }
})();


/**
 * Created by Galyna on 16.03.2016.
 */
(function () {

    angular
        .module('layout')
        .controller('LayoutController', ['$log', '$mdDialog', LayoutController
        ]);

    /**
     * Main Controller for the  App
     * @param $log
     * @param $mdDialog
     * @constructor
     */
    function LayoutController($log, $mdDialog) {
        var vm = this;

        vm.showLogin = showLogin;
        vm.showRegistration = showRegistration;

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


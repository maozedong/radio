/**
 * Created by Galyna on 16.03.2016.
 */
(function () {

    angular
        .module('users')
        .controller('LoginController', ['$mdDialog', '$log', 'LoginService', '$location', LoginController
        ]);

    /**
     * Controller for Login
     * @param $mdDialog
     * @param $log
     * @constructor
     */
    function LoginController($mdDialog, $log, LoginService, $location) {
        var vm = this;

        vm.registationModel = {
            password: 'password',
            email: 'ostapradio@gmail.com',
            password_c: 'password'
        };
        vm.loginModel = vm.registationModel;

        vm.cancel = function () {
            $mdDialog.hide();
        };

        vm.login = function (form) {
            $log.debug("login()...");

            if (form.$valid) {
                LoginService.login(form).then(function (user) {
                    $log.debug("success   login ..." + user.email + "" + user.key);
                    $location.path('/profile');
                    $mdDialog.hide();
                }, function () {
                    $log.debug("fail...");
                })
            }

        };

        vm.register = function (form) {
            $log.debug("register()...");
            if (form.$valid) {
                LoginService.login(form).then(function (user) {
                    $log.debug("success   register ..." + user.email + "" + user.key);
                    $mdDialog.hide();
                }, function () {
                    $log.debug("fail...");
                })
            }


        };

        vm.user = {
            password: 'password',
            email: 'ostapradio@gmail.com',
            password_c: 'password'
        };
    }

})();


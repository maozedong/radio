/**
 * Created by Galyna on 16.03.2016.
 */
(function () {

    angular
        .module('users')
        .controller('LoginController', ['$mdDialog', '$log', 'LoginService', LoginController
        ]);

    /**
     * Controller for Login
     * @param $mdDialog
     * @param $log
     * @constructor
     */
    function LoginController($mdDialog, $log, LoginService) {
        var vm = this;

        vm.registationModel = {
            password: 'password',
            email: 'ostapradio@gmail.com',
            password_c: 'password'
        };

        vm.cancel = function () {
            $mdDialog.hide();
        };

        vm.login = function () {
            $log.debug("login()...");
            LoginService.login().then(function () {
                $log.debug("successnovalidate ...");

            }, function () {
                $log.debug("fail...");

            })
            $mdDialog.hide();
        };

        vm.register = function (form) {
            $log.debug("register()...");
            if (form.$valid) {
                LoginService.login().then(function (user) {
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


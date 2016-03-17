/**
 * Created by Galyna on 16.03.2016.
 */
(function () {
    'use strict';

    angular.module('users')
        .factory('LoginService', ['$q', LoginService]);

    /**
     * Login DataService
     * Login embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{login: Function}}
     * @constructor
     */
    function LoginService($q) {
        var user = {key: "1", email: "gal@gmail.com", name: "Galyna Vistovska"};

        // Promise-based API
        return {
            login: function () {
                // Simulate async nature of real remote calls
                return $q.when(user);
            },
            register: function () {
                // Simulate async nature of real remote calls
                return $q.when(user);
            }
        };
    }

})();

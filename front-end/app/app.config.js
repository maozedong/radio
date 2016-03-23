/**
 * Created by Galyna on 16.03.2016.
 */

angular
    .module('ostapRadioApp')
    .config(function ($routeProvider, $mdThemingProvider, $mdIconProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'app/layout/views/layout.html',
                controller: 'LayoutController',
                controllerAs: "vm"
            })
            .when('/profile', {templateUrl: 'app/users/views/profile.html'})
            .otherwise({redirectTo: '/home'});

        $mdThemingProvider.theme('default')
            .primaryPalette('blue', {
                'default': '700', // by default use shade 400 from the pink palette for primary intentions
                'hue-1': '800', // use shade 100 for the <code>md-hue-1</code> class
                'hue-2': '900' // use shade 600 for the <code>md-hue-2</code> class
            })
            // If you specify less than all of the keys, it will inherit from the
            // default shades
            .accentPalette('pink', {
                'default': 'A200',
                'hue-1': 'A200', // use shade 100 for the <code>md-hue-1</code> class
                'hue-2': 'A200' // use shade 600 for the <code>md-hue-2</code> class)// use shade 200 for default, and keep all other shades the same
            })
            .backgroundPalette('grey', {
                'default': '200'
            })


        $mdIconProvider
            .iconSet("action", "../node_modules//material-design-icons/sprites/svg-sprite/svg-sprite-action.svg")
            .iconSet("communication", "../node_modules//material-design-icons/sprites/svg-sprite/svg-sprite-communication.svg")
            .iconSet("navigation", "../node_modules/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg")


    }).run(function ($http, $templateCache) {
    var urls = [
        '../node_modules/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg',
        "../node_modules//material-design-icons/sprites/svg-sprite/svg-sprite-action.svg",
        "../node_modules//material-design-icons/sprites/svg-sprite/svg-sprite-communication.svg"
    ];
    // Pre-fetch icons sources by URL and cache in the $templateCache...
    // subsequent $http calls will look there first.
    angular.forEach(urls, function (url) {
        $http.get(url, {cache: $templateCache});
    });
})
;

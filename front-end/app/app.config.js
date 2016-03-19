/**
 * Created by Galyna on 16.03.2016.
 */

angular
    .module('ostapRadioApp').config(function ($routeProvider, $mdThemingProvider, $mdIconProvider) {
    $routeProvider
        .when('/home', {templateUrl: 'app/layout/views/layout.html', controller: 'LayoutController', controllerAs: "vm"})
        .when('/profile', {templateUrl: 'app/users/views/profile.html'})
        .otherwise({redirectTo: '/home'});

    $mdThemingProvider.theme('default')
        .primaryPalette('purple', {
            'default': '500', // by default use shade 400 from the pink palette for primary intentions
            'hue-1': '700', // use shade 100 for the <code>md-hue-1</code> class
            'hue-2': '800' // use shade 600 for the <code>md-hue-2</code> class
        })
        // If you specify less than all of the keys, it will inherit from the
        // default shades
        .accentPalette('green', {
            'default': 'A200',
            'hue-1': 'A200', // use shade 100 for the <code>md-hue-1</code> class
            'hue-2': 'A200' // use shade 600 for the <code>md-hue-2</code> class)// use shade 200 for default, and keep all other shades the same
        })
        .backgroundPalette('grey', {
            'default': '200'
        })

    $mdIconProvider
        .defaultIconSet("content/images/svg/avatars.svg", 128)
        .icon("menu", "content/images/svg/menu.svg", 24);


});

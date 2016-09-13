var sampleApp = angular.module('artApp', ['ngRoute']);

sampleApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
           when('/Home', {
                templateUrl: 'index.html'               
            }).
            when('/About', {
                templateUrl: 'features/about.html',
              //  controller: 'usersController',
             //   controllerAs: 'routeVM',
            }).
             when('/Contact', {
                templateUrl: 'features/contact.html',
              //  controller: 'usersController',
             //   controllerAs: 'routeVM',
            }).
             when('/Login', {
                templateUrl: 'features/index-login.html',
              //  controller: 'usersController',
             //   controllerAs: 'routeVM',
            }).
             
            otherwise({
                redirectTo: '/Home'
            });
    }]);
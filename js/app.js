(function() {
  'use strict';

  angular.module('myApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('/home', {
          url: '/home',
          templateUrl: 'templates/home.html'
        })

      .state('/about', {
        url: '/about',
        templateUrl: 'templates/about.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'

      })

      .state('/more', {
        url: '/more',
        templateUrl: 'templates/more.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'

      });

      $urlRouterProvider.otherwise('/home');

    }]);

})();
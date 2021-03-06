'use strict';

/**
 * @ngdoc overview
 * @name plantillabaseApp
 * @description
 * # plantillabaseApp
 *
 * Main module of the application.
 */
angular
  .module('plantillabaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/example',{
        templateUrl: 'views/example.html',
        controller: 'miCtrl'
      })
      .when('/exampleplaylist', {
        templateUrl: 'views/exampleplaylist.html',
        controller: 'PlaylistCtrl'
      })
      .when('/exampleplaylist', {
        templateUrl: 'views/exampleplaylist.html',
        controller: 'PlaylistMetodosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

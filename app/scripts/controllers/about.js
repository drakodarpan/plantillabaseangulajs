'use strict';

/**
 * @ngdoc function
 * @name plantillabaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the plantillabaseApp
 */
angular.module('plantillabaseApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

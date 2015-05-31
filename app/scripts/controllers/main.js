'use strict';

/**
 * @ngdoc function
 * @name plantillabaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the plantillabaseApp
 */
angular.module('plantillabaseApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

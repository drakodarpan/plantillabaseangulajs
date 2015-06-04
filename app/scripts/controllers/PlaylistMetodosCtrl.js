'use strict';

angular.module('plantillabaseApp')
.controller('PlaylistMetodosCtrl', ['$scope', 'Playlist', function($scope, Playlist){
    $scope.playlist = Playlist.listar();
    $scope.borrar = function(id){
      Playlist.borrar(id);
      };
  }]);

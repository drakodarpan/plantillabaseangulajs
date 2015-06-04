'use strict';

angular.module('plantillabaseApp')
.controller('PlaylistCtrl', ['$scope', 'Playlist', function($scope, Playlist){
  $scope.playlist = Playlist.listar();
}]);

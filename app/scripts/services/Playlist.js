'use strict';

angular.module('plantillabaseApp')
.factory('Playlist', [function(){
  var playlist = [
    'The Miracle (Of Joey Ramone)',
    'Raise By Wolves',
    'Every Breaking Wave',
    'Cedarwood Road',
    'California (There Is No End to love)',
    'Sleep Like a Baby Tonight',
    'Song Like a Baby Tonight',
    'This Is Where You Can REach Me Nows',
    'Iris (Hold Me Close)',
    'The Troubles',
    'Volcano'
  ];

  var listar = function(){return playlist;};
  var borrar = function(id){
    console.log('id 123: ', id);
    playlist.splice(id,1);
  };

  return {
    listar: listar,
    borrar: borrar
  };
}]);

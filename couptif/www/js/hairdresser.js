angular.module('starter.services', ['ngResource'])

  .factory('Hairdresser', function ($resource) {
    return $resource('http://localhost:3000/hairdressers/:hairdresserId.json');
  });

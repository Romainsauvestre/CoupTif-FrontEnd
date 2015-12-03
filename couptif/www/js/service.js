// All the documentation about $resource can be found at: https://docs.angularjs.org/api/ngResource/service/$resource

var host = 'http://api-couptif.herokuapp.com';
//var host = 'http://localhost:3000';

angular.module('starter.services', ['ngResource'])

  .factory('Hairdresser', function ($resource) {
    return $resource(host+'/hairdressers/:hairdresserId.json');
  })

  .factory('Service', function ($resource) {
    return $resource(host+'/hairdressers/:hairdresserId/services/:serviceId.json')
  })

  .factory('Calendar', function ($resource) {
    return $resource(host+'/hairdressers/:hairdresserId/calendars/:calendarId.json')
  })

  .factory('Slot', function ($resource) {
    return $resource(host+'/hairdressers/:hairdresserId/calendars/:calendarId/slots/:slotId.json')
  })
;

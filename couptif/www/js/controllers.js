angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('HairdressersCtrl', function($scope, Hairdresser){
  $scope.hairdressers = Hairdresser.query();
})

.controller('HairdresserCtrl', function($scope, $stateParams, Hairdresser, Service) {
  $scope.hairdresser = Hairdresser.get({hairdresserId: $stateParams.hairdresserId});
  $scope.services = Service.query({hairdresserId: $stateParams.hairdresserId});
})

.controller('ServiceCtrl', function($scope, $stateParams, Service, Calendar){
  $scope.service = Service.get({hairdresserId: $stateParams.hairdresserId, serviceId: $stateParams.serviceId});

  // Get list of calendars
  var calendars = Calendar.query({hairdresserId: $stateParams.hairdresserId});

  // Transform it into a list of availabilities
  var days_availability = {}; //= {"2015-12-03": true, "2015-12-04": false, "2015-12-05": true};
  for (var k = 0; k++; k<calendars.length) {
      days_availability[calendars[k].day] = (!calendars[k].available);
  }

  console.log(calendars);


  $("#myCalendar-1").ionCalendar({
    lang: "en",                     // language
    sundayFirst: false,             // first week day
    years: "2015-2016",                    // years diapason
    format: "YYYY-MM-DD",           // date format
    onClick: function(date){        // click on day returns date
      console.log(date); //TODO: make a link
    },
    availabilities: days_availability
  });
});


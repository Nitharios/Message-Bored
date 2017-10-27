angular.module('boredApp')
.controller('RegistrationController', ['$scope', 'RegistrationService', function($scope, RegistrationService) {

  $scope.RegistrationService = RegistrationService;

}]);
angular.module('boredApp')
.controller('SingleTopicController', ['$scope', '$routeParams', 'TopicsService', function($scope, $routeParams, TopicsService) {

  $scope.TopicsService = TopicsService;
  TopicsService.getTopicById($routeParams.id);

}]);
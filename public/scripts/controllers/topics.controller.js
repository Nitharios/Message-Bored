angular.module('boredApp')
.controller('TopicsController', ['$scope', 'TopicsService', function($scope, TopicsService) {

  $scope.TopicsService = TopicsService;
  $scope.newTopic = { 
    title : '',
    // placeholder until validations are added
    created_by : 1
  };

  $scope.createTopic = function() {
    TopicsService.createTopic($scope.newTopic.title, $scope.newTopic.created_by);
    $scope.newTopic.title = '';
    $scope.newTopic.created_by = '';
  };
}]);
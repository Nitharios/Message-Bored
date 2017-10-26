angular.module('boredApp')
.controller('MessagesController', ['$scope', '$routeParams', 'TopicsService', 'MessagesService', function($scope, $routeParams, TopicsService, MessagesService) {

  $scope.updatedTopic = {
    title : ''
  };

  $scope.newMessage = { 
    body : '',
    // placeholder until validations are added
    author_id : 1,
    topic_id : $routeParams.id
  };

  $scope.MessagesService = MessagesService;
  $scope.TopicsService = TopicsService;
}]);
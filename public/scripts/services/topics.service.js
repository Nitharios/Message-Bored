angular.module('boredApp')
.service('TopicsService', ['$http', function($http) {
    var url = '/api/topics';

    // read methods
    this.getTopics = function() { 
      return $http.get(url)
      .then(function(topicsList) {
        return topicsList.data;
      }); 
    };
    // create topic
    this.createTopic = function(title, created_by) {
      // create on backend
      $http.post(url, newTopic)
      .then(function(response) {
        return;
      });
    };
    // get topic information
    // should first check if topic exists
    this.getTopicById = function(id) { 
      return $http.get(url + '/' + id)
      .then(function(topicData) {
        return topicData.data;
      });
    };

    // update topic title
    this.updateTopicById = function(id, updatedTitle) {
      return $http.put(url + '/' + id, {
        title : updatedTitle
      })
      .then(function(updatedTopicData) {
        return updatedTopicData.data;
      });
    };
}]);
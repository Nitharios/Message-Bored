angular.module('boredApp')
.service('TopicsService', ['$http', function($http) {
    var url = '/api/topics';
    var self = this;
    // collection of topics
    this.topics = [];
    // initialization of topicsList
    $http.get(url)
    .then(function(topicsList) {
      self.topics = topicsList.data;
    });
    // read methods
    this.getTopics = function() { return self.topics; };
    // create topic
    this.createTopic = function(title, created_by) {
      if (!title) { return; }

      var newTopic = { 
        title : title,
        created_by : created_by
      };
      // check if title already exists
      var topicExists = self.topics.some(function(element) {
        return element.title === newTopic.title;
      });
      if (topicExists) return topicExists; 
      // create on frontend if topic does not exist
      self.topics.push(newTopic);
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
      // .then(function () {
      //   return self.topic;
      // });
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
angular.module('boredApp')
.service('TopicsService', ['$http', function($http) {
    var url = '/api/topics';
    var self = this;

    // collection of topics
    this.topics = [];

    // single topic
    this.topic = {};

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
    this.getTopicByTitle = function(title) { 
      $http.get(url + '/' + title)
      .then(function(topicData) {
        self.topic = topicData.data;
      });
    };
}]);
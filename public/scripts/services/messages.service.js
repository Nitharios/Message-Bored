angular.module('boredApp')
.service('MessagesService', ['$http', function($http) {
    var latestMessages = '/api/messages/latest';
    var newMessage = '/api/messages';
    var messagesByTopic = '/api/messages/by-topic';
    var self = this;
    // collection of messages
    this.messages = [];
    // initialization of messagesList
    // read methods
    this.getMessages = function(topic_id) {

      if (topic_id) {
        return $http.get(messagesByTopic + '/' + topic_id)
        .then(function(messagesList) {
          return messagesList.data;
        });

      } else { 
        return $http.get(latestMessages)
        .then(function(messagesList) {
          return messagesList.data;
        });
      }
    };
    // create message
    this.createMessage = function(body, author_id, topic_id) {
      if (!body) { return; }

      var newMessage = { 
        body : body,
        author_id : author_id,
        topic_id : topic_id
      };
      // create on frontend
      self.messages.push(newMessage);
      // create on backend
      $http.post(url, newMessage)
      .then(function(response) {
        return;
      });
    };
}]);
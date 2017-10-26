angular.module('boredApp')
.service('MessagesService', ['$http', function($http) {
    var latestMessages = '/api/messages/latest';
    var postNew = '/api/messages';
    var messagesByTopic = '/api/messages/by-topic';
    var messagesByUser = '/api/messages/by-user';
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

    this.getMessagesByUser = function(author_id) {
      return $http.get(messagesByUser + '/' + author_id )
      .then(function(messagesList) {
        return messagesList.data;
      });
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
      $http.post(postNew, newMessage)
      .then(function(response) {
        return;
      });
    };
}]);
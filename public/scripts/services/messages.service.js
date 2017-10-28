angular.module('boredApp')
.service('MessagesService', ['$http', function($http) {
    var latestMessages = '/api/messages/latest';
    var postNew = '/api/messages';
    var messagesByTopic = '/api/messages/by-topic';
    var messagesByUser = '/api/messages/by-user';
    var editMessage = '/api/messages';

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
    this.createMessage = function(newMessage) {
      // create on backend
      return $http.post(postNew, newMessage)
      .then(function(response) {
        return response.data;
      });
    };

    this.deleteMessage = function(message_id) {
      return $http.delete(editMessage + '/' + message_id)
      .then(function(response) {
        return response.data;
      });
    };
}]);
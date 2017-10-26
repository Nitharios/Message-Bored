angular.module('boredApp')
.service('MessagesService', ['$http', function($http) {
    var url = '/api/messages/latest';
    var self = this;
    // collection of messages
    this.messages = [];
    // initialization of messagesList
    $http.get(url)
    .then(function(messagesList) {
      console.log(messagesList);
      self.messages = messagesList.data;
    });
    // read methods
    this.getMessages = function() { return self.messages; };
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
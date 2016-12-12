module.exports = function() {
  var faker = require('faker'),
      _ = require('lodash'),
      uuid = require('uuid');

  var users = require('./users.json');

  var conversations = function(nbConversations, nbMessages) {
    return _.times(nbConversations, function(index) {
      var participants = _.sampleSize(users, 2);

      var conversation = {
        uuid: uuid.v4(),
        title: faker.lorem.words(),
        created: Date.now(),
        updated: Date.now(),
        messages: _.times(nbMessages, function() {
          return {
            uuid: uuid.v4(),
            created: Date.now(),
            updated: Date.now(),
            body: faker.lorem.sentence(),
            author_uuid: _.sample(participants).uuid
          };
        })
      };

      return conversation;
    });
  };

  return {
    users: users,
    conversations: conversations(_.random(4, 7), _.random(4, 40))
  };
}

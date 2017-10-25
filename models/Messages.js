/* jshint esversion:6 */
module.exports = function(sequelize, DataTypes) {
  const Message = sequelize.define('message', {
    body : { 
      type: DataTypes.TEXT,
      notNull : true
    }
  }, {
    tableName : 'messages'
  });

  Message.associate = function(models) {
    Message.belongsTo(models.topic);
  };

  return Message;
};
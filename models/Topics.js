/* jshint esversion:6 */
module.exports = function(sequelize, DataTypes) {
  const Topic = sequelize.define('topic', {
    name : { 
      type: DataTypes.STRING,
      unique : true,
      notNull : true
    }
  }, {
    tableName : 'topics'
  });

  Topic.associate = function(models) {
    Topic.belongsTo(models.user);
    Topic.hasMany(models.message);
  };

  return Topic;
};
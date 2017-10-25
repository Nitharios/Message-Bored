/* jshint esversion:6 */
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('user', {
    name : { 
      type: DataTypes.STRING,
      unique : true,
      notNull : true
    }
  }, {
    tableName : 'users'
  });

  User.associate = function(models) {
    User.hasMany(models.topic);
    User.hasMany(models.message);
  };

  return User;
};
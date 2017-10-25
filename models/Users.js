/* jshint esversion:6 */
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('user', {
    name : { 
      type: DataTypes.STRING,
      unique : true,
      allowNull : false
    }
  }, {
    tableName : 'users'
  }, {
    indexes : [
      {
        name : 'users_pkey',
        unique : true,
        fields : ['id']
      }
    ]
  });

  // User.associate = function(models) {
  //   User.hasMany(models.topic);
  //   User.hasMany(models.message);
  // };

  return User;
};
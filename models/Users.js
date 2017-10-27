/* jshint esversion:6 */
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('user', {
    username : { 
      type: DataTypes.STRING,
      unique : true,
      allowNull : false
    },
    password : DataTypes.STRING,
    role : { type : DataTypes.STRING, defaultValue : 'user' }
  }, {
    tableName : 'users'
  }, {
    indexes : [
      {
        name : 'users_pkey',
        unique : true,
        fields : ['id']
      },
      {
        name : 'role_key',
        fields : ['role']
      }
    ]
  });

  // User.associate = function(models) {
  //   User.hasMany(models.topic);
  //   User.hasMany(models.message);
  // };

  return User;
};
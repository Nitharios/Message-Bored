/* jshint esversion:6 */
module.exports = function(sequelize, DataTypes) {
  const Topic = sequelize.define('topic', {
    title : { 
      type: DataTypes.STRING,
      unique : true,
      allowNull : false
    }
  }, {
    tableName : 'topics'
  }, {
    indexes : [
      {
        name : 'topics_pkey',
        unique : true,
        fields : ['id']
      },
      {
        name : 'topics_title_key',
        unique : true,
        fields : ['title']
      }
    ]
  });

  Topic.associate = function(models) {
    Topic.belongsTo(models.user, { 
      foreignKey : {
        name : "created_by",
        allowNull : false
      },
      onDelete : "NO ACTION"
    });
  };

  return Topic;
};
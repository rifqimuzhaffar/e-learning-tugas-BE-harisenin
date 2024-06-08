'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usermaterial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usermaterial.init({
    id_user: DataTypes.INTEGER,
    id_material: DataTypes.INTEGER,
    status: DataTypes.STRING,
    xp_earned: DataTypes.INTEGER,
    gold_earned: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usermaterial',
    underscored: true,
  });
  return usermaterial;
};
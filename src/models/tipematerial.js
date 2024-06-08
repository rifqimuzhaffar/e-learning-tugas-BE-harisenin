'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipematerial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tipematerial.init({
    jenis_material: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tipematerial',
    underscored: true,
  });
  return tipematerial;
};
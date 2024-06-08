"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      material.belongsTo(models.subbab, {
        foreignKey: "id_sub_bab",
        as: "sub_bab",
      });
    }
  }
  material.init(
    {
      nama_material: DataTypes.STRING,
      img_thumbnail: DataTypes.STRING,
      xp: DataTypes.INTEGER,
      gold: DataTypes.INTEGER,
      id_tipe_material: DataTypes.INTEGER,
      id_sub_bab: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "material",
      underscored: true,
    }
  );
  return material;
};
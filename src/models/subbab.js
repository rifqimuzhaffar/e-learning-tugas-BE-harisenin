"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class subbab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      subbab.belongsTo(models.bab, { foreignKey: "id_bab", as: "bab" });
      subbab.hasMany(models.material, {
        foreignKey: "id_sub_bab",
        as: "materials",
      });
    }
  }
  subbab.init(
    {
      nama_sub_bab: DataTypes.STRING,
      img_thumbnail: DataTypes.STRING,
      is_gratis: DataTypes.BOOLEAN,
      id_bab: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "subbab",
      underscored: true,
    }
  );
  return subbab;
};

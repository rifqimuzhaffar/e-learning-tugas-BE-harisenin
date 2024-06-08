"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class matapelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      matapelajaran.belongsTo(models.modepembelajaran, {
        foreignKey: "id_mode",
        as: "mode_pembelajaran",
      });
      matapelajaran.hasMany(models.bab, {
        foreignKey: "id_pelajaran",
        as: "babs",
      });
    }
  }
  matapelajaran.init(
    {
      nama_pelajaran: DataTypes.STRING,
      img_thumbnail: DataTypes.STRING,
      id_mode: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "matapelajaran",
      underscored: true,
    }
  );
  return matapelajaran;
};

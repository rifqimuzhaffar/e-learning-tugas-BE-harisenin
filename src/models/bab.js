"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      bab.belongsTo(models.matapelajaran, {
        foreignKey: "id_pelajaran",
        as: "mata_pelajaran",
      });
      bab.hasMany(models.subbab, { foreignKey: "id_bab", as: "sub_babs" });
    }
  }
  bab.init(
    {
      nama_bab: DataTypes.STRING,
      img_thumbnail: DataTypes.STRING,
      id_pelajaran: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "bab",
      underscored: true,
    }
  );
  return bab;
};

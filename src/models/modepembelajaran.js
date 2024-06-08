"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class modepembelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      modepembelajaran.belongsTo(models.kelas, {
        foreignKey: "id_kelas",
        as: "kelas",
      });
      modepembelajaran.hasMany(models.matapelajaran, {
        foreignKey: "id_mode",
        as: "mata_pelajarans",
      });
    }
  }
  modepembelajaran.init(
    {
      nama_mode: DataTypes.STRING,
      id_kelas: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "modepembelajaran",
      underscored: true,
    }
  );
  return modepembelajaran;
};

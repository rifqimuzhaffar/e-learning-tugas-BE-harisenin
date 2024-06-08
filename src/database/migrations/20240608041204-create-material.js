"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("materials", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama_material: {
        type: Sequelize.STRING,
      },
      img_thumbnail: {
        type: Sequelize.STRING,
      },
      xp: {
        type: Sequelize.INTEGER,
      },
      gold: {
        type: Sequelize.INTEGER,
      },
      id_tipe_material: {
        type: Sequelize.INTEGER,
      },
      id_sub_bab: {
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("materials");
  },
};

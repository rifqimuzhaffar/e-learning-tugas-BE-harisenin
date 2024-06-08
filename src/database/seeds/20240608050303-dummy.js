"use strict";

const {
  user,
  kelas,
  modepembelajaran,
  matapelajaran,
  bab,
  subbab,
  material,
  tipematerial,
  usermaterial,
} = require("../../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} _Sequelize
   */

  up: async (queryInterface, _Sequelize) => {
    await user.destroy({ truncate: true });
    await kelas.destroy({ truncate: true });
    await modepembelajaran.destroy({ truncate: true });
    await matapelajaran.destroy({ truncate: true });
    await bab.destroy({ truncate: true });
    await subbab.destroy({ truncate: true });
    await material.destroy({ truncate: true });
    await tipematerial.destroy({ truncate: true });
    await usermaterial.destroy({ truncate: true });

    // Insert dummy data for Users
    await user.bulkCreate([
      {
        id: 1,
        nama_user: "User 1",
        email: "user1@example.com",
        password:
          "$2a$12$dyFm99NIGimzyDmXFQsL5.ciVFLV60mosEmjENGZOAGWe0HBU2J9a", //password1
      },
      {
        id: 2,
        nama_user: "User 2",
        email: "user2@example.com",
        password:
          "$2a$04$4pwSNmFBdw9RKyUYYajKKOWmBjItKPdJjBVlhfUMTFf/3TDeOwuyO", //password2
      },
    ]);

    // Insert dummy data for Kelas
    await kelas.bulkCreate([
      { id: 1, nama_kelas: "Kelas 1" },
      { id: 2, nama_kelas: "Kelas 2" },
      { id: 3, nama_kelas: "Kelas 3" },
      { id: 4, nama_kelas: "Kelas 4" },
      { id: 5, nama_kelas: "Kelas 5" },
      { id: 6, nama_kelas: "Kelas 6" },
      { id: 7, nama_kelas: "Kelas 7" },
      { id: 8, nama_kelas: "Kelas 8" },
      { id: 9, nama_kelas: "Kelas 9" },
      { id: 10, nama_kelas: "Kelas 10" },
      { id: 11, nama_kelas: "Kelas 11" },
      { id: 12, nama_kelas: "Kelas 12" },
      { id: 13, nama_kelas: "Kelas 10 SMK" },
      { id: 14, nama_kelas: "Kelas 11 SMK" },
      { id: 15, nama_kelas: "Kelas 12 SMK" },
      { id: 16, nama_kelas: "UTBK & Ujian Mandiri" },
      { id: 17, nama_kelas: "Pelatihan Guru" },
    ]);

    // Insert dummy data for Mode Pembelajaran
    await modepembelajaran.bulkCreate([
      { id: 1, nama_mode: "Pembelajaran Tematik", id_kelas: 1 },
      { id: 2, nama_mode: "Pembelajaran Menurut Topik", id_kelas: 1 },
      { id: 3, nama_mode: "Kurikulum Merdeka", id_kelas: 1 },
      { id: 4, nama_mode: "Pembelajaran Tematik", id_kelas: 2 },
      { id: 5, nama_mode: "Pembelajaran Menurut Topik", id_kelas: 2 },
      { id: 6, nama_mode: "Kurikulum Merdeka", id_kelas: 2 },
    ]);

    await matapelajaran.bulkCreate([
      {
        id: 1,
        nama_pelajaran: "Matematika",
        img_thumbnail: "img1",
        id_mode: 2,
      },
      {
        id: 2,
        nama_pelajaran: "Bahasa Indonesia",
        img_thumbnail: "img2",
        id_mode: 2,
      },
      {
        id: 3,
        nama_pelajaran: "IPA Terpadu",
        img_thumbnail: "img3",
        id_mode: 2,
      },
      {
        id: 4,
        nama_pelajaran: "Pendidikan Karakter",
        img_thumbnail: "img4",
        id_mode: 2,
      },
      {
        id: 5,
        nama_pelajaran: "ruangngaji",
        img_thumbnail: "img5",
        id_mode: 2,
      },
    ]);

    await bab.bulkCreate([
      {
        id: 1,
        nama_bab: "Bilangan 0-10",
        img_thumbnail: "img1",
        id_pelajaran: 1,
      },
      {
        id: 2,
        nama_bab: "Aplikasi Bilangan 0-10",
        img_thumbnail: "img2",
        id_pelajaran: 1,
      },
      {
        id: 3,
        nama_bab: "Geometri dan Pola",
        img_thumbnail: "img3",
        id_pelajaran: 1,
      },
      {
        id: 4,
        nama_bab: "Bilangan 11-20",
        img_thumbnail: "img4",
        id_pelajaran: 1,
      },
      {
        id: 5,
        nama_bab: "Geometri dan Pola 2",
        img_thumbnail: "img5",
        id_pelajaran: 1,
      },
      {
        id: 6,
        nama_bab: "Pengukuran (1)",
        img_thumbnail: "img6",
        id_pelajaran: 1,
      },
      {
        id: 7,
        nama_bab: "Bilangan 21-40",
        img_thumbnail: "img7",
        id_pelajaran: 1,
      },
      {
        id: 8,
        nama_bab: "Aplikasi Bilangan 21-40",
        img_thumbnail: "img8",
        id_pelajaran: 1,
      },
      {
        id: 9,
        nama_bab: "Geometri dan Pola 3",
        img_thumbnail: "img9",
        id_pelajaran: 1,
      },
      {
        id: 10,
        nama_bab: "Pengukuran (2)",
        img_thumbnail: "img10",
        id_pelajaran: 1,
      },
    ]);

    await subbab.bulkCreate([
      {
        id: 1,
        nama_sub_bab: "Mengenal Bilangan 1-10 (1)",
        img_thumbnail: "img1",
        id_bab: 1,
        is_gratis: true,
      },
      {
        id: 2,
        nama_sub_bab: "Mengenal Bilangan 1-10 (2)",
        img_thumbnail: "img2",
        id_bab: 1,
        is_gratis: false,
      },
      {
        id: 3,
        nama_sub_bab: "Lebih Besar? Lebih Kecil? 1-10",
        img_thumbnail: "img3",
        id_bab: 1,
        is_gratis: false,
      },
      {
        id: 4,
        nama_sub_bab: "Bermain Dengan Bilangan 1-10",
        img_thumbnail: "img4",
        id_bab: 1,
        is_gratis: false,
      },
    ]);

    await tipematerial.bulkCreate([
      { id: 1, jenis_material: "Video" },
      { id: 2, jenis_material: "End quiz" },
      { id: 3, jenis_material: "Single quiz" },
      { id: 4, jenis_material: "Summary" },
    ]);

    await material.bulkCreate([
      {
        id: 1,
        nama_material: "Video 1",
        id_sub_bab: 1,
        id_tipe_material: 1,
        img_thumbnail: "video1.png",
        xp: 125,
        gold: 10,
      },
      {
        id: 2,
        nama_material: "End Quiz 1",
        id_sub_bab: 1,
        id_tipe_material: 2,
        img_thumbnail: "end_quiz1.png",
        xp: 0,
        gold: 0,
      },
      {
        id: 3,
        nama_material: "Single Quiz 1",
        id_sub_bab: 1,
        id_tipe_material: 3,
        img_thumbnail: "single_quiz1.png",
        xp: 50,
        gold: 50,
      },
      {
        id: 4,
        nama_material: "Summary 1",
        id_sub_bab: 1,
        id_tipe_material: 4,
        img_thumbnail: "summary1.png",
        xp: 0,
        gold: 0,
      },
      {
        id: 5,
        nama_material: "Video 2",
        id_sub_bab: 2,
        id_tipe_material: 1,
        img_thumbnail: "video2.png",
        xp: 125,
        gold: 10,
      },
      {
        id: 6,
        nama_material: "End Quiz 2",
        id_sub_bab: 2,
        id_tipe_material: 2,
        img_thumbnail: "end_quiz2.png",
        xp: 0,
        gold: 0,
      },
      {
        id: 7,
        nama_material: "Single Quiz 2",
        id_sub_bab: 2,
        id_tipe_material: 3,
        img_thumbnail: "single_quiz2.png",
        xp: 50,
        gold: 50,
      },
      {
        id: 8,
        nama_material: "Summary 2",
        id_sub_bab: 2,
        id_tipe_material: 4,
        img_thumbnail: "summary2.png",
        xp: 0,
        gold: 0,
      },
    ]);

    await usermaterial.bulkCreate([
      {
        id_user: 1,
        id_material: 1,
        status: "completed",
        xp_earned: 125,
        gold_earned: 10,
      },
      {
        id_user: 1,
        id_material: 2,
        status: "incomplete",
        xp_earned: 0,
        gold_earned: 0,
      },
      {
        id_user: 1,
        id_material: 3,
        status: "completed",
        xp_earned: 50,
        gold_earned: 50,
      },
      {
        id_user: 2,
        id_material: 4,
        status: "completed",
        xp_earned: 0,
        gold_earned: 0,
      },
      {
        id_user: 2,
        id_material: 5,
        status: "completed",
        xp_earned: 125,
        gold_earned: 10,
      },
    ]);
  },
  /**
   * @param {import('sequelize').QueryInterface} _queryInterface
   * @param {import('sequelize').Sequelize} _Sequelize
   */
  async down(_queryInterface, _Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

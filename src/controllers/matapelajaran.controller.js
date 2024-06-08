const { matapelajaran: MataPelajaranModel } = require("../models");

const index = async (req, res, next) => {
  try {
    const { id_mode } = req.params;

    if (!id_mode) {
      return res.status(400).send({
        message: "error",
        error: "id_mode is required",
      });
    }

    const mataPelajarans = await MataPelajaranModel.findAll({
      where: {
        id_mode,
      },
      attributes: ["id", "nama_pelajaran", "img_thumbnail"],
    });

    return res.send({
      message: "success",
      data: mataPelajarans.map((pelajaran) => ({
        id: pelajaran.id,
        nama: pelajaran.nama_pelajaran,
        img_thumbnail: pelajaran.img_thumbnail,
      })),
    });
  } catch (error) {
    return res.status(500).send({
      message: "error",
      error: error.message,
    });
  }
};

module.exports = { index };

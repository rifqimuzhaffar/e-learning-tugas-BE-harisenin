const {
  matapelajaran: MataPelajaranModel,
  kelas: KelasModel,
  modepembelajaran: ModePembelajaranModel,
} = require("../models");

const index = async (req, res, next) => {
  try {
    const { id_kelas, id_mode_pembelajaran } = req.query;

    if (!id_kelas || !id_mode_pembelajaran) {
      return res.status(400).send({
        message: "error",
        error: "id_kelas and id_mode_pembelajaran are required",
      });
    }

    const mataPelajarans = await MataPelajaranModel.findAll({
      include: [
        {
          model: ModePembelajaranModel,
          as: "mode_pembelajaran",
          where: {
            id: id_mode_pembelajaran,
          },
          include: [
            {
              model: KelasModel,
              as: "kelas",
              where: {
                id: id_kelas,
              },
            },
          ],
        },
      ],
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

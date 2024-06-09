const {
  subbab: SubBabModel,
  material: MaterialModel,
  usermaterial: UserMaterialModel,
} = require("../models");

const index = async (req, res, next) => {
  try {
    const { id_bab } = req.query;

    if (!id_bab) {
      return res.status(400).send({
        message: "error",
        error: "id_bab is required",
      });
    }

    const subBabs = await SubBabModel.findAll({
      where: {
        id_bab,
      },
      attributes: ["id", "nama_sub_bab", "img_thumbnail", "is_gratis"],
    });

    const babTotalMaterials = await Promise.all(
      subBabs.map(async (subBab) => {
        const totalMaterials = await MaterialModel.count({
          where: {
            id_sub_bab: subBab.id,
          },
        });
        return totalMaterials;
      })
    );

    const babCompletedMaterials = await Promise.all(
      subBabs.map(async (subBab) => {
        const completedMaterials = await UserMaterialModel.count({
          where: {
            id_material: subBab.id,
            status: "completed",
          },
        });
        return completedMaterials;
      })
    );

    const babTotalMaterialsCount = babTotalMaterials.reduce(
      (acc, curr) => acc + curr,
      0
    );

    const babCompletedMaterialsCount = babCompletedMaterials.reduce(
      (acc, curr) => acc + curr,
      0
    );

    const babProgress =
      babTotalMaterialsCount > 0
        ? (babCompletedMaterialsCount / babTotalMaterialsCount) * 100
        : 0;

    const data = subBabs.map((subBab, index) => {
      const progress =
        babTotalMaterials[index] > 0
          ? (babCompletedMaterials[index] / babTotalMaterials[index]) * 100
          : 0;

      return {
        id: subBab.id,
        nama: subBab.nama_sub_bab,
        img_thumbnail: subBab.img_thumbnail,
        is_gratis: subBab.is_gratis,
        progress: progress.toFixed(2),
      };
    });

    return res.send({
      message: "success",
      babProgress: babProgress.toFixed(2),
      data: data,
    });
  } catch (error) {
    return res.status(500).send({
      message: "error",
      error: error.message,
    });
  }
};

module.exports = { index };

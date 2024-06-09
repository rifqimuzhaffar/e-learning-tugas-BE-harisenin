const {
  material: MaterialModel,
  tipematerial: TipeMaterialModel,
  usermaterial: UserMaterialModel,
} = require("../models");

const index = async (req, res, next) => {
  try {
    const { id_sub_bab } = req.query;

    if (!id_sub_bab) {
      return res.status(400).send({
        message: "error",
        error: "id_sub_bab is required",
      });
    }

    const materials = await MaterialModel.findAll({
      where: {
        id_sub_bab,
      },
      attributes: ["id", "nama_material", "img_thumbnail", "id_tipe_material"],
      include: [
        {
          model: TipeMaterialModel,
          as: "tipe_material",
          attributes: ["jenis_material"],
        },
      ],
    });

    const data = await Promise.all(
      materials.map(async (material) => {
        const userMaterial = await UserMaterialModel.findOne({
          where: {
            id_material: material.id,
            status: "completed",
          },
        });

        const isCompleted = !!userMaterial;

        let xp = 0;
        let gold = 0;

        switch (material.tipe_material.jenis_material) {
          case "Video":
            xp = 125;
            gold = 10;
            break;
          case "End Quiz":
            xp = 80;
            gold = 20;
            break;
          case "Single Quiz":
            xp = 50;
            gold = 50;
            break;
          case "Summary":
            xp = 30;
            gold = 30;
            break;
          default:
            break;
        }

        return {
          id: material.id,
          nama: material.nama_material,
          thumbnail: material.img_thumbnail,
          isCompleted,
          xp,
          gold,
        };
      })
    );

    return res.send({
      message: "success",
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

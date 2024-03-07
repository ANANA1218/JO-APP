import PaysService from '../service/paysService.js';

export const listPays = async (req, res) => {
  try {
    const pays = await PaysService.getAllWithMedalsAndEvents();
    res.render('../app/paysMedailleList.njk', { pays });
  } catch (error) {
    res.status(500).send("Une erreur s'est produite lors de la récupération des sports.");
  }
};
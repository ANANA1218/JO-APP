import EpreuveService from '../service/EpreuveService.js';

export const listEpreuves = async (req, res) => {
  try {
    const epreuves = await EpreuveService.getAllEpreuves();
    res.render('../app/epreuveList.njk', { epreuves });
  } catch (error) {
    // Gérer l'erreur, par exemple en renvoyant une réponse d'erreur
    res.status(500).send("Une erreur s'est produite lors de la récupération des epreuves.");
  }
};

export const getEpreuve = async (req, res) => {
  const { id } = req.params;
  try {
    const epreuve = await EpreuveService.getEpreuveById(id);
    res.render('../app/epreuveDetail.njk', { epreuve });
  } catch (error) {
    // Gérer l'erreur, par exemple en renvoyant une réponse d'erreur
    res.status(404).send("Le epreuve demandé n'a pas été trouvé.");
  }
};

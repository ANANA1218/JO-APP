import SportService from '../service/sportService.js';

export const listSports = async (req, res) => {
  try {
    const sports = await SportService.getAllSports();
    res.render('../app/sportList.njk', { sports });
  } catch (error) {
    // Gérer l'erreur, par exemple en renvoyant une réponse d'erreur
    res.status(500).send("Une erreur s'est produite lors de la récupération des sports.");
  }
};

export const getSport = async (req, res) => {
  const { id } = req.params;
  try {
    const sport = await SportService.getSportById(id);
    res.render('../app/sportDetail.njk', { sport });
  } catch (error) {
    // Gérer l'erreur, par exemple en renvoyant une réponse d'erreur
    res.status(404).send("Le sport demandé n'a pas été trouvé.");
  }
};
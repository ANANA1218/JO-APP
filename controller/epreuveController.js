import EpreuveService from '../service/EpreuveService.js';

export const listEpreuves = async (req, res) => {
  try {
    const epreuves = await EpreuveService.getAllEpreuves();
    res.render('../app/epreuveList.njk', { epreuves });
  } catch (error) {
 
    res.status(500).send("Une erreur s'est produite lors de la récupération des epreuves.");
  }
};

export const getEpreuve = async (req, res) => {
  const { id } = req.params;
  try {
    const epreuve = await EpreuveService.getEpreuveById(id);
    res.render('../app/epreuveDetail.njk', { epreuve });
  } catch (error) {
   
    res.status(404).send("Le epreuve demandé n'a pas été trouvé.");
  }
};

export const getCreateEpreuveForm = (req, res) => {
  res.render('../app/createEpreuveForm.njk');
};

export const createEpreuve = (req, res) => {
  const { nom, sport_id } = req.body; 
  const newEpreuve = { nom, sport_id }; 
  EpreuveService.createEpreuve(newEpreuve) 
    .then(() => {
      res.redirect('/epreuves'); 
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la création de l\'épreuve.');
    });
};

export const getUpdateEpreuveForm = (req, res) => {
  const { id } = req.params;
  EpreuveService.getEpreuveById(id)
    .then((epreuve) => {
      res.render('../app/updateEpreuveForm.njk', { epreuve });
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération de l\'épreuve pour la mise à jour :', error);
      res.status(500).send('Erreur lors de la récupération de l\'épreuve pour la mise à jour');
    });
};

export const updateEpreuve = (req, res) => {
  const { id } = req.params;
  const { nom, sport_id } = req.body; 

  if (!nom || !sport_id) {
    return res.status(400).send('Le nom et l\'identifiant du sport sont requis');
  }

  EpreuveService.updateEpreuve(id, { nom, sport_id }) 
    .then(() => {
      res.redirect('/epreuves'); 
    })
    .catch((error) => {
      console.error('Erreur lors de la mise à jour de l\'épreuve :', error);
      res.status(500).send('Erreur lors de la mise à jour de l\'épreuve');
    });
};


export const deleteEpreuve = (req, res) => {
  const { id } = req.params;

  EpreuveService.deleteEpreuve(id) 
    .then(() => {
      res.redirect('/epreuves'); 
    })
    .catch((error) => {
      console.error('Erreur lors de la suppression de l\'épreuve :', error);
      res.status(500).send('Erreur lors de la suppression de l\'épreuve');
    });
};


export const listEpreuvesPublic = async (req, res) => {
  try {
    const epreuves = await EpreuveService.getAllEpreuvesPublic();
    res.render('../app/public/epreuveListPublic.njk', { epreuves });
  } catch (error) {
 
    res.status(500).send("Une erreur s'est produite lors de la récupération des epreuves.");
  }
};

export const getEpreuvePublic = async (req, res) => {
  const { id } = req.params;
  try {
    const epreuve = await EpreuveService.getEpreuveByIdPublic(id);
    res.render('../app/public/epreuveDetailPublic.njk', { epreuve });
  } catch (error) {
   
    res.status(404).send("Le epreuve demandé n'a pas été trouvé.");
  }
};
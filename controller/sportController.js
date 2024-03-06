import SportService from '../service/sportService.js';

export const listSports = async (req, res) => {
  try {
    const sports = await SportService.getAllSports();
    res.render('../app/sportList.njk', { sports });
  } catch (error) {
    res.status(500).send("Une erreur s'est produite lors de la récupération des sports.");
  }
};

export const getSport = async (req, res) => {
  const { id } = req.params;
  try {
    const sport = await SportService.getSportById(id);
    res.render('../app/sportDetail.njk', { sport });
  } catch (error) {
    res.status(404).send("Le sport demandé n'a pas été trouvé.");
  }
};


export const getCreateSportForm = (req, res) => {
  res.render('../app/createSportForm.njk');
};


export const createSport = (req, res) => {
 
  const { nom } = req.body; 
 console.log(req.body); 
  const newSport = { nom };
  console.log(newSport); 

  SportService.createSport(newSport)
    .then(() => {
      res.redirect('/sports');
    })
    .catch((err) => {
  
      console.error(err);
      res.status(500).send('Erreur lors de la création du sport.');
    });
};



export const getUpdateSportForm = (req, res) => {
  const { id } = req.params;
  SportService.getSportById(id)
    .then((sport) => {
      res.render('../app/updateSportForm.njk', { sport });
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération du sport pour la mise à jour :', error);
      res.status(500).send('Erreur lors de la récupération du sport pour la mise à jour');
    });
};


export const updateSport = (req, res) => {
  const { id } = req.params;
  const { name } = req.body; 


  if (!name) {
    return res.status(400).send('Le nom du sport est requis');
  }


  SportService.updateSport(id, { nom: name })
    .then(() => {
      res.redirect('/sports'); 
    })
    .catch((error) => {
      console.error('Erreur lors de la mise à jour du sport :', error);
      res.status(500).send('Erreur lors de la mise à jour du sport');
    });
};

export const deleteSport = (req, res) => {
  const { id } = req.params;
  
  SportService.deleteSport(id)
    .then(() => {
      res.redirect('/sports'); 
    })
    .catch((error) => {
      console.error('Erreur lors de la suppression du sport :', error);
      res.status(500).send('Erreur lors de la suppression du sport');
    });
};
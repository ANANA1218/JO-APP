import AthleteService from '../service/athleteService.js';

export const listAthletes = async (req, res) => {
  try {
    const athletes = await AthleteService.getAllAthletes();
    res.render('../app/athleteList.njk', { athletes });
  } catch (error) {
 
    res.status(500).send("Une erreur s'est produite lors de la récupération des athletes.");
  }
};

export const getAthlete = async (req, res) => {
  const { id } = req.params;
  try {
    const athlete = await AthleteService.getAthleteById(id);
    res.render('../app/athleteDetail.njk', { athlete });
  } catch (error) {
   
    res.status(404).send("Le athlete demandé n'a pas été trouvé.");
  }
};

export const getCreateAthleteForm = (req, res) => {
  res.render('../app/createAthleteForm.njk');
};

export const createAthlete = (req, res) => {
  const { nom,prenom, pays, medaille_id, epreuve_id } = req.body; 
  const newAthlete = { nom, prenom, pays, medaille_id, epreuve_id }; 
  AthleteService.createAthlete(newAthlete) 
    .then(() => {
      res.redirect('/athletes'); 
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Erreur lors de la création de l\'épreuve.');
    });
};

export const getUpdateAthleteForm = (req, res) => {
  const { id } = req.params;
  AthleteService.getAthleteById(id)
    .then((athlete) => {
      res.render('../app/updateAthleteForm.njk', { athlete });
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération de l\'épreuve pour la mise à jour :', error);
      res.status(500).send('Erreur lors de la récupération de l\'épreuve pour la mise à jour');
    });
};

export const updateAthlete = (req, res) => {
    const { id } = req.params;
    const { nom, prenom, pays, medaille_id, epreuve_id } = req.body; 
  
    if (!nom || !prenom || !pays || !medaille_id || !epreuve_id) {
      return res.status(400).send('Le nom, le prénom, le pays, l\'identifiant de la médaille et l\'identifiant de l\'épreuve sont requis');
    }
  
    AthleteService.updateAthlete(id, { nom, prenom, pays, medaille_id, epreuve_id }) 
      .then(() => {
        res.redirect('/athletes'); 
      })
      .catch((error) => {
        console.error('Erreur lors de la mise à jour de l\'athlète :', error);
        res.status(500).send('Erreur lors de la mise à jour de l\'athlète');
      });
  };
  


export const deleteAthlete = (req, res) => {
  const { id } = req.params;

  AthleteService.deleteAthlete(id) 
    .then(() => {
      res.redirect('/athletes'); 
    })
    .catch((error) => {
      console.error('Erreur lors de la suppression de l\'épreuve :', error);
      res.status(500).send('Erreur lors de la suppression de l\'épreuve');
    });
};



export const listAthletesMedail = async (req, res) => {
  try {
    const athletes = await AthleteService.getAllWithMedalsAndEvents();
    res.render('../app/athleteMedailleList.njk', { athletes });
  } catch (error) {
    res.status(500).send("Une erreur s'est produite lors de la récupération des sports.");
  }
};


export const listAthletesMedailPublic = async (req, res) => {
  try {
    const athletes = await AthleteService.getAllWithMedalsAndEventsPublic();
    res.render('../app/public/athleteMedailleListPublic.njk', { athletes });
  } catch (error) {
    res.status(500).send("Une erreur s'est produite lors de la récupération des sports.");
  }
};

export const listAthletesPublic = async (req, res) => {
  try {
    const athletes = await AthleteService.getAllAthletesPublic();
    res.render('../app/public/athleteListPublic.njk', { athletes });
  } catch (error) {
 
    res.status(500).send("Une erreur s'est produite lors de la récupération des athletes.");
  }
};

export const getAthletePublic = async (req, res) => {
  const { id } = req.params;
  try {
    const athlete = await AthleteService.getAthleteByIdPublic(id);
    res.render('../app/public/athleteDetailPublic.njk', { athlete });
  } catch (error) {
   
    res.status(404).send("Le athlete demandé n'a pas été trouvé.");
  }
};
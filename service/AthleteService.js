import AthleteRepository from '../repository/athleteRepository.js';

const AthleteService = {
  getAllAthletes: () => AthleteRepository.getAll(),
  getAthleteById: (id) => AthleteRepository.getById(id),
  createAthlete: (athlete) => AthleteRepository.create(athlete),
  updateAthlete: (id, athleteData) => AthleteRepository.update(id, athleteData),
  deleteAthlete: (id) => AthleteRepository.delete(id),
  getAllWithMedalsAndEvents: () => AthleteRepository.getAllWithMedalsAndEvents(),

  getAllAthletesPublic: () => AthleteRepository.getAllPublic(),
  getAthleteByIdPublic: (id) => AthleteRepository.getByIdPublic(id),
  getAllWithMedalsAndEventsPublic: () => AthleteRepository.getAllWithMedalsAndEventsPublic(),
};


export default AthleteService;

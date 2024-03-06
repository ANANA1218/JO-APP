import SportRepository from '../repository/sportRepository.js';

const SportService = {
  getAllSports: () => SportRepository.getAll(),
  getSportById: (id) => SportRepository.getById(id),
  createSport: (sport) => SportRepository.create(sport),
  updateSport: (id, sportData) => SportRepository.update(id, sportData),
  deleteSport: (id) => SportRepository.delete(id),
};


export default SportService;

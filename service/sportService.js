import SportRepository from '../repository/sportRepository.js';

const SportService = {
  getAllSports: () => SportRepository.getAll(),
  getSportById: (id) => SportRepository.getById(id),
};

export default SportService;

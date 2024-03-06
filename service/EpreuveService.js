import EpreuveRepository from '../repository/epreuveRepository.js';

const EpreuveService = {
  getAllEpreuves: () => EpreuveRepository.getAll(),
  getEpreuveById: (id) => EpreuveRepository.getById(id),
};

export default EpreuveService;

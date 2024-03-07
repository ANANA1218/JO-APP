import PaysRepository from '../repository/paysRepository.js';

const PaysService = {
  getAllWithMedalsAndEvents: () => PaysRepository.getAllWithMedalsAndEvents()
};

export default PaysService;

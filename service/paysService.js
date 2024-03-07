import PaysRepository from '../repository/paysRepository.js';

const PaysService = {
  getAllWithMedalsAndEvents: () => PaysRepository.getAllWithMedalsAndEvents(),

  getAllWithMedalsAndEventPublic: () => PaysRepository.getAllWithMedalsAndEventsPublic()
};

export default PaysService;

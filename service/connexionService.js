import ConnexionRepository from '../repository/connexionRepository.js';


const ConnexionService = {
  is_email_and_password_valid: (data) => ConnexionRepository.is_email_and_password_valid(data), // Utilisez connexionRepository
  insert_user: (data) => ConnexionRepository.insert_user(data), // Utilisez connexionRepository
  is_email_already_exist: (data) => ConnexionRepository.is_email_already_exist(data), // Utilisez connexionRepository
  getUserByEmail:(email) => ConnexionRepository.getUserByEmail(email), 

};

export default ConnexionService;


import db_connection from '../service/db_connection.js';

const AthleteRepository = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db_connection().then(pool => {
        pool.query('SELECT * FROM athletes', (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
            console.log(results);
          }
        });
      }).catch(err => reject(err));
    });
  },

  getById: (id) => {
    return new Promise((resolve, reject) => {
      db_connection().then(pool => {
        pool.query('SELECT * FROM athletes WHERE id = ?', [id], (err, results) => {
          if (err) {
            reject(err);
          } else {
            if (results.length === 0) {
              reject(new Error('athlete not found'));
            } else {
              resolve(results[0]);
            }
          }
        });
      }).catch(err => reject(err));
    });
  },

  create: (athlete) => {
    return new Promise((resolve, reject) => {
      db_connection().then(pool => {
        pool.query('INSERT INTO athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES (?, ?, ?, ?, ?)', [athlete.nom,athlete.prenom,athlete.pays,athlete.medaille_id,athlete.epreuve_id], (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results.insertId);
            console.log(results.insertId);
          }
        });
      }).catch(err => reject(err));
    });
  },
  
  update: (id, athleteData) => {
    return new Promise((resolve, reject) => {
      db_connection().then(pool => {
        pool.query('UPDATE athletes SET ? WHERE id = ?', [athleteData, id], (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      }).catch(err => reject(err));
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      db_connection().then(pool => {
        pool.query('DELETE FROM athletes WHERE id = ?', [id], (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      }).catch(err => reject(err));
    });
  }
};

export default AthleteRepository;

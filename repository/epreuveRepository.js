
import db_connection from '../service/db_connection.js';

const epreuveRepository = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db_connection().then(pool => {
        pool.query('SELECT * FROM epreuves', (err, results) => {
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
        pool.query('SELECT * FROM epreuves WHERE id = ?', [id], (err, results) => {
          if (err) {
            reject(err);
          } else {
            if (results.length === 0) {
              reject(new Error('epreuves not found'));
            } else {
              resolve(results[0]);
            }
          }
        });
      }).catch(err => reject(err));
    });
  },

  create: (epreuve) => {
    return new Promise((resolve, reject) => {
      db_connection().then(pool => {
        pool.query('INSERT INTO epreuves SET ?', epreuve, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results.insertId);
          }
        });
      }).catch(err => reject(err));
    });
  },

  update: (id, epreuveData) => {
    return new Promise((resolve, reject) => {
      db_connection().then(pool => {
        pool.query('UPDATE epreuves SET ? WHERE id = ?', [epreuveData, id], (err) => {
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
        pool.query('DELETE FROM epreuves WHERE id = ?', [id], (err) => {
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

export default SportRepository;

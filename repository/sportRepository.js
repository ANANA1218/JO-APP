
import db_connection from '../service/db_connection.js';

const SportRepository = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db_connection().then(pool => {
        pool.query('SELECT * FROM sports', (err, results) => {
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
        pool.query('SELECT * FROM sports WHERE id = ?', [id], (err, results) => {
          if (err) {
            reject(err);
          } else {
            if (results.length === 0) {
              reject(new Error('Sport not found'));
            } else {
              resolve(results[0]);
            }
          }
        });
      }).catch(err => reject(err));
    });
  },

  create: (sport) => {
    return new Promise((resolve, reject) => {
      db_connection().then(pool => {
        pool.query('INSERT INTO sports (nom) VALUES (?)', [sport.nom], (err, results) => {
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
  
  update: (id, sportData) => {
    return new Promise((resolve, reject) => {
      db_connection().then(pool => {
        pool.query('UPDATE sports SET ? WHERE id = ?', [sportData, id], (err) => {
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
        pool.query('DELETE FROM sports WHERE id = ?', [id], (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      }).catch(err => reject(err));
    });
  },

  getAllPublic: () => {
    return new Promise((resolve, reject) => {
      db_connection().then(pool => {
        pool.query('SELECT * FROM sports', (err, results) => {
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

  getByIdPublic: (id) => {
    return new Promise((resolve, reject) => {
      db_connection().then(pool => {
        pool.query('SELECT * FROM sports WHERE id = ?', [id], (err, results) => {
          if (err) {
            reject(err);
          } else {
            if (results.length === 0) {
              reject(new Error('Sport not found'));
            } else {
              resolve(results[0]);
            }
          }
        });
      }).catch(err => reject(err));
    });
  },
};

export default SportRepository;

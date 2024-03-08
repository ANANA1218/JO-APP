import db_connection from '../service/db_connection.js';

const connexionRepository = {
  // is_email_and_password_valid: (data) => {
  //   return new Promise((resolve, reject) => {
  //     db_connection().then(db => {
  //       db.query('SELECT COUNT(id) AS count FROM jo-app.users WHERE email = :email AND password = :password', data, (err, results) => {
  //         if (err) {
  //           reject(err);
  //         } else {
  //           resolve(results[0].count > 0);
  //         }
  //       });
  //     }).catch(error => reject(error));
  //   });
  // },
  is_email_and_password_valid: (data) => {
    return new Promise((resolve, reject) => {
        const { email, password } = data; // Destructuration des données
        db_connection().then(db => {
            db.query('SELECT COUNT(id) AS count FROM `jo-app`.users WHERE email = ? AND password = ?', [email, password], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results[0].count > 0);
                }
            });
        }).catch(error => reject(error));
    });
},

  insert_user: (data) => {
    return new Promise((resolve, reject) => {
      db_connection().then(db => {
        db.query('INSERT INTO jo-app.users (email, nom, prenom, pays, role, password ) VALUES (:email, :nom, :prenom, :pays, :role, :password )', data, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      }).catch(error => reject(error));
    });
  },

  is_email_already_exist: (data) => {
    return new Promise((resolve, reject) => {
      db_connection().then(db => {
        db.query('SELECT COUNT(id) AS count FROM jo-app.users WHERE email = :email', data, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results[0].count > 0);
          }
        });
      }).catch(error => reject(error));
    });
  },

getUserByEmail: (email) => {
  return new Promise((resolve, reject) => {
    db_connection().then(pool => {
      pool.query('SELECT * FROM Users WHERE email = ?', [email], (err, results) => {
        if (err) {
          reject(err);
        } else {
          if (results.length > 0) {
            resolve(results[0]); // Renvoyer le premier utilisateur trouvé avec cet email
          } else {
            resolve(null); // Aucun utilisateur trouvé avec cet email
          }
        }
      });
    }).catch(err => reject(err));
  });
}
};
export default connexionRepository;

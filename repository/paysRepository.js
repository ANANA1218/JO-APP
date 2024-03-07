import db_connection from '../service/db_connection.js';

const PaysRepository = {

getAllWithMedalsAndEvents: () => {
  return new Promise((resolve, reject) => {
    db_connection().then(pool => {
      pool.query('SELECT Pays.nom, Medailles.nom AS medaille, Epreuves.nom AS epreuve FROM Pays INNER JOIN Medailles ON Pays.medaille_id = Medailles.id INNER JOIN Epreuves ON Pays.epreuve_id = Epreuves.id', (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
          console.log(results);
        }
      });
    }).catch(err => reject(err));
  });
}

};
export default PaysRepository;

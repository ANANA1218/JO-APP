import ConnexionService from '../service/connexionService.js';


const connexion = (req, res) => {
    const newLocal_1 = '../app/connexion/connexion.njk';
    const newLocal = newLocal_1;
    return res.render(newLocal, {
        'type_url_api': 'login/',
        'user': req.session.user
    });
};

const inscription = (req, res) => {
    return res.render('../app/connexion/inscription.njk', {
        'type_url_api': 'inscription/',
        'user': req.session.user
    });
};

const inscriptionPost = async (req, res) => {
    try {
        const isExist = await ConnexionService.is_email_already_exist(req.body);
        if (isExist) {
            return res.status(400).json({
                status: 400,
                message: 'Email already exists'
            });
        }
        await ConnexionService.insert_user(req.body); 
        return res.status(201).json({
            status: 201,
            message: 'Created'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 500,
            message: 'Internal Server Error'
        });
    }
};

const login = async (req, res) => {
    try {
        const isValid = await ConnexionService.is_email_and_password_valid(req.body);
        if (!isValid) {
            return res.status(401).json({
                status: 401,
                message: 'Unauthorized: Incorrect email or password'
            });
        }

        // Récupérer l'utilisateur à partir de la base de données en utilisant l'email
        const user = await ConnexionService.getUserByEmail(req.body.email);
        if (!user) {
            return res.status(401).json({
                status: 401,
                message: 'Unauthorized: User not found'
            });
        }

        req.session.regenerate(function (err) {
            if (err) {
                return res.status(400).json({
                    status: 400,
                    message: 'Bad Request'
                });
            }

            req.session.user = user; // Stocker les informations de l'utilisateur dans la session

            req.session.save(function (err) {
                if (err) {
                    return res.status(400).json({
                        status: 400,
                        message: 'Bad Request'
                    });
                }

                // Redirection vers différentes pages en fonction du rôle de l'utilisateur
                if (req.session.user.role === 'admin') {
                    res.redirect('/sports');
                } else if (req.session.user.role === 'public') {
                    res.redirect('/public/sports');
                } else {
                    res.redirect('/'); // Rediriger vers une page par défaut si le rôle n'est pas défini
                }
            });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 500,
            message: 'Internal Server Error'
        });
    }
};





// const login = async (req, res) => {
//     try {
//         const isValid = await ConnexionService.is_email_and_password_valid(req.body);
//         if (!isValid) {
//             return res.status(401).json({
//                 status: 401,
//                 message: 'Unauthorized: Incorrect email or password'
//             });
//         }

//         req.session.regenerate(function (err) {
//             if (err) {
//                 return res.status(400).json({
//                     status: 400,
//                     message: 'Bad Request'
//                 });
//             }
//             req.session.user = req.body.email;

//             req.session.save(function (err) {
//                 if (err) {
//                     return res.status(400).json({
//                         status: 400,
//                         message: 'Bad Request'
//                     });
//                 }
//                 // Redirection vers "/sports" après une authentification réussie
//                 res.redirect('/sports');
//             });
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({
//             status: 500,
//             message: 'Internal Server Error'
//         });
//     }
// };




// const login = (req, res) => {
//     req.session.regenerate(function (err) {
//         if (err) {
//             return res.status(400).json({
//                 status: 400,
//                 message: 'Bad Request'
//             });
//         }
//         req.session.user = req.body.email;

//         req.session.save(function (err) {
//             if (err) {
//                 return res.status(400).json({
//                     status: 400,
//                     message: 'Bad Request'
//                 });
//             }
//             // Redirection vers "/sports" après une authentification réussie
//             res.redirect('/sports');
//         });
//     });
// };



// const login = (req, res) => {
//     req.session.regenerate(function (err) {
//         if (err) {
//             return res.status(400).json({
//                 status: 400,
//                 message: 'Bad Request'
//             });
//         }
//         req.session.user = req.body.email;

//         req.session.save(function (err) {
//             if (err) {
//                 return res.status(400).json({
//                     status: 400,
//                     message: 'Bad Request'
//                 });
//             }
//         })
//         return res.status(301).json({
//             status: 301,
//             message: 'Redirect',
//             url: `/sports`
//         });
//     })
// }



// const login = async (req, res) => {
//     try {
//         const isValid = await  ConnexionService.is_email_and_password_valid(req.body);
//         if (!isValid) {
//             return res.status(401).json({
//                 status: 401,
//                 message: 'Unauthorized'
//             });
//         }

       
//         const userRole = userRole(req.body.email); // Vous devez implémenter cette fonction

//         // En fonction du rôle de l'utilisateur, redirigez-le vers la page appropriée
//         if (userRole === 'admin') {
//             // Si l'utilisateur est un administrateur, redirigez-le vers la page admin
//             return res.status(200).json({
//                 status: 200,
//                 message: 'Logged in as admin',
//                 redirect: '/sports'
//             });
//         } else {
//             // Si l'utilisateur n'est pas un administrateur, redirigez-le vers une autre page, par exemple la page d'accueil
//             return res.status(200).json({
//                 status: 200,
//                 message: 'Logged in successfully',
//                 redirect: '/public/sports' // Définissez la route appropriée pour la page d'accueil
//             });
//         }
//     } catch (error) {
//         return res.status(500).json({
//             status: 500,
//             message: 'Internal Server Error'
//         });
//     }
// };


const logout = (req, res) => {
    req.session.user = null;
    return res.redirect('/');
};

export { connexion, inscription, inscriptionPost, login, logout };

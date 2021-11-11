const express = require('express');
const router = express.Router();

router.get('/', (requete, reponse) => reponse.send('vous êtes dans /users'));
router.get('/toto', (requete, reponse) => reponse.send('vous êtes dans /users/toto'));
router.get('/tous', (requete, reponse) => {
    let usagers =  [{
        nom: 'Bob Larue',
        login: 'larueB',
        password: 'BLarueB',
        roles: ['normal']
        },
        {
            nom: 'Paul Larue',
            login: 'larueP',
            password: 'PLarueP',
            roles: ['admin', 'normal']
        },
        {
            nom: 'Steph Côté',
            login: 'coteS',
            password: 'SCoteS',
            roles: ['cms', 'normal']
        },
        {
            nom: 'Joseph Meilleur',
            login: 'meilleurJ',
            password: 'JMeilleurJ',
            roles: ['admin', 'cms', 'normal']
        },
        ];
    reponse.render('tous', {
      usagers: usagers  
    });

});

module.exports = router;
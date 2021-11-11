const { Router } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

// mes routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

// voici mes vues ( VIEWS )
app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(PORT, console.log(`Service Web démarré sur le port ${PORT}`));


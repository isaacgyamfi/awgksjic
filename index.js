const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
require('dotenv').config();

const app = express();

const dbConnection = mongoose.createConnection(process.env.MONOGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(
  session({
    store: new MongoStore({
      mongooseConnection: dbConnection,
      collection: 'sessions',
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

const homeRoutes = require('./src/routes/home');
const memberRoutes = require('./src/routes/member');
const adminRoutes = require('./src/routes/admin');

const port = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoutes);
app.use(memberRoutes);
app.use(adminRoutes);
app.use((req, res) => {
  res.status(404).redirect('/login');
});

dbConnection
  .then((result) => {
    console.log('Database connected');
    app.listen(port, () => {
      console.log(`App is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));

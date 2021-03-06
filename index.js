const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

require('dotenv').config();

const app = express();

const homeRoutes = require('./src/routes/home');
const memberRoutes = require('./src/routes/member');
const adminRoutes = require('./src/routes/admin');
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));

const store = new MongoDBStore({
  uri: process.env.MONOGO_DB_URL,
  collection: 'sessions',
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
  }),
);

app.use(homeRoutes);
app.use(memberRoutes);
app.use(adminRoutes);

mongoose
  .connect(process.env.MONOGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`App is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));

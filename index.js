const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
require('dotenv').config();

const app = express();

const sessionStore = new MySQLStore({
  host: 'localhost:3306',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  schema: {
    tableName: 'session',
    columNames: {
      session_id: 'session_id',
      expires: 'expires',
      data: 'data',
    },
  },
  port: 3306,
});

const homeRoutes = require('./src/routes/home');
const memberRoutes = require('./src/routes/member');
const adminRoutes = require('./src/routes/admin');
const port = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    key: 'session_key',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    clearExpired: true,
  }),
);

app.use(homeRoutes);
app.use(memberRoutes);
app.use(adminRoutes);
app.use((req, res) => {
  res.status(404).redirect('/login');
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});

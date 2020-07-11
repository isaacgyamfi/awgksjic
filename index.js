const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const app = express();

const sessionStore = new MySQLStore({
  host: 'localhost',
  user: 'awgksjic_awgksjic',
  password: 'Cudjoe_233',
  database: 'awgksjic_awgksjic',
  schema: {
    tableName: 'session',
    columNames: {
      session_id: 'session_id',
      expires: 'expires',
      data: 'data',
    },
  },
});

const homeRoutes = require('./src/routes/home');
const memberRoutes = require('./src/routes/member');
const adminRoutes = require('./src/routes/admin');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    key: 'session_key',
    secret: 'somesecretyouliketo',
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

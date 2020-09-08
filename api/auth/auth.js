const express = require('express');
const session = require('express-session');
const { ExpressOIDC } = require('@okta/oidc-middleware');
require('dotenv').config()

const router = express();
const oidc = new ExpressOIDC({
  issuer: process.env.OKTA_URL_ISSUER,
  client_id: process.env.OKTA_CLIENT_ID,
  client_secret: process.env.OKTA_CLIENT_SECRET,
  appBaseUrl: process.env.BASE_URL,
  loginRedirectUri: `${process.env.BASE_URL}/callback`,
  scope: 'openid profile',
  routes: {
    loginCallback: {
      path: '/callback'
    },
  }
});

router.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: false
}));
router.use(oidc.router);

router.get('/', (req, res) => {
  if (req.userContext) {
    res.send(`
      Hello ${req.userContext.userinfo.name}!
      <form method="POST" action="/logout">
        <button type="submit">Logout</button>
      </form>
    `);
  } else {
    res.send('Please <a href="/login">login</a>');
  }
});

router.get('/protected', oidc.ensureAuthenticated(), (req, res) => {
  res.send('Top Secret');
});

oidc.on('ready', () => {
  router.listen(3000, () => console.log('Started'));
});

oidc.on('error', err => {
  // An error occurred while setting up OIDC, during token revokation, or during post-logout handling
  console.log('Unable to configure ExpressOIDC', err);
});

module.exports = router
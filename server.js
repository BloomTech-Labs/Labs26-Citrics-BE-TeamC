const config_result = require('dotenv').config()
const { app, oidc } = require('./api/app.js');
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV != 'production' && config_result.error) {
  throw config_result.error;
}

oidc.on('ready', () => {
  app.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
});

oidc.on('error', err => {
  // An error occurred while setting up OIDC, during token revokation, or during post-logout handling
  console.log('Unable to configure ExpressOIDC', err);
});

app.timeout = 60 * 10 * 1000;

const path = require('path');
require('dotenv').config({ path: `${path.dirname(__dirname)}/.env` });
const { NODE_ENV = 'development', PORT } = process.env;
const app = require('./app');

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} running ${NODE_ENV} environment`);
});

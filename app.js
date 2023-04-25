import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

import rootRouter from './routes/index.js'
import sequelize from './config/sequelize.js';

const PORT = process.env.PORT || 1999;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(rootRouter);

const initApp = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

initApp();



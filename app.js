
import express from 'express';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import passport from 'passport';
import bodyParser from 'body-parser';
import cors from 'cors';
import httpLogger from './utils/logging/httpLogger.js';

import setRoutes from './routes/index.js';

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

app.use(compression());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('combined'));
app.use(httpLogger);

setRoutes(app);

export default app;

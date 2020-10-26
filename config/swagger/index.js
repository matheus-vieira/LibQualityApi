import expressSwaggerGen from 'express-swagger-generator';

import app from '../../app.js';
import options from './options.js'

const configureSwagger = () => {
    const expressSwagger = expressSwaggerGen(app);
    expressSwagger(options);
};

export default configureSwagger;
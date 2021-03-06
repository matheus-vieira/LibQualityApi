const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'LibQuality API with Swagger',
      version: '1.0.0',
      description:
        'Measure the quality of famous open source projects like React (https://github.com/facebook/react), Angular (https://github.com/angular/angular), Vue (https://github.com/vuejs/vue) among others',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Matheus Costa Vieira',
        url: 'https://matheus-vieira.github.io/',
        email: 'matheus.costa.vieira@gmail.com',
      },
    },
    host: 'localhost:3000',
    basePath: '/api/v1',
    produces: ['application/json', 'application/xml'],
    schemes: ['http', 'https'],
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
      },
    ],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: '',
      },
    },
    basedir: process.env.PWD,
    files: ['./routes/**/*.js', './repository/**/*.js'],
  },
  apis: ['./routes/**/*.js', './repository/**/*.js'],
};

export default options;

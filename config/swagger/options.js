const options = {
    swaggerDefinition: {
        info: {
            description: 'LibQuality API',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
		securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: process.env.PWD, //app absolute path
    files: ['./routes/**/*.js'] //Path to the API handle folder
};

export default options;
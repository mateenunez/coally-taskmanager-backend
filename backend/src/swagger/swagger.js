const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Task Manager',
            version: '1.0.0',
            description: 'API for Task Manager',
            contact: {
                name: 'Mateo Nuñez'
            },
            servers: [
                {
                    url: 'http://localhost:3000',
                    description: 'Local server'
                }
            ]
        }
    },
    apis: ['./routes/*.js']
};

const specs = swaggerJsdoc(options);

module.exports = {specs};
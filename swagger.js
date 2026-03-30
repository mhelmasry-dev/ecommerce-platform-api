const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ecommerce API - Mohammed Elmasry',
      version: '1.0.0',
    },
    servers: [
      { url: 'http://localhost:3000', description: 'Local' },
      { url: 'https://ecommerce-platform-api-tau.vercel.app', description: 'Production' }
    ],
    components: {
      securitySchemes: {
        bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }
      }
    }
  },
  apis: ['./index.js', './src/modules/**/*.routes.js'], 
};

module.exports = swaggerJsdoc(options);
import swaggerJsdoc from "swagger-jsdoc";
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ecommerce API - Mohammed Elmasry",
      version: "1.0.0",
      description: "API Documentation for E-commerce Platform",
    },
    servers: [
      { url: "http://localhost:5000", description: "Local" },
      {
        url: "https://ecommerce-platform-api-tau.vercel.app",
        description: "Production",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
 apis: ["./src/modules/**/*.router.js"],
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;

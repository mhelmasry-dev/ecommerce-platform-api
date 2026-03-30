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
  apis: [
    "./src/modules/auth/auth.router.js",
    "./src/modules/cart/cart.router.js",
    "./src/modules/coupon/coupon.router.js",
    "./src/modules/order/order.router.js",
     "./src/modules/brand/brand.router.js",
     "./src/modules/product/product.router.js",
     "./src/modules/subcategory/subcategory.router.js",
      "./src/modules/category/category.router.js",
       "./src/modules/user/user.router.js",
  ],
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;

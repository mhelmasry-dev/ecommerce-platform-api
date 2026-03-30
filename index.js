import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bootstrap from "./index.router.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";
const app = express();
app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerSpec));
const port = process.env.PORT || 5000;
bootstrap(app, express);
app.listen(port, () => {
  console.log(`app running in port ----------- ${port}`);
});

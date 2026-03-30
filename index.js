import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bootstrap from "./index.router.js";
const app = express();
const port = process.env.PORT || 5000;
bootstrap(app, express);
app.listen(port || process.env.PORT, () => {
  console.log(`app runing in port ----------- ${port}`);
});

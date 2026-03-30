import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bootstrap from "./index.router.js";
import swaggerSpec from "./swagger.js";

const app = express();

// Swagger UI
app.get("/api-docs.json", (req, res) => {
  res.json(swaggerSpec);
});

app.get("/api-docs", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>API Docs</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/swagger-ui-dist/swagger-ui.css">
      </head>
      <body>
        <div id="swagger-ui"></div>
        <script src="https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js"></script>
        <script>
          SwaggerUIBundle({
            url: "/api-docs.json",
            dom_id: '#swagger-ui',
            presets: [SwaggerUIBundle.presets.apis, SwaggerUIBundle.SwaggerUIStandalonePreset],
            layout: "BaseLayout"
          })
        </script>
      </body>
    </html>
  `);
});

const port = process.env.PORT || 5000;
bootstrap(app, express);
app.listen(port, () => {
  console.log(`app running in port ----------- ${port}`);
});
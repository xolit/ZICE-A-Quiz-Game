require("dotenv").config();
const express = require("express");
const Config = require("./config");
const CORS = require("./services/cors");

const app = express();
app.use(express.json());
app.use(CORS);

// Routes
app.use(`/api/${Config.API_VERSION}`, require("./routes/server-routes"));

app.listen(Config.PORT, () => {
  console.log(`Server is running on port ${Config.PORT}`);
});

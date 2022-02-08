const express = require("express");
const cors = require("cors");
const houses = require("./controller");

const app = express();
app.use(express.json());
app.use(cors());
const port = 4004;

//Endpoints
app.get("/api/houses", houses.getHouses);
app.post("/api/houses/", houses.createHouses);
app.put("/api/houses/:id", houses.updateHouses);
app.delete("/api/houses/:id", houses.deleteHouses);

app.listen(port, () => {
  console.log(`Port ${port} is working`);
});

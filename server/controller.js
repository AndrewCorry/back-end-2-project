const houses = require("./db.json");
let gId = 4;

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(houses);
  },

  deleteHouses: (req, res) => {
    let i = houses.findIndex((elem) => elem.id === +req.params.id);
    houses.splice(i, 1);
    res.status(200).send(houses);
    gId--
  },

  createHouses: (req, res) => {
    let { address, price, imageURL } = req.body;
    let newHouse = { id: gId, address, price: +price, imageURL };
    houses.push(newHouse);
    res.status(200).send(houses);
    gId++;
  },

  updateHouses: (req, res) => {
    let { id } = req.params;
    let { type } = req.body; //type is a string that is either 'plus' or 'minus'
    let index = houses.findIndex((elem) => elem.id === +id);
    if (houses[index].price === 10000 && type === "minus") {
      res.status(400).send("Cannot set price lower");
    } else if (type === "plus") {
      houses[index].price += 10000;
      res.status(200).send(houses);
    } else if (type === "minus") {
      houses[index].price -= 10000;
      res.status(200).send(houses);
    }
  }
};

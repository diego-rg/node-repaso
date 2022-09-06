const fs = require("fs");
const path = require("path");
const main = require("require-main-filename")();

const products = [];

//clase producto para crear objetos producto
//static permite chamar ao metodo dende a propia clase
module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    const dataPath = path.join(path.dirname(main), "data", "products.json");
    fs.readFile(dataPath, (err, dataContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(dataContent);
      }
      products.push(this);
      fs.writeFile(dataPath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    const dataPath = path.join(path.dirname(main), "data", "products.json");
    fs.readFile(dataPath, (err, dataContent) => {
      if (err) {
        callback([]);
      }
      callback(JSON.parse(dataContent));
    });
  }
};

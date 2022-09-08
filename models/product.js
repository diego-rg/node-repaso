const fs = require("fs");
const path = require("path");
const main = require("require-main-filename")();

const dataPath = path.join(path.dirname(main), "data", "products.json");

const getProductsFromFile = (callback) => {
  fs.readFile(dataPath, (err, dataContent) => {
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(dataContent));
    }
  });
};

//clase producto para crear objetos producto
//static permite chamar ao metodo dende a propia clase
module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(dataPath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
};

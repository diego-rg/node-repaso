const products = [];

//clase producto para crear objetos producto
//static permite chamar ao metodo dende a propia clase
module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
};

'use strict';

angular.module('starter.ProductServices', [])
.factory('Products', function() {

var str ="";
for (var i = 1; i < 21; i++) {
  str += '{ "id" :"'+i+'", "logoId" :"'+i+'", "name": "Producto '+i+'", "img":  "img/category/products/product'+i+'.jpg" },';
}
str += str +' { "id": "21","logoId": "21", "name": "Producto 21", "img": "img/category/products/product21.jpg" } ' ;

var products = JSON.parse( "["+str +"]" );  

/*

  var products = [{
    id: 0,
    name: 'Producto 0',
    deseg: 'Comidas y Bebidas',
    img: 'img/category/products/product0.jpg'
  }
  , {
    id: 1,
    name: 'Producto 1',
    deseg: 'Salud',
    img: 'img/category/products/product1.jpg'
  },
  {
    id: 2,
    name: 'Producto 2',
    deseg: 'Belleza y Fitness',
    img: 'img/category/products/product2.jpg'
  },
  {
    id: 3,
    name: 'Producto 3',
    deseg: 'Compras',
    img: 'img/category/products/product3.jpg'
  },
  {
    id: 4,
    name: 'Producto 4',
    deseg: 'Asistencia y Servicios',
    img: 'img/category/products/product4.jpg'
  },
  {
    id: 5,
    name: 'Producto 5',
    deseg: 'Diversion y Actividades',
    img: 'img/category/products/product5.jpg'
  }];
*/
  return {
    all: function() {
      return products;
    },
    remove: function(id) {
      products.splice(products.indexOf(id), 1);
    },
    get: function(productId) {
      for (var i = 0; i < products.length; i++) {
        if (products[i].id === parseInt(productId)) {
          return products[i];
        }
      }
      return null;
    }
  };
});
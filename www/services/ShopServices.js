'use strict';

angular.module('starter.ShopServices', [])
.factory('Shops', function() {

  var shops = [{
    id: 0,
    name: 'Local 0',
    deseg: 'Comidas y Bebidas',
    img: 'img/category/food/local0.jpg'
  }
  , {
    id: 1,
    name: 'Local 1',
    deseg: 'Salud',
    img: 'img/category/food/local1.jpg'
  },
  {
    id: 2,
    name: 'Local 2',
    deseg: 'Belleza y Fitness',
    img: 'img/category/food/local2.jpg'
  },
  {
    id: 3,
    name: 'Local 3',
    deseg: 'Compras',
    img: 'img/category/food/local1.jpg'
  },
  {
    id: 4,
    name: 'Local 4',
    deseg: 'Asistencia y Servicios',
    img: 'img/category/food/local4.jpg'
  },
  {
    id: 5,
    name: 'Local 5',
    deseg: 'Diversion y Actividades',
    img: 'img/category/food/local5.jpg'
  },
  {
    id: 6,
    name: 'Local 6',
    deseg: 'Vacaciones y Turismo',
    img: 'img/category/food/local6.jpg'
  }];

  return {
    all: function() {
      return shops;
    },
    remove: function(id) {
      shops.splice(shops.indexOf(id), 1);
    },
    get: function(shopId) {
      for (var i = 0; i < shops.length; i++) {
        if (shops[i].id === parseInt(shopId)) {
          return shops[i];
        }
      }
      return null;
    }
  };
});
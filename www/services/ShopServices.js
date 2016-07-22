'use strict';

angular.module('starter.ShopServices', [])
.factory('Shops', function() {

var str ="";
for (var i = 1; i < 21; i++) {
  str += '{ "id" :"'+i+'", "name": "Local '+i+'", "img":  "img/category/logos/logo'+i+'.jpg" },';
}
str += str +' { "id": "21", "name": "Local 21", "img": "img/category/logos/logo21.jpg" } ' ;

var shops = JSON.parse( "["+str +"]" );  
/*
  var shops = [{
    id: 1,
    name: 'Local 1',
    deseg: 'Salud',
    img: 'img/category/logos/logo01.jpg'
  },
  {
    id: 2,
    name: 'Local 2',
    deseg: 'Belleza y Fitness',
    img: 'img/category/logos/logo02.jpg'
  },
  {
    id: 3,
    name: 'Local 3',
    deseg: 'Compras',
    img: 'img/category/logos/logo03.jpg'
  },
  {
    id: 4,
    name: 'Local 4',
    deseg: 'Asistencia y Servicios',
    img: 'img/category/logos/logo04.jpg'
  },
  {
    id: 5,
    name: 'Local 5',
    deseg: 'Diversion y Actividades',
    img: 'img/category/logos/logo05.jpg'
  },
  {
    id: 6,
    name: 'Local 6',
    deseg: 'Vacaciones y Turismo',
    img: 'img/category/logos/logo06.jpg'
  }];
*/
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
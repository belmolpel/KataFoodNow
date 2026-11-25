import { Restaurant } from '../models/restaurant.model';
import { Dish } from '../models/dish.model';

// Dades de prova de FoodNow. Més endavant podrien vindre d'una API.

export const RESTAURANTS: Restaurant[] = [
  { id: 1, name: 'La Pizzeta de Carlet', cuisine: 'Italiana', rating: 4.6, deliveryTime: 30, deliveryFee: 1.5, isOpen: true, image: 'img/restaurants/1.svg' },
  { id: 2, name: 'Sushi Xúquer', cuisine: 'Japonesa', rating: 4.4, deliveryTime: 40, deliveryFee: 2.5, isOpen: true, image: 'img/restaurants/2.svg' },
  { id: 3, name: 'Burger Ribera', cuisine: 'Americana', rating: 4.1, deliveryTime: 25, deliveryFee: 0, isOpen: true, image: 'img/restaurants/3.svg' },
  { id: 4, name: 'Arrossos de la Tia Pepa', cuisine: 'Valenciana', rating: 4.8, deliveryTime: 50, deliveryFee: 2, isOpen: false, image: 'img/restaurants/4.svg' },
  { id: 5, name: 'Taco Loco', cuisine: 'Mexicana', rating: 3.9, deliveryTime: 35, deliveryFee: 1, isOpen: true, image: 'img/restaurants/5.svg' },
  { id: 6, name: 'Verd i Fresc', cuisine: 'Vegetariana', rating: 4.3, deliveryTime: 20, deliveryFee: 1.5, isOpen: false, image: 'img/restaurants/6.svg' },
];

export const DISHES: Dish[] = [
  // 1 · La Pizzeta de Carlet
  { id: 101, restaurantId: 1, name: 'Pizza margarita', description: 'Tomaca, mozzarella i alfàbega fresca.', price: 9.5, category: 'mains', isVegetarian: true, isAvailable: true },
  { id: 102, restaurantId: 1, name: 'Pizza quatre formatges', description: 'Mozzarella, gorgonzola, parmesà i formatge de cabra.', price: 11.9, category: 'mains', isVegetarian: true, isAvailable: true },
  { id: 103, restaurantId: 1, name: 'Pizza diavola', description: 'Tomaca, mozzarella i salami picant.', price: 11.5, category: 'mains', isVegetarian: false, isAvailable: true },
  { id: 104, restaurantId: 1, name: 'Bruschetta', description: 'Pa torrat amb tomaca, all i oli d\'oliva.', price: 5.5, category: 'starters', isVegetarian: true, isAvailable: true },
  { id: 105, restaurantId: 1, name: 'Tiramisú', description: 'Mascarpone, cafè i cacau.', price: 4.9, category: 'desserts', isVegetarian: true, isAvailable: false },
  // 2 · Sushi Xúquer
  { id: 201, restaurantId: 2, name: 'Assortiment de nigiri (8 u.)', description: 'Salmó, tonyina, llobarro i gamba.', price: 14.5, category: 'mains', isVegetarian: false, isAvailable: true },
  { id: 202, restaurantId: 2, name: 'Uramaki d\'alvocat (8 u.)', description: 'Arròs, alvocat, cogombre i sèsam.', price: 8.9, category: 'mains', isVegetarian: true, isAvailable: true },
  { id: 203, restaurantId: 2, name: 'Gyozes de pollastre (6 u.)', description: 'Farcides de pollastre i verdures.', price: 6.5, category: 'starters', isVegetarian: false, isAvailable: true },
  { id: 204, restaurantId: 2, name: 'Edamame', description: 'Faves de soja amb sal en escates.', price: 4.5, category: 'starters', isVegetarian: true, isAvailable: true },
  { id: 205, restaurantId: 2, name: 'Mochi de te verd (2 u.)', description: 'Pasta d\'arròs farcida de gelat.', price: 4.9, category: 'desserts', isVegetarian: true, isAvailable: true },
  // 3 · Burger Ribera
  { id: 301, restaurantId: 3, name: 'Hamburguesa clàssica', description: 'Vedella, formatge, enciam i tomaca.', price: 10.5, category: 'mains', isVegetarian: false, isAvailable: true },
  { id: 302, restaurantId: 3, name: 'Hamburguesa vegetal', description: 'Hamburguesa de cigrons, alvocat i ceba roja.', price: 10.9, category: 'mains', isVegetarian: true, isAvailable: true },
  { id: 303, restaurantId: 3, name: 'Creïlles fregides', description: 'Amb salsa de la casa.', price: 3.9, category: 'starters', isVegetarian: true, isAvailable: true },
  { id: 304, restaurantId: 3, name: 'Aros de ceba', description: 'Arrebossats i cruixents.', price: 4.5, category: 'starters', isVegetarian: true, isAvailable: false },
  { id: 305, restaurantId: 3, name: 'Refresc de cola', description: 'Llauna de 33 cl.', price: 2.2, category: 'drinks', isVegetarian: true, isAvailable: true },
  // 4 · Arrossos de la Tia Pepa
  { id: 401, restaurantId: 4, name: 'Paella valenciana (2 pers.)', description: 'Pollastre, conill, bajoqueta i garrofó.', price: 26, category: 'mains', isVegetarian: false, isAvailable: true },
  { id: 402, restaurantId: 4, name: 'Arròs a banda (2 pers.)', description: 'Amb allioli de la casa.', price: 24, category: 'mains', isVegetarian: false, isAvailable: true },
  { id: 403, restaurantId: 4, name: 'Arròs de verdures (2 pers.)', description: 'Carxofa, pebrot, bajoqueta i coliflor.', price: 22, category: 'mains', isVegetarian: true, isAvailable: true },
  { id: 404, restaurantId: 4, name: 'Esgarrat', description: 'Pebrot roig torrat i bacallà.', price: 7.5, category: 'starters', isVegetarian: false, isAvailable: true },
  { id: 405, restaurantId: 4, name: 'Flam de la casa', description: 'Amb caramel.', price: 4, category: 'desserts', isVegetarian: true, isAvailable: true },
  // 5 · Taco Loco
  { id: 501, restaurantId: 5, name: 'Tacos al pastor (3 u.)', description: 'Porc adobat, pinya i coriandre.', price: 9.5, category: 'mains', isVegetarian: false, isAvailable: true },
  { id: 502, restaurantId: 5, name: 'Burrito de fesols', description: 'Fesols, arròs, formatge i pico de gallo.', price: 9, category: 'mains', isVegetarian: true, isAvailable: true },
  { id: 503, restaurantId: 5, name: 'Nachos amb guacamole', description: 'Totopos de dacsa i guacamole casolà.', price: 6.9, category: 'starters', isVegetarian: true, isAvailable: true },
  { id: 504, restaurantId: 5, name: 'Quesadilla de pollastre', description: 'Truita de dacsa, pollastre i formatge.', price: 7.5, category: 'mains', isVegetarian: false, isAvailable: false },
  { id: 505, restaurantId: 5, name: 'Orxata', description: 'Orxata de xufa, 50 cl.', price: 3, category: 'drinks', isVegetarian: true, isAvailable: true },
  // 6 · Verd i Fresc
  { id: 601, restaurantId: 6, name: 'Bol de quinoa', description: 'Quinoa, cigrons, alvocat i verdures de temporada.', price: 10.5, category: 'mains', isVegetarian: true, isAvailable: true },
  { id: 602, restaurantId: 6, name: 'Amanida de taronja', description: 'Taronja, ceba tendra, olives i bacallà vegetal.', price: 8.5, category: 'starters', isVegetarian: true, isAvailable: true },
  { id: 603, restaurantId: 6, name: 'Crema de carabassa', description: 'Amb llavors torrades.', price: 6.5, category: 'starters', isVegetarian: true, isAvailable: true },
  { id: 604, restaurantId: 6, name: 'Wrap de falàfel', description: 'Falàfel, hummus i enciam.', price: 8.9, category: 'mains', isVegetarian: true, isAvailable: true },
  { id: 605, restaurantId: 6, name: 'Smoothie verd', description: 'Espinacs, poma i gingebre.', price: 4.5, category: 'drinks', isVegetarian: true, isAvailable: true },
];

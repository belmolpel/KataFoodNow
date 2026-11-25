import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { Dish } from '../models/dish.model';
import { RESTAURANTS, DISHES } from '../data/menu.data';

/**
 * Servei amb les dades de FoodNow.
 * Per a fer-lo servir en una pàgina:  private menuService = inject(MenuService);
 */
@Injectable({ providedIn: 'root' })
export class MenuService {
  private readonly restaurants: Restaurant[] = RESTAURANTS;
  private readonly dishes: Dish[] = DISHES;

  /** Tots els restaurants. */
  getRestaurants(): Restaurant[] {
    return [...this.restaurants];
  }

  /** Un restaurant pel seu id, o undefined si no existeix. */
  getRestaurant(id: number): Restaurant | undefined {
    return this.restaurants.find((r) => r.id === id);
  }

  /** La carta d'un restaurant. */
  getDishes(restaurantId: number): Dish[] {
    return this.dishes.filter((d) => d.restaurantId === restaurantId);
  }

  /** Un plat pel seu id, o undefined si no existeix. */
  getDish(id: number): Dish | undefined {
    return this.dishes.find((d) => d.id === id);
  }
}

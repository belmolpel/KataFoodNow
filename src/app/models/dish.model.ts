export type DishCategory = 'starters' | 'mains' | 'desserts' | 'drinks';

/** Text que veu l'usuari per a cada categoria. */
export const DISH_CATEGORY_LABELS: Record<DishCategory, string> = {
  starters: 'Entrants',
  mains: 'Principals',
  desserts: 'Postres',
  drinks: 'Begudes',
};

export interface Dish {
  id: number;
  restaurantId: number;
  name: string;
  description: string;
  price: number; // euros
  category: DishCategory;
  isVegetarian: boolean;
  isAvailable: boolean;
}

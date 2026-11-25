export interface Restaurant {
  id: number;
  name: string;
  cuisine: string; // tipus de cuina: «Italiana», «Japonesa»...
  rating: number; // valoració de 0 a 5
  deliveryTime: number; // temps d'entrega en minuts
  deliveryFee: number; // cost d'enviament en euros
  isOpen: boolean;
  image: string; // ruta dins de /public
}

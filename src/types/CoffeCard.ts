export interface CoffeeCard {
  img: string;
  title: string;
  price: string;
  roastLevel: 1 | 2 | 3; // Степень обжарки (1-3 зерна)
  isFavorite?: boolean; // Дополнительно: для иконки избранного
}
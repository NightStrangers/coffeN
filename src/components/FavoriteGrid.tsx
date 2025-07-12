import { useFavorites } from "../hooks/useFavorites";
import { CartItem } from "../types/interfaces/CartItem";
import { CoffeeCard } from "../types/interfaces/CoffeCard";
import Card from "./Card";

interface FavoriteGridProps {
  products: CoffeeCard[];
  cart: CartItem[];
  onFavoriteToggle: (title: string) => void;
  onAddToCart: (title: string) => void;
}

export default function FavoriteGrid({ products, cart, onAddToCart, onFavoriteToggle }: FavoriteGridProps) {
  const { favorites, handleFavorite } = useFavorites();
  const favoriteCards = products.filter(card => favorites.has(card.title));
  
  if (favoriteCards.length === 0) {
    return <div>В избранном пока ничего нет</div>;
  }

  return (
    <div className="favorite-grid">
      {favoriteCards.map((card) => (
        <Card
          key={card.title}
          {...card}
          isFavorite={true}
          onFavoriteToggle={() => handleFavorite(card.title)}
          onAddToCart={() => onAddToCart(card.title)}
          cartItems={cart}
        />
      ))}
    </div>
  );
}
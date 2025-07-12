import { coffeeCards } from '../types/data/coffeCards';
import Card from './Card';
import { CartItem } from '../types/interfaces/CartItem';

interface ProductsGridProps {
 favorites: Set<string>;
  onFavoriteToggle: (title: string) => void;
  cart: CartItem[];
  onAddToCart: (productId: string) => void;
}

export default function ProductsGrid({favorites,  cart, onFavoriteToggle, onAddToCart}:ProductsGridProps) {
  return (
    <div className="products-grid">
      {coffeeCards.map((card) => (
        <Card
          key={card.title}
          img ={card.img} 
          title ={card.title} 
          price = {card.price} 
          roastLevel = {card.roastLevel} 
          isFavorite={favorites.has(card.title)}
          onFavoriteToggle={() => onFavoriteToggle(card.title)}
          onAddToCart={() => onAddToCart(card.title)}
          cartItems = {cart}
        />
      ))} 
      </div>
  );
}
import { coffeeCards } from '../types/data/coffeCards';
import Card from './Card';
import { useState } from 'react';

export default function ProductsGrid() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [cart, setCart] = useState<string[]>([]);

  const handleFavorite = (title: string) => {
   setFavorites(prev => {
    const newFavorites = new Set(prev);
    if (newFavorites.has(title)){
      newFavorites.delete(title);
    }else{
      newFavorites.add(title);
    }
    return newFavorites;
   })
    
  };

  const handleAddToCart = (title: string) => {
    setCart (prev =>{
      const newCart = [...prev];
      if (newCart.includes(title)){
        newCart.push(title)
      }
    })
  };

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
          onFavoriteToggle={() => handleFavorite(card.title)}
          onAddToCart={() => handleAddToCart(card.title)}
        />
      ))} 
      </div>
  );
}
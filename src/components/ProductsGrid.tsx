import { coffeeCards } from '../types/data/coffeCards';
import Card from './Card';
import { useState } from 'react';
import { CartItem } from '../types/interfaces/CartItem';

export default function ProductsGrid() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [cart, setCart] = useState<CartItem[]>([]);

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

  const handleAddToCart = (productId: string) => {
    setCart (prev =>{
      const newCart = [...prev]; // копируем объект
      const existingItem = prev.find(item => item.productId === productId); // ищем элемент 
      if (existingItem){ //если товар уже есть в корзине
        const updatedItem = { 
        ...existingItem, 
        quantity: existingItem.quantity + 1 // увеличиваем количество
      }
        const ItemIndex = newCart.findIndex(item => item.productId === productId);
        if (ItemIndex !== -1){
        newCart.splice(ItemIndex, 1, updatedItem);
        }//заменяем новый товар на старый
      } else {
        const newItem = { 
          productId: productId, 
          quantity: 1 
        } //создаем новый элемент
        newCart.push(newItem)// добавляем его в корзину
      }
      return newCart;
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
          cartItems = {cart}
        />
      ))} 
      </div>
  );
}
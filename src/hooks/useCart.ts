import { useState } from "react";
import { CartItem } from "../types/interfaces/CartItem";
export const useCart = () => {
    const [cart, setCart] = useState<CartItem[]>([]);
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
  return {cart, handleAddToCart}
}
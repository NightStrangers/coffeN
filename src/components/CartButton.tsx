import { CartItem } from "../types/interfaces/CartItem";
export interface AddToCartButtonProps  {
    cartItems: CartItem[];
    productId: string;
    onAddToCart: (productId: string) => void; 
    
}
export default function CartButton({productId, onAddToCart,  cartItems}: AddToCartButtonProps){
    const isItemInCart = cartItems.some(item => item.productId === productId);
    return(
        <button className="action-btn" onClick={()=>onAddToCart(productId)}
          style = {{color:isItemInCart ? "#2E1415":"#000000"}}>
            <i className={`fa-solid fa-cart-${isItemInCart? 'flatbed': 'plus'} icon product__icon`} />
        </button>
    )
}
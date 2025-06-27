import { images } from "../types/data/image"
import { CoffeeCard } from "../types/interfaces/CoffeCard"
import { CartItem } from "../types/interfaces/CartItem";
import FavoriteButton from "./FavoriteButtom"
import CartButton from "./CartButton";

interface CardProps extends Omit<CoffeeCard, "isFavorite"> {
    onFavoriteToggle?: () => void;
    onAddToCart?: () => void;
    isFavorite: boolean;
    img: string;
    title:string;
    cartItems:CartItem[]

}

export default function Card({img, title, price, roastLevel, isFavorite, onFavoriteToggle =()=>{}, onAddToCart =()=>{}, cartItems}: CardProps){
return(
    <div className="product-card">
        <img src={img} alt="Кофе" className="product-image"/>
        <div className="product-info">
            <h3 className="title product__title">{title}</h3>
            <div className="price-section">
            <span className="price">{price}</span>
                <div className="beans">
                   {[...Array(roastLevel)].map((_, i) => (
              <img 
                key={i}
                className="bean__icon" 
                src={images.bean}
                alt={`Степень обжарки ${i+1}`}
              />
            ))}
                </div>
            </div>
            <div className="product-actions">
                <FavoriteButton isFavorite={isFavorite} onToggle={onFavoriteToggle}/>
                <CartButton onAddToCart={onAddToCart} productId={title}   cartItems={cartItems}/>
            </div>
        </div>
    </div>
)
}
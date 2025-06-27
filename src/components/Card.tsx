import { images } from "../types/data/image"
import { CoffeeCard } from "../types/interfaces/CoffeCard"
import { coffeeCards } from "../types/data/coffeCards"
import FavoriteButton from "./FavoriteButtom"

interface CardProps extends Omit<CoffeeCard, "isFavorite"> {
    onFavoriteToggle?: () => void;
    onAddToCart?: () => void;
    isFavorite: boolean;
    img: string;
    title:string;
}

export default function Card({img, title, price, roastLevel, isFavorite, onFavoriteToggle =()=>{}, onAddToCart =()=>{}}: CardProps){
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
                <button className="action-btn" onClick={onAddToCart}>
                    <i className="fa-solid fa-cart-plus icon product__icon"></i>
                </button>
            </div>
        </div>
    </div>
)
}
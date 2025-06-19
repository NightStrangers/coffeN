import { images } from "../image"
import { CoffeeCard } from "../types/CoffeCard"
import { coffeeCards } from "../coffeCards"

interface CardProps extends CoffeeCard{
    onFavoriteToggle?: () => void;
    onAddToCart?: () => void;
}

export default function Card({img, title, price, roastLevel, isFavorite = false, onFavoriteToggle =()=>{}, onAddToCart =()=>{}}: CardProps){
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
                <button className="action-btn" onClick={onFavoriteToggle}>
                    <i className={`fa-${isFavorite ? 'solid' : 'regular'} fa-heart icon product__icon`}/>
                </button>
                <button className="action-btn" onClick={onAddToCart}>
                    <i className="fa-solid fa-cart-plus icon product__icon"></i>
                </button>
            </div>
        </div>
    </div>
)
}
import FavoriteGrid from "../components/FavoriteGrid"
import { useFavorites } from "../hooks/useFavorites"
import { useCart } from "../hooks/useCart";
import { coffeeCards } from "../types/data/coffeCards";

export default function FavoritePage(){
    const { favorites, handleFavorite} = useFavorites();
    console.log('Favorites in FavoritePage:', Array.from(favorites));
    const {cart, handleAddToCart} = useCart();
    return (
        <>     
        <main >
            <FavoriteGrid
                products = {coffeeCards}
                cart= {cart}
                onFavoriteToggle={handleFavorite}
                onAddToCart = {handleAddToCart}
            />
        </main>       
        </>
    )
}
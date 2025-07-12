import Controls from "../components/Controls";
import FilterSection from "../components/FilterSection";
import ProductsGrid from "../components/ProductsGrid";
import { useFavorites } from "../hooks/useFavorites";
import { useCart } from "../hooks/useCart";


export default function MainPage(){
    const {favorites, handleFavorite} = useFavorites();
    console.log('Favorites in MainPage:', Array.from(favorites));
    const {cart, handleAddToCart} = useCart()
    return(<>
            <Controls/>
            <FilterSection/>
            <ProductsGrid
            favorites= {favorites}
            cart = {cart}
            onFavoriteToggle={handleFavorite}
            onAddToCart={handleAddToCart}
            />  
            </>
    )
}
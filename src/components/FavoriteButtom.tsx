import { FavoriteButtonProps } from "../types/interfaces/FavoriteButtonProps";

export default function FavoriteButton({isFavorite, onToggle}: FavoriteButtonProps){
    
    return(
        <button className="action-btn" onClick = {onToggle} >
            <i className={`fa-${isFavorite ? 'solid' : 'regular'} fa-heart icon product__icon `}/>
        </button>
    )
}

import {images} from '../types/data/image'
import {Link} from "react-router-dom"

export default function Header() {
  
    return(
         <header className='header'>
        <img className="logo header__logo" 
        src = {images.logo}
        alt={'Логотип магазина CoffeeN'}
        />
        <Link to="/" style={{textDecoration:'none'}}><h1 className="title header__title">Кофе</h1></Link>
        <nav className="nav header__nav">
           <Link to="/favorite" ><i className="fa-solid fa-heart icon nav__icon favorite-icon"/></Link>
            <Link to="/cart"><i className="fa-solid fa-cart-plus icon nav__icon"/></Link>
            <Link to="/profile"><i className="fa-regular fa-circle-user icon nav__icon"/></Link>
        </nav>
        
        </header>
    )
}
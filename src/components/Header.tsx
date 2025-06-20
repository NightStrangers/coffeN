import {images} from '../types/image'

export default function Header() {
    return(
         <header className='header'>
        <img className="logo header__logo" 
        src = {images.logo}
        alt={'Логотип магазина CoffeeN'}
        />
        <h1 className="title header__title">Кофе</h1>
        <nav className="nav header__nav">
            <i className="fa-solid fa-heart con nav__icon"></i>
            <i className="fa-solid fa-cart-plus icon nav__icon"></i>
            <i className="fa-regular fa-circle-user icon nav__icon"></i>
        </nav>

        </header>
    )
}
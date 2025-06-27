import { images } from "../types/data/image"
export default function Footer(){
    return(
        <footer className="footer">
         <div className="footer__content">
         <img className="logo footer__logo" 
        src={images.logo} 
        alt="Логотип магазина CoffeeN"
        />
        <div className="footer__contacts">
            <h3 className="title footer__title">Контакты</h3>
                <nav className="nav footer__nav">
                    <i className="fa-brands fa-instagram footer__nav-icon"></i>
                    <i className="fa-brands fa-telegram footer__nav-icon"></i>
                    <i className="fa-regular fa-envelope footer__nav-icon"></i>
                </nav>
        </div>
        <div className="footer__company">
             <h3 className="title footer__title">О компании</h3>
        </div>
        <div className="footer__help">
            <h3 className="title footer__title">Помощь</h3>
        </div>
       </div>
    </footer>    

    )
}
export default function Controls(){
    return(
            <section className="controls-panel">
            <div className="controls__buttons">
                <button className="control__btn sort-btn">Сортировка</button>
                <button className="control__btn filter-btn">Фильтры</button>
            </div>
            
            <div className="search-container">
              <input className="search__input" type="text" placeholder="Поиск"/>
               <i className="fa-solid fa-magnifying-glass search__button"></i>
            </div>
        </section>
    )
}
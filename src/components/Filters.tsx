import { filter } from "../filter"
interface FilterProps {
  title: string;
  item1: string;
  item2: string;
  item3: string;
}
export default function Filters({title, item1, item2, item3} : FilterProps ){
    return(
            <div className="filter-section">
            <h4 className="title filter__title">{title}</h4>
            <ul className="filter__list">
                <li className="filter-item">
                    <input className="filter__checkbox" type="checkbox" id="roast-light"/>
                    <label className="filter__item-title" htmlFor="roast-light">{item1}</label>
                </li>
                <li className="filter-item">
                    <input className="filter__checkbox" type="checkbox" id="roast-medium"/>
                    <label className="filter__item-title" htmlFor="roast-medium">{item2}</label>
                </li>
                <li className="filter-item">
                    <input className="filter__checkbox" type="checkbox" id="roast-dark"/>
                    <label className="filter__item-title" htmlFor="roast-dark">{item3}</label>
                </li>
            </ul>
        </div>
                
    )
}
import Filters from './Filters'
import {filter} from '../types/data/filter'
export default function FilterSection(){
return (
    <section className="filters-panel">
        <div className="filters__grid">
            {filter.map(filter=> <Filters key = {filter.title} {...filter}/>)}
        </div> 
    </section> )
}
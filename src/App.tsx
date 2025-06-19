import Header from "./components/Header"
import Controls from "./components/Controls"
import Filters from './components/Filters'
import {filter} from './filter'
import Card from "./components/Card"
import { coffeeCards } from "./coffeCards"

export default function App(){
    return (
        <div>
            <Header/>
            <main>
            <Controls/>
            <section className="filters-panel">
            <div className="filters__grid">
            <Filters 
            title = {filter[0].title}
            item1 = {filter[0].item1}
            item2 = {filter[0].item2}
            item3 = {filter[0].item3} 
            />
            <Filters {...filter[1]} /> 
            <Filters {...filter[2]} /> 
            <Filters {...filter[3]} />   
            </div> 
            </section>  
            <Card
            img={coffeeCards[0].img}
            title={coffeeCards[0].title}
            price={coffeeCards[0].price}
            roastLevel={coffeeCards[0].roastLevel}
            isFavorite
            /> 
            
               
               
                 

            </main>
        </div>
    )
}
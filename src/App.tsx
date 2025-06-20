import Header from "./components/Header"
import Controls from "./components/Controls"
import Filters from './components/Filters'
import {filter} from './filter'
import Card from "./components/Card"
import { coffeeCards } from "./types/coffeCards"
import Footer from "./components/Footer"

export default function App(){
    return (
       <body className="root">
            <Header/>
            <main className="main" >
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
            <section className="products-grid"> 
            <Card
            img={coffeeCards[0].img}
            title={coffeeCards[0].title}
            price={coffeeCards[0].price}
            roastLevel={coffeeCards[0].roastLevel}
            isFavorite
            />
            
            <Card {...coffeeCards[1]}/>
            <Card {...coffeeCards[2]}/>
            <Card {...coffeeCards[3]}/>
            <Card {...coffeeCards[4]}/>
            <Card {...coffeeCards[5]}/>
            </section> 
            
               
               
                 

            </main>
            <Footer/>
      </body>
    )
}
import Header from "./components/Header"
import Controls from "./components/Controls"
import Filters from './components/Filters'
import {filter} from './filter'
import Footer from "./components/Footer"
import ProductsGrid from "./components/ProductsGrid"

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
            <ProductsGrid/>
            
               
               
                 

            </main>
            <Footer/>
      </body>
    )
}
import Header from "./components/Header"
import Footer from "./components/Footer"
import AppRoutes from "./routes/routes"
import FavoritePage from "./pages/favoritePage"


export default function App(){
 
    return (
      <>
       <body className="root">
            <Header/>
            <main className="main" >
            <AppRoutes/>      
            <FavoritePage/>             
            </main>
            <Footer/>  
      </body>
    </>
    )
}
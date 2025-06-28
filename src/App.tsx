import Header from "./components/Header"
import Footer from "./components/Footer"
import AppRoutes from "./routes/routes"


export default function App(){
 
    return (
      <>
       <body className="root">
            <Header/>
            <main className="main" >
            <AppRoutes/>                   
            </main>
            <Footer/>  
      </body>
    </>
    )
}
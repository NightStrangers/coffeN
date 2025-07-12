import {Routes, Route} from "react-router-dom"
import MainPage from "../pages/main"
import CartPage from "../pages/cartPage"
import ProfilePage from "../pages/profilePage"
import FavoritePage from "../pages/favoritePage"

export default function AppRoutes(){
    const navigationRoute=[
    {path:"/", element:<MainPage/>},
    {path:"/favoritePage", element:<FavoritePage/> },
    {path:"/cartPage", element:<CartPage/>},
    {path:"/profilePage", element:<ProfilePage/>}
    ]
    return <Routes>
        {navigationRoute.map((route)=>(
            <Route key={route.path} path={route.path} element={route.element}/>))}
        </Routes>
}
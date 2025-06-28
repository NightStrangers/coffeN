import {Routes, Route} from "react-router-dom"
import Favorite from "../pages/favorite"
import MainPage from "../pages/main"
import CartPage from "../pages/cart"
import ProfilePage from "../pages/profile"

export default function AppRoutes(){
    const navigationRoute=[
    {path:"/", element:<MainPage/>},
    {path:"/favorite", element:<Favorite/> },
    {path:"/cart", element:<CartPage/>},
    {path:"/profile", element:<ProfilePage/>}
    ]
    return <Routes>
        {navigationRoute.map((route)=>(
            <Route key={route.path} path={route.path} element={route.element}/>))}
        </Routes>
}
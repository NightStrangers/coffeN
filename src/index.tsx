import ReactDOM from 'react-dom/client'
import "./index.css"
import App from "./App"
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');
if (root){
    
ReactDOM.createRoot(root).render(
<BrowserRouter>
<App/>
</BrowserRouter>)

}
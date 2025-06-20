import ReactDOM from 'react-dom/client'
import "./index.css"
import {images} from "./types/image"
import App from "./App"

const root = document.getElementById('root');
if (root){
ReactDOM.createRoot(root).render(<App/>)
}
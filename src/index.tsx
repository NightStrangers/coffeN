import ReactDOM from 'react-dom/client'
import "./index.css"
import App from "./App"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './store/store'
import { enableMapSet } from 'immer';
 enableMapSet();
const rootElement = document.getElementById('root');
if (rootElement){
   const root = ReactDOM.createRoot(rootElement);
root.render(
    <Provider store = {store}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </Provider>
)

}
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)

const rKlIKEr = createRoot(document.getElementById("KlIKEr"))
export const ReRenderBYXN = (id, target) => {
    //let lr = createRoot(document.getElementById(id))
    rKlIKEr.render(target);
}
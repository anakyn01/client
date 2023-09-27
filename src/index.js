import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";


import App from './components/App';

//css
import './css/new.scss';
import Footer from './components/footer/Footer';





export default function In() {
        return(
            <>  
            <BrowserRouter>   
            <App/>
            </BrowserRouter>  
            <Footer/>
            </>
        )
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<In />);
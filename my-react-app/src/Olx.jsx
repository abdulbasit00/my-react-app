import React from 'react'
import './Olx.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Btn from './Olx_components/Button'
// import Header from './Olx_components/Header';
// import Hero from './Olx_components/Hero';
// import MainMenu from './Olx_components/MainMenu';
// import AdBanner from './Olx_components/AdBanner';
// import Products from './Olx_components/Products';
// import Footer from './Olx_components/Footer';
function Olx() {
    return (
        <div>
        <h1 className="text-center">OLX</h1>
                  <Link to='/'>  
            <button >BACK</button>
            </Link>
        </div>
    )
}

export default Olx

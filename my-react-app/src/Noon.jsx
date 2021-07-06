import React from 'react'
import './Noon.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Noon() {
    return (
        <div>
            <h1 className="text-center">NOON</h1>
                  <Link to='/'>  
            <button>BACK</button>
            </Link>
        </div>
    )
}

export default Noon

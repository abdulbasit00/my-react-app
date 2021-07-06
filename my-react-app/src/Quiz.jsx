import React from 'react'
import './Quiz.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Quiz() {
    return (
        <div>
            <h1 className="text-center">QUIZ</h1>
                  <Link to='/'>  
            <button>BACK</button>
            </Link>
        </div>
    )
}

export default Quiz

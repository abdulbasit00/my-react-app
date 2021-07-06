import React from 'react'
import './Todo.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Todo() {
    return (
        <div>
            <h1 className="text-center">TODO</h1>
                  <Link to='/'>  
            <button>BACK</button>
            </Link>
        </div>
    )
}

export default Todo

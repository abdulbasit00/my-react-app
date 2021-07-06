import React from 'react'
// import './Home.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import OlX from './imges/olx.png';
import NooN from './imges/noon.png';
import ToDo from './imges/todo.png';
import QuiZ from './imges/quiz.png';
function Home() {
    return (
        <div>
 <h1 className="text-center fw-bolder font-monospace m-4 mb-5">
                MY PORTFOLIO
           </h1>
            <div className='container-md'>
                <div className='row justify-content-center'>
                {/* <Link  to='/olx' style={{ width: '26rem' }} className=' col-sm-10 col-md-6 col-lg-4 border border-warning me-3 ms-3 mb-3'> 
                <img src={OlX} class="w-100" alt="..." />
                </Link>
                <Link to='/noon' style={{ width: '26rem' }}  className=' col-sm-10 col-md-6 col-lg-4 border border-warning me-3 ms-3 mb-3'> 
                <img src={NooN} class="w-100" alt="..." />
                </Link> */}
                <Link to='/olx' style={{ width: '26rem' }}  className='background col-sm-10 col-md-6 col-lg-4 border border-dark rounded my-3 mx-3'> 
               
               <img src={OlX} class="w-100" alt="..." />
                </Link>
            
                <Link to='/noon' style={{ width: '26rem' }}  className='background col-sm-10 col-md-6 col-lg-4 border border-dark rounded  my-3 mx-3'> 
                <img src={NooN} class="w-100 mt-3" alt="..." />
             
                </Link>
                <Link to='/todo' style={{ width: '26rem' }}  className='background col-sm-10 col-md-6 col-lg-4 border border-dark  rounded  my-3 mx-3'> 
                <img src={ToDo} class="w-100" alt="..." />
                </Link>
                <Link to='/quiz' style={{ width: '26rem' }}  className='background col-sm-10 col-md-6 col-lg-4 border border-dark rounded  my-3 mx-3'> 
                <img src={QuiZ } class="w-100 mt-5" alt="..." />
               
                </Link>
                   
                </div>
            </div>
             
            
          
     
        </div>
    )
}

export default Home


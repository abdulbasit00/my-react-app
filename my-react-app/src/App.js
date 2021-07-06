import React from 'react';
import './App.css';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import Home from './Home'
import OlX from './Olx'
import Noon from './Noon'
import Todo from './Todo'
import Quiz from './Quiz'
function App() {
  return (
    <BrowserRouter>
    
    
      <Switch>
        
       <Route path="/" exact component={Home} />
       <Route path="/olx" component={OlX} />
       <Route path="/Noon" component={Noon} />
       <Route path="/todo" component={Todo} />
       <Route path="/quiz" component={Quiz} />
       </Switch>
    
    </BrowserRouter>
  );
}


export default App;

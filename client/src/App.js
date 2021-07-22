
import './App.css';

import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home';
import Update from './views/Update';
import Add from './views/Add'

function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/'/>
        <Add path='/new'/>
        <Update path='/author/:_id'/>
      </Router>
    </div>
  );
}

export default App;

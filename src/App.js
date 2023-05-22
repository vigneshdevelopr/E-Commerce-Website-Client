import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
<Switch>
  <Route exact path='/'>
<HomePage />
  </Route>
  
</Switch>
    </div>
  );
}

export default App;

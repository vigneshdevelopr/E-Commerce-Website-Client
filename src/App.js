import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import ProductList from './Pages/ProductList';
import Products from './Pages/Products';
import Login from './Pages/Login';
import FinalCart from './Pages/FinalCart';
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">
<Switch>
  <Route exact path='/'>
<HomePage />
  </Route>
  <Route  path='/login'>
<Login />
  </Route>
  <Route  path='/signup'>
<Signup />
  </Route>
  <Route  path='/productlist'>
<ProductList />
  </Route>
  <Route  path='/products'>
<Products />
  </Route>
  <Route  path='/cart'>
<FinalCart />
  </Route>
  
</Switch>
    </div>
  );
}

export default App;

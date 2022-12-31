
import './App.css';
import Header from './components/Header';
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/cart' exact element={<Cart/>}/>
      </Routes>

    </div>
  );
}

export default App;

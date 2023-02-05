import { Route, Routes } from 'react-router';
import Home from './Routes/Home';
import Menu from './Routes/Menu';
import OrderOnline from './Routes/OrderOnline'
import Reservation from './Routes/Reservation';
import Login from './Routes/Login';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/reservation' element={<Reservation />}/>
        <Route path='/order-online' element={<OrderOnline />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </>
  );
}

export default App;
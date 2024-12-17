import './App.css';
import Home from './components/Home'
import { Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import Login  from './components/Login';
import Register from './components/Register';
import Otp from './components/otpLogin'
import AddTodo from './components/AddTodo'

function App() {
  return (
    <div className="App">

        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/otpLogin" element={<Otp />}></Route>
          <Route path="/addTodo" element={<AddTodo />}></Route>
        </Routes>

        <ToastContainer position='top-center' />
    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';
import { Home } from './pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMe } from './redux/features/auth/authSlice';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <ToastContainer position='top-right'/>
    </>
  );
}

export default App;
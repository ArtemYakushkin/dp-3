import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Register } from './pages/Register/Register';
import { Login } from './pages/Login/Login';
import { Home } from './pages/Home/Home';
import { AddPost } from './pages/AddPost/AddPost';
import { MyPosts } from './pages/MyPosts/MyPosts';
import { Help } from './pages/Help/Help';
import { PostPage } from './pages/PostPage/PostPage';
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
        <Route path='/add' element={<AddPost />} />
        <Route path='/posts' element={<MyPosts />} />
        <Route path='/help' element={<Help />} />
        <Route path=':id' element={<PostPage />} />
      </Routes>
      <ToastContainer position='top-right'/>
    </>
  );
}

export default App;

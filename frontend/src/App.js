// import NavBar from './components/topbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import PrivateRoute from './components/PrivateRoute';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          {/* Add more protected routes here */}
    </Route>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

   
      {/* <Home/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
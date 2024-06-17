import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Sidebar/Dashboard.jsx';
import About from './pages/Sidebar/About.jsx';
import Analytics from './pages/Sidebar/Analytics.jsx';
import Comment from './pages/Sidebar/Comment.jsx';
import Product from './pages/Sidebar/Product.jsx';
import ProductList from './pages/Sidebar/ProductList.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Login/Register.jsx';
import Profile from './pages/Login/Profile.jsx';
import Logout from './pages/Login/Logout.jsx';
import Forget from './pages/Login/Forget.jsx';
import ChangePassword from './pages/Login/Change.jsx';

const App = () => {
  const [userstate, setUserState] = useState({});
  
  return (
    
      <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/login"element={<Login setUserState={setUserState} />}/>
          <Route path="/logout" element={<Logout />}/>
          <Route path="/forget" element={<Forget />}/>
          <Route path="/changePassword" element={<ChangePassword />}/>
          <Route path="/signup" element={<Register />}/>
          <Route
            path="/profile"
            element={
              userstate && userstate._id ? (
                <Profile
                  setUserState={setUserState}
                  username={userstate.fname}
                />
              ) : (
                <Login setUserState={setUserState} />
              )
            }
          ></Route>
        </Routes>
      </Sidebar>
    </BrowserRouter>    
  );
};

export default App;
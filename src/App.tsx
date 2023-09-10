import { useEffect } from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { ApiProducts } from './service/ApiProducts';
import { ApiUsers } from './service/ApiUsers';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';
import Layout from './components/Layout/Layout';
import './App.css';

function App() {
  useEffect(() => {
    ApiProducts();
    ApiUsers();
  }, []);

  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="profile" element={ <Profile /> } />
      </Route>
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;

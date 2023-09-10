import { useEffect } from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { ApiProducts } from './service/ApiProducts';
import { ApiUsers } from './service/ApiUsers';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';

function App() {
  // utilize styled.{tag que deve ser renderizada} para escolher qual elemento HTML você quer renderizar
  // const Header = styled.header`
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     padding: 1em;
  //     background-color: #022c16;
  //     margin-bottom: 3em;
  // `;

  useEffect(() => {
    ApiProducts();
    ApiUsers();
  }, []);

  // adicione os estilos CSS entre as crases ``
  // const Container = styled.div`
  //   width: 80%;
  //   max-width: 800px;
  //   margin: 0 auto;
  // `;

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

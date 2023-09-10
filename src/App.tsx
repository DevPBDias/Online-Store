import { useEffect } from 'react';
import styled from 'styled-components';
import { ApiProducts } from './service/ApiProducts';
import { ApiUsers } from './service/ApiUsers';

function App() {
  // utilize styled.{tag que deve ser renderizada} para escolher qual elemento HTML você quer renderizar
  const Header = styled.header`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1em;
      background-color: #022c16;
      margin-bottom: 3em;
  `;

  useEffect(() => {
    ApiProducts();
    ApiUsers();
  }, []);

  // adicione os estilos CSS entre as crases ``
  const Container = styled.div`
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
  `;

  return (
    <>
      <Header>
        <h1>Título</h1>
      </Header>
      <Container>
        <p>Conteúdo</p>
      </Container>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import { Container, SearchBar, SearchBtn } from './styles';

function InputSearch() {
  const [userSearch, setUserSearch]: any = useState();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { target } = event;
    setUserSearch(target.value);
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
  }

  return (
    <Container>
      <SearchBar
        type="text"
        placeholder="Search"
        value={ userSearch }
        onChange={ () => handleChange }
      />
      <SearchBtn
        type="button"
        onClick={ () => handleClick }
      >
        Search
      </SearchBtn>
    </Container>
  );
}

export default InputSearch;

import React, { useState } from 'react';

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
    <div>
      <input
        type="text"
        placeholder="Search"
        value={ userSearch }
        onChange={ handleChange }
      />
      <button
        type="button"
        onClick={ handleClick }
      >
        Search
      </button>
    </div>
  );
}

export default InputSearch;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-items: center;
`;

export const SearchBar = styled.input`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-items: center;
  padding: 0.5em;
  width: 20em;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: 1px solid blue;
`;

export const SearchBtn = styled.button`
  border-radius: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 0.5em;
  background-color: blue;
  color: #FFFFFF;
  font-size: small;
  font-weight: 600;
`;

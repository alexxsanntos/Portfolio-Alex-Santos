// components/StyledComponent.js
import React from 'react';
import styled from 'styled-components';

// Definindo um componente estilizado (CSS-in-JS)
const StyledButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }

  @media (max-width: 767px) {
    font-size: 12px;
    padding: 8px 16px;
  }
`;

const StyledComponent = () => {
  return (
    <div>
      <StyledButton>Clique Aqui</StyledButton>
    </div>
  );
};

export default StyledComponent;

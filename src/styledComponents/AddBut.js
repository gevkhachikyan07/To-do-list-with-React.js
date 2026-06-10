import React from 'react';
import styled from 'styled-components';

const Button = ({modClick}) => {
    return (
        <StyledWrapper>
            <button style={ modClick ? {color: "black",background:'white'} : {color:'white',background:'black'}}>
                Add
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  button {
    border-radius: 10em;
    font-size: 17px;
    font-weight: 600;
    width: 80px;
      height: 40px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: 1px solid ;
  }

  button:hover {
    transform: translateY(-4px) translateX(-2px);;
  };

  button:active {
    transform: translateY(2px) translateX(1px);
  };`;

export default Button;

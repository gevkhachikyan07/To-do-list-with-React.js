import React from 'react';
import styled from 'styled-components';

const Button = ({handleClose,modClick}) => {
    return (
        <StyledWrapper>
            <button onClick={handleClose}  className="button">
                <span style={modClick ?{background:'white'}:{background:'black'}} className="X" />
                <span style={modClick ?{background:'white'}:{background:'black'}} className="Y" />
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .button {
    position: absolute;
    right: 15px;
      top: 15px;
      cursor: pointer;
    width: 2.5em;
    height: 2.5em;
    border: none;
    background: none;
    border-radius: 5px;
    transition: background 0.5s;
  }

  .X {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2em;
    height: 1.5px;
    background-color: rgb(255, 255, 255);
    transform: translateX(-50%) rotate(45deg);
  }

  .Y {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2em;
    height: 1.5px;
    background-color: #fff;
    transform: translateX(-50%) rotate(-45deg);
  }

  .close {
    position: absolute;
    display: flex;
    padding: 0.8rem 1.5rem;
    align-items: center;
    justify-content: center;
    transform: translateX(-50%);
    top: -70%;
    left: 50%;
    width: 3em;
    height: 1.7em;
    font-size: 12px;
    background-color: rgb(19, 22, 24);
    color: rgb(187, 229, 236);
    border: none;
    border-radius: 3px;
    pointer-events: none;
    opacity: 0;
  }


  .button:hover > .close {
    animation: close 0.2s forwards 0.25s;
  }
    
  @keyframes close {
    100% {
      opacity: 1;
    }
  }`;

export default Button;

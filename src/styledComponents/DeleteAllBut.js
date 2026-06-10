import React from 'react';
import styled from 'styled-components';

const Button = ({modClick,handleDeleteAll}) => {
    return (
        <StyledWrapper>
            <button onClick={handleDeleteAll} className="btn" style={ modClick ? {position:'absolute',top:'10px',right:'50px'} :{background:"black",boxShadow:"1px 1px 5px .2px white",position:'absolute',top:'10px',right:'50px'} }>
                <p style={modClick ? null :{color:'white'}} className="paragraph"> delete all</p>
                <span className="icon-wrapper">
          <svg className="icon" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path style={ modClick ? null :{stroke:'white'}} d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
            </button>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .btn {
    cursor: pointer;
    width: 50px;
    height: 50px;
    border: none;
    position: relative;
    border-radius: 10px;
    -webkit-box-shadow: 1px 1px 5px .2px #00000035;
    box-shadow: 1px 1px 5px .2px #00000035;
    -webkit-transition: .2s linear;
    transition: .2s linear;
    transition-delay: .2s;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: space-between;
  }

  .btn:hover {
    width: 190px;
    transition-delay: .1s;
  }

  .btn:hover > .paragraph {
    visibility: visible;
    opacity: 1;
    -webkit-transition-delay: .4s;
    transition-delay: .4s;
  }

  .btn:hover > .icon-wrapper .icon {
    transform: scale(1.03);
  }

  .bnt:hover > .icon-wrapper .icon path {
    stroke: black;
  }

  .paragraph {
    color: black;
    visibility: hidden;
    opacity: 0;
    font-size: 16px;
    margin-right: 20px;
    padding-left: 20px;
    -webkit-transition: .1s linear;
    transition: .1s linear;
    text-transform: uppercase;
  }

  .icon-wrapper {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon {
    transform: scale(.9);
    transition: .2s linear;
  }

  .icon path {
    stroke: #000;
    stroke-width: 2px;
    -webkit-transition: .2s linear;
    transition: .2s linear;
  }`;

export default Button;

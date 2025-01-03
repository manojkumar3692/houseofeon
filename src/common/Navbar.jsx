import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {


  const navigate=useNavigate()
  const handleRedirect = () => {
    window.location.href = "https://www.meesho.com/house-of-eon-bloom-elixir-super-glow-youthful-glowing-skin-enriched-with-niacinamide-rosehip-oil-seabuckthorn-oil-pomegranate-oil-net-weight-30-gm-recommended-for-dry-skin/p/7m6rw1"
  };
  return (
    <NavContaine>
      <NameContainer onClick={()=>navigate('/')}>
        HOUSE OF EON
      </NameContainer>

      <LinkContainer>
        <ul>
          <li  onClick={()=>navigate('/')} style={{ color: '#feb406' }}>HOME</li>
          <li onClick={()=>navigate('/aboutus')}>ABOUT</li>
          <li>CART</li>
          <li onClick={handleRedirect} style={{ color: '#feb406' }}>BUY</li>
          <li>PRODUCTS</li>
        </ul>
      </LinkContainer>

    </NavContaine>
  )
}


export default Navbar;

const NameContainer = styled.div`
cursor: pointer;
    
`


const LinkContainer = styled.div`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0; 
    gap: 1.5rem; 
  }

  li {
    cursor: pointer;
    font-size: 12px;
    font-weight: 700;
    color: #ffffff; 
    position: relative;
    transition: color 0.3s ease;

    &:hover {
      color: #feb406; 
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px; 
      width: 0%;
      height: 2px; 
      background-color: #feb406;
      transition: width 0.5s ease-in-out;
    }

    &:hover::after {
      width: 100%; 
    }
  }
`;
const NavContaine = styled.div`
   width : 100%;
   height: 60px;
   padding: 0px 20px 0px 20px;
   color: #fff;
   border-bottom: 0.001px solid #999595;
   letter-spacing: 2px;
   display: flex;
    align-items: center;
    justify-content: space-between;
   background: transparent;
   position: fixed;
   z-index: 100;
   background-color: #010101;

`
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {

    const navigate = useNavigate()
    return (
        <FooterContainer>
            <Container>
                <ColOne>
                    <h3>House of Eon</h3>
                    <p>At House of Eon, luxury is an art—a fusion of timeless elegance and modern allure. Our curated collection of premium cosmetics and fragrances elevates the senses and redefines style.</p>
                    <h5>© 2024 House Of Eon, Developed by HOE</h5>
                </ColOne>
                <ColOne>
                    <h3>Links</h3>
                    <ul>
                        <li style={{cursor: "pointer"}} onClick={() => navigate('/terms')}>Terms and conditions</li>
                        <li>About Us</li>
                        <li>Coming Soon</li>
                        <li>Services</li>
                    </ul>
                </ColOne>
                <ColOne>
                    <h3></h3>
                    <ul>
                        <li>Product List</li>
                        <li>Contacts</li>
                        <li>My account</li>
                        <li>Checkout</li>
                        <li>Cart</li>
                    </ul>
                </ColOne>
                <ColOne>
                    <h3>Contacts</h3>
                    <ul>
                        {/* <li>+1 623-812-4957</li> */}
                        <li>admin@houseofeon.in</li>
                        <li>West Saidapet , Chennai India</li>
                    </ul>
                </ColOne>
            </Container>
        </FooterContainer>
    )
};

export default Footer;

const FooterContainer = styled.div`
  position: relative;
  background: #1a1a1a;
  border-top: 1px solid #484848;
  z-index: 1;
`;


const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    padding: 3rem 15rem;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        padding: 15px;
        margin: 0;
    }
`;

const ColOne = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    h3 {
        font-size: 25px;
        font-weight: 900;
    color: #989796;

    }

    h5 {
        font-size: 12px;
    font-weight: 300;
    line-height: 1.5;
    color: #989796;
    margin-top: 25px;
    }

    p {
        margin-top: 0;
    font-size: 14px;
    line-height: 24px;
    max-width: 255px;
    color: #cacaca;
    }

    ul li {
        color: #cacaca;
    font-size: 14px;

    }
`;
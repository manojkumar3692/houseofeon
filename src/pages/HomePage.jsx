import React from "react";
import styled from "styled-components";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const HomePage = () => {
  return (
    <MainWrap>
        <Navigation>
        <Navbar />
        </Navigation>
      <Contents >  
        <LeftContainer>
          <LeftContent>
            <span>- who we are</span>
            <h2>
              A Boutique Digital Design Agency Focused on{" "}
              <span className="qultText">Quality</span>
            </h2>
            <Button>Work With Us</Button>
          </LeftContent>
        </LeftContainer>

        <RightContainer>
          <RightContent>
            <Containers>
            <img src="https://promo-theme.com/luxa/wp-content/uploads/2019/03/img1-1024x1024.jpg"/>
      
              <p>
                Here's What Industry Insiders Say About Business Cards <br />{" "}
                Branding
              </p>
            </Containers>
            <Containers>
            <img src="https://promo-theme.com/luxa/wp-content/uploads/2019/03/img12.jpg"/>
              <p>
                Here's What Industry Insiders Say About Business Cards <br />{" "}
                Branding
              </p>
            </Containers>
            <Containers>
            <img src=" https://promo-theme.com/luxa/wp-content/uploads/2019/03/img21.jpg"/>
           
              <p>
                Here's What Industry Insiders Say About Business Cards <br />{" "}
                Branding
              </p>
            </Containers>
          </RightContent>

          <RightContent style={{ marginTop: "7rem" }}>
            <Containers>
            <img src=" https://promo-theme.com/luxa/wp-content/uploads/2019/03/img2.jpg"/>
              <p>
                Here's What Industry Insiders Say About Business Cards <br />{" "}
                Branding
              </p>
            </Containers>
            <Containers>
            <img src="https://promo-theme.com/luxa/wp-content/uploads/2019/03/img5.jpg"/>
          
              <p>
                Here's What Industry Insiders Say About Business Cards <br />{" "}
                Branding
              </p>
            </Containers>
            <Containers>
            <img src="https://promo-theme.com/luxa/wp-content/uploads/2019/03/img15.jpg"/>

              <p>
                Here's What Industry Insiders Say About Business Cards <br />{" "}
                Branding
              </p>
            </Containers>
          </RightContent>

          <RightContent>
            <Containers>
            <img src="  https://promo-theme.com/luxa/wp-content/uploads/2019/03/img3.jpg"/>
          
              <p>
                Here's What Industry Insiders Say About Business Cards <br />{" "}
                Branding
              </p>
            </Containers>
            <Containers>
            {/* <img src="  https://promo-theme.com/luxa/wp-content/uploads/2019/03/img3.jpg"/> */}
            <img src="https://promo-theme.com/luxa/wp-content/uploads/2019/03/img8-1024x638.jpg"/>


              <p>
                Here's What Industry Insiders Say About Business Cards <br />{" "}
                Branding
              </p>
            </Containers>
            <Containers>
                            <img src="https://promo-theme.com/luxa/wp-content/uploads/2019/03/img11.jpg"/>
              <p>

                Here's What Industry Insiders Say About Business Cards <br />{" "}
                Branding
              </p>
            </Containers>
          </RightContent>
        </RightContainer>
      </Contents>
      <Footer />
    </MainWrap>
  );
};

export default HomePage;

const MainWrap = styled.div`
  background: #010101 50% 0 repeat;
  width: 100%;
`;

const Navigation = styled.div`
    display: flex;
    position: absolute;
`

const LeftContainer = styled.div`
  width: 25%;
  height: 602px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LeftContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 4rem 2rem;

  h2 {
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    line-height: 50px;
  }

  span {
    /* text-transform: uppercase; */
    color: rgb(254, 180, 6);
    font-size: 14px;
    font-weight: 600;
  }

  .qultText {
    color: rgb(254, 180, 6);
    font-size: 48px;
    font-weight: 700;
    line-height: 50px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  padding: 2rem 1rem;
  gap: 2rem;
  margin-top:4rem;
  height: auto;
  flex-direction: row;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  @media (min-width: 769px) {
    width: 30%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  :hover {
    filter: grayscale(0%);
    -webkit-transition: border 400ms ease;
    -moz-transition: border 400ms ease;
    -o-transition: border 400ms ease;
    -ms-transition: border 400ms ease;
    transition: border 400ms ease;
    border: 0.5px solid white;
  }

  :hover p {
    opacity: 1;
    position: absolute;
    overflow: hidden;
    border: 0;
    bottom: 0%;
    -webkit-transform: translateY(0%);
    -ms-transform: translateY(0%);
    transform: translateY(0%);
  }
`;

const Containers = styled.div`
  display: flex;
  color: white;
  height: 400px;
  align-items: center;
  justify-content: center;
  background-color: #333;
  /* background-image: url("https://promo-theme.com/luxa/wp-content/uploads/2019/03/img2.jpg"); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  transition: all 400ms ease-in-out;
  -webkit-transition: all 400ms ease-in-out;
  -o-transition: all 400ms ease-in-out;
  transition: all 400ms ease-in-out;
  z-index: 1;
  position: relative;
  overflow: hidden;
  border: 0.5px solid transparent;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 200px;
  }

  :hover {
    filter: grayscale(0%);
    -webkit-transition: border 400ms ease;
    -moz-transition: border 400ms ease;
    -o-transition: border 400ms ease;
    -ms-transition: border 400ms ease;
    transition: border 400ms ease;
    border: 0.5px solid white;
  }

  p {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 22px 14.28571% 22px 21.42857%;
    z-index: 2;
    -webkit-transform: translateY(100%);
    -ms-transform: translateY(100%);
    transform: translateY(100%);
    -webkit-transition: -webkit-transform 500ms ease-in-out;
    transition: -webkit-transform 500ms ease-in-out;
    -o-transition: transform 500ms ease-in-out;
    transition: transform 500ms ease-in-out;
    transition: transform 500ms ease-in-out, -webkit-transform 500ms ease-in-out;
    background: rgba(24, 24, 24, 0.7);
  }

  .portfolio-item .pi-content:before {
    content: "";
    position: absolute;
    top: 35px;
    left: 7.71429%;
    right: 83.71429%;
    height: 1px;
  }

  .portfolio-item .pi-content:after {
    content: "";
    font-family: "free-basic-ui-elements";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    line-height: 1;
    text-decoration: none;
    text-transform: none;
    margin-top: -0.5em;
    opacity: 0.5;
    position: absolute;
    top: 50%;
    right: 8.57143%;
  }
`;

const Button = styled.button`
  color: white;
  text-transform: uppercase;
  background: transparent;
  border: 2px solid transparent;
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  transition: border-color 0.7s ease, color 0.7s ease;

  &:hover {
    border-color: rgb(254, 180, 6);
    color: rgb(254, 180, 6);
  }
`;

const Contents = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

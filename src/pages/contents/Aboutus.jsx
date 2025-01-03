import React from 'react';
import styled from 'styled-components';
import Footer from '../../common/Footer';

const Aboutus = () => {
    return (
        <>
            <AboutContainer>
                <Content>
                    <Heading>About House of Eon – Luxury Skincare and Fragrance</Heading>
                    <Paragraph>
                        Welcome to House of Eon, where luxury skincare and luxury fragrances meet exceptional craftsmanship and innovative formulations. Our brand is dedicated to creating a refined, indulgent experience for those who appreciate the finer things in life. At House of Eon, we believe beauty should be timeless, elegant, and transformative—an extension of the luxury lifestyle you deserve.
                    </Paragraph>
                    <Heading>Luxury Skincare for Radiant Skin</Heading>
                    <Paragraph>
                        Each product at House of Eon is meticulously designed to nourish and rejuvenate, using only the finest ingredients such as Moringa, Ashwagandha, Rosehip Seed Oil, Sea Buckthorn Oil, and Pomegranate Seed Oil. Our luxury face creams and luxury skincare solutions are formulated to provide superior hydration, anti-aging benefits, and skin healing, ensuring a radiant, youthful glow. We combine nature's purest elements with cutting-edge skincare science to craft products that deliver results, wrapped in elegance.
                    </Paragraph>
                    <Heading>Luxury Fragrances for a Lasting Impression</Heading>
                    <Paragraph>
                        Our collection of luxury fragrances offers a sensory journey like no other. Each fragrance is a celebration of exquisite notes and luxurious undertones, designed to captivate and linger. From the rich, deep scents for men to the delicate, elegant compositions for women, our luxury perfumes and fragrances are crafted for those who seek distinction and sophistication in every moment.
                    </Paragraph>
                    <Heading>Crafted with Care, Designed for Elegance</Heading>
                    <Paragraph>
                        At House of Eon, we pride ourselves on our commitment to excellence. Every product is a testament to our dedication to luxury beauty. We source only the most premium ingredients, ensuring each creation is luxurious, effective, and indulgent. Whether you're treating your skin to a luxury face cream or discovering a new luxury soap, you can trust that each item is crafted with the highest standards in mind.
                    </Paragraph>
                    <Heading>Experience the Luxury Lifestyle with House of Eon</Heading>
                    <Paragraph>
                        Join us at House of Eon and elevate your self-care rituals with our premium range of luxury skincare and luxury fragrance products. We’re here to help you look, feel, and live luxuriously, offering a unique experience that transforms everyday beauty into extraordinary moments of indulgence. Discover the art of luxury with House of Eon.
                    </Paragraph>
                </Content>
                <ImageContainer>
                    <img src='https://promo-theme.com/luxa/wp-content/uploads/2019/03/bg13.jpg' alt='House of Eon' />
                </ImageContainer>
            </AboutContainer>

            <Footer />
        </>
    );
};

export default Aboutus;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: #000;
  padding-top: 5rem;
`;

const Content = styled.div`
  width: 50%;
color: ${({ theme }) => theme.colors.text};
  padding: 20px 40px;
  font-family: 'Poppins', sans-serif;
  text-align: justify;
  border-radius: 10px;
  overflow-y: auto; 
  max-height: 100vh; 


  scrollbar-width: none; 
  -ms-overflow-style: none; 
  &::-webkit-scrollbar {
    display: none; 
  }
`;

const Heading = styled.h1`
color: ${({ theme }) => theme.colors.secondary};
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

import React, { useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../../common/Footer';
// import First from "../images/HouseofEonCover.png";

const TermsAndConditions = () => {

 useEffect(() => {
    window.scrollTo(0, 0)
 }, [])

 const date = new Date();

 let day = date.getDate();
 let month = date.getMonth() + 1;
 let year = date.getFullYear();
 let currentDate = `${day}/${month}/${year}`; 


    return (
        <>
            <TermsContainer>
                <Content>
                    <SubHeading style={{fontSize:'28px'}}>Terms and Conditions</SubHeading>
                    <Paragraph>{"01 /01/2025"}</Paragraph>

                    <Paragraph>
                        Welcome to House of Eon. By purchasing our products, you agree to the following terms and conditions. Please read them carefully before making a purchase.
                    </Paragraph>

                    <SubHeading>General Information</SubHeading>
                    <Paragraph>
                        House of Eon is a luxury brand offering premium skincare and fragrance products. Our website provides information and products for customers who appreciate the art of luxury. By placing an order through our website, you acknowledge that you are fully aware of and agree to our Terms and Conditions.
                    </Paragraph>

                    <SubHeading> Product Orders and Pricing</SubHeading>
                    <Paragraph>
                        All prices listed on our website are in [insert currency] and are subject to change without notice. We reserve the right to modify, discontinue, or limit the availability of products at any time.
                    </Paragraph>

                    <SubHeading> Payment and Billing</SubHeading>
                    <Paragraph>
                        Payments for orders are processed securely via the payment methods available on our website. You are responsible for providing accurate billing and shipping information, and you agree to pay all charges related to your order, including taxes and shipping fees.
                    </Paragraph>

                    <SubHeading> No Return Policy</SubHeading>
                    <Paragraph>
                        Due to the nature of our products, House of Eon has a no return policy once the product has been opened. We are committed to the highest standards of quality and customer satisfaction, but due to hygiene and safety regulations, we cannot accept returns or exchanges for products that have been opened or used.
                    </Paragraph>
                    <Paragraph>
                        <strong>Unopened Products:</strong> If you receive a product that is defective or damaged in transit, please contact us within [insert time frame, e.g., 14 days] of receipt, and we will work with you to resolve the issue.
                    </Paragraph>
                    <Paragraph>
                        <strong>Opened Products:</strong> Once a product has been opened or used, it is considered final sale and cannot be returned.
                    </Paragraph>

                    <SubHeading> Shipping and Delivery</SubHeading>
                    <Paragraph>
                        We aim to process and ship orders promptly. Shipping times and fees will vary depending on your location and the selected shipping method. Please ensure that the shipping address provided is accurate to avoid delays or errors in delivery.
                    </Paragraph>

                    <SubHeading>Damaged or Defective Products</SubHeading>
                    <Paragraph>
                        If you receive a damaged or defective product, please contact our customer service team within [insert time frame, e.g., 7 days] of receiving the product. We may require photographic evidence of the damage for processing.
                    </Paragraph>

                    <SubHeading>Privacy and Security</SubHeading>
                    <Paragraph>
                        Your privacy is important to us. All personal information provided during your purchase is handled with the utmost care and in accordance with our Privacy Policy. We use industry-standard encryption to protect your payment information.
                    </Paragraph>

                    <SubHeading> Limitation of Liability</SubHeading>
                    <Paragraph>
                        House of Eon is not liable for any damages, injuries, or issues arising from the misuse or improper use of our products. By using our products, you acknowledge and accept full responsibility for their application.
                    </Paragraph>

                    <SubHeading>Modifications to Terms and Conditions</SubHeading>
                    <Paragraph>
                        We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on our website, and the updated version will be effective immediately upon posting.
                    </Paragraph>

                    <SubHeading>Contact Us</SubHeading>
                    <Paragraph>
                        If you have any questions or concerns about these Terms and Conditions, please contact us at:
                    </Paragraph>
                    <Paragraph>
                        House of Eon<br />
                        [admin@houseofeon.in]<br />
                        {/* [Insert contact phone number]<br /> */}
                        [www.houseofeon.in]
                    </Paragraph>
                </Content>
            </TermsContainer>

            <Footer />
        </>
    );
};

export default TermsAndConditions;

const TermsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  padding: 5rem 0;
  background-image: url('https://promo-theme.com/luxa/wp-content/uploads/2019/03/bg1.jpg');
  /* background-position: top left; */
  background-repeat: no-repeat;
  /* filter: blur(1px); */
  /* -webkit-filter: blur(8px); */

  background-size: cover;
  min-height: 100vh;
`;

const Content = styled.div`
  width: 60%;
  color: #fff;
  /* font-family: 'Poppins', sans-serif; */
  backdrop-filter: blur(20px);
  text-align: center;
  padding: 20px;

  border-radius: 10px;
  box-shadow: 0 0 10px rgba(254, 180, 6, 0.5); /* Subtle glow effect */
`;

const Heading = styled.h1`
  color: #feb406;
  /* font-family: 'Poppins', sans-serif; */
  margin-bottom: 20px;
  font-weight: bold;
`;

const SubHeading = styled.h2`
  color: #feb406;
  font-family: 'Poppins';
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;
`;

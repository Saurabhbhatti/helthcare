import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  color: rgb(9,55,31);
  font-size: 32px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  color: rgb(9,55,31);
  font-size: 20px;
  line-height: 1.5;
`;

const OurPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Section>
          <Title>Compound Semaglutide Weight loss program</Title>
          <Paragraph>
            Experience our Compound Semaglutide Weight Loss Program - a
            comprehensive, personalized service integrating medication,
            nutrition counseling, exercise guidance, and ongoing support for
            effective and sustainable weight loss.
          </Paragraph>
        </Section>
        <Section>
          <Title>Meal Replacement Program</Title>
          <Paragraph>
            Revitalize with our Meal Replacement Program - a convenient,
            nutritious solution featuring balanced meals, expert guidance, and
            continuous monitoring for successful weight management and improved
            well-being.
          </Paragraph>
        </Section>
        <Section>
          <Title>Managed Weight Loss Program</Title>
          <Paragraph>
            Embark on our Managed Weight Loss Program - a tailored journey
            combining medical supervision, personalized nutrition plans,
            fitness strategies, and ongoing support for achieving your weight
            goals effectively and sustainably.
          </Paragraph>
        </Section>
      </Container>
      <Footer/>
    </>
  );
};

export default OurPage;

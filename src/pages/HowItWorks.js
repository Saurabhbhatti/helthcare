import styled from "styled-components";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

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
  font-size: 28px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  color: rgb(9,55,31);
  font-size: 18px;
  line-height: 1.5;
`;

const OurPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Section>
          <Title> Book Initial Assessment and Consultation</Title>
          <Paragraph>
            Discuss the patient's weight loss goals, lifestyle factors, dietary
            habits, physical activity levels, and readiness for treatment.
          </Paragraph>
        </Section>
        <Section>
          <Title>Patient Education and Counseling</Title>
          <Paragraph>
            Educate the patient about compound semaglutide, its mechanism of
            action, and its role in weight management.
          </Paragraph>
        </Section>
        <Section>
          <Title> Baseline Investigations and Monitoring</Title>
          <Paragraph>
            Perform baseline laboratory investigations, including fasting blood
            glucose, lipid profile, liver function tests, kidney function tests,
            and HbA1c levels.
          </Paragraph>
        </Section>
        <Section>
          <Title> Initiation of Compound Semaglutide Treatment</Title>
          <Paragraph>
            Prescribe compound semaglutide according to the recommended dosing
            schedule, typically starting with a low dose and titrating up
            gradually to the maintenance dose.
          </Paragraph>
        </Section>
        <Section>
          <Title> Ongoing Follow-up and Support</Title>
          <Paragraph>
            Schedule regular follow-up appointments to monitor the patient's
            progress, review weight loss trends, assess adherence to treatment,
            and adjust therapy as needed.
          </Paragraph>
        </Section>
      </Container>
      <Footer />
    </>
  );
};

export default OurPage;

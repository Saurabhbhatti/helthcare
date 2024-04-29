import styled from "styled-components";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { colors } from "@mui/material";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  color: rgb(9, 55, 31);
  font-size: 28px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  color: rgb(9, 55, 31);
  font-size: 18px;
  line-height: 1.5;
`;

const InstructionList = styled.ol`
  list-style-type: decimal;
  text-align: left;
  color: rgb(9, 55, 31);
`;

const InstructionListItem = styled.li`
  margin-bottom: 10px;
  color: rgb(9, 55, 31);
`;

const VideoWrapper = styled.div`
  margin-top: 20px;

  display: flex;
  gap: 20px;
`;

const VideoContainer = styled.div`
  width: 50%;
`;

const OurPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Section>
          <Title>Book Initial Assessment and Consultation</Title>
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
          <Title>Initiation of Compound Semaglutide Treatment</Title>
          <div>
            <h2 style={{ color: "rgb(9, 55, 31)" }}>
              How to Draw and Inject Semaglutide?
            </h2>
            <Paragraph>
              Semaglutide is administered subcutaneously via a small injection.
              These injections are only to be administered once a week. Please
              watch this helpful youtube video on how to properly prepare
              yourself and administer an injection:
            </Paragraph>
            <InstructionList>
              <InstructionListItem>
                Remove plastic safety cap. You can discard this cap.
              </InstructionListItem>
              <InstructionListItem>
                Clean top of the vial with an alcohol wipe.
              </InstructionListItem>
              <InstructionListItem>
                Hold vial upside down.
              </InstructionListItem>
              <InstructionListItem>
                Uncap the syringe( usually orange in color). Syringes are often
                capped on both end ( needle and plunger side).
              </InstructionListItem>
              <InstructionListItem>
                Pierce the rubber top with syringe.
              </InstructionListItem>
              <InstructionListItem>
                Pull back on the plunger of syringe and fill to appropriate
                dose. Please note, the dose on the syringe is in "units".
              </InstructionListItem>
              <InstructionListItem>
                Clean injection site with alcohol swab.
              </InstructionListItem>
              <InstructionListItem>Pinch injection area.</InstructionListItem>
              <InstructionListItem>
                Inject into the pinched area.
              </InstructionListItem>
              <InstructionListItem>
                Push plunger to injection medication.
              </InstructionListItem>
              <InstructionListItem>
                Remove needle, recap and dispose of needle.
              </InstructionListItem>
            </InstructionList>
            <VideoWrapper>
              <VideoContainer>
                <iframe
                  width="360"
                  height="315"
                  src="https://www.youtube.com/embed/SjrIit0fYgo"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </VideoContainer>
              <VideoContainer>
                <iframe
                  width="360"
                  height="315"
                  src="https://www.youtube.com/embed/-8KnAmpXXko"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </VideoContainer>
            </VideoWrapper>
          </div>
        </Section>
        <Section>
          <Title>Ongoing Follow-up and Support</Title>
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

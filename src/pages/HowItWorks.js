import styled from "styled-components";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { memo } from "react";

const BodyWrapper = styled.div`
  overflow-x: hidden;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const Section = styled.section`
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Title = styled.h2`
  color: rgb(9, 55, 31);
  font-size: 28px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const Paragraph = styled.p`
  color: rgb(9, 55, 31);
  font-size: 18px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
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
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const VideoContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

// Memoizing non-changing components to prevent unnecessary re-renders
const MemoizedHeader = memo(Header);
const MemoizedFooter = memo(Footer);

const OurPage = () => {
  return (
    <BodyWrapper>
      <MemoizedHeader />
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
          <Paragraph>
            Prescribe compound semaglutide according to the recommended dosing
            schedule, typically starting with a low dose and titrating up
            gradually to the maintenance dose.
          </Paragraph>
        </Section>
        <Section>
          <Title>How to Draw and Inject Semaglutide?</Title>
          <div>
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
              <InstructionListItem>Hold vial upside down.</InstructionListItem>
              <InstructionListItem>
                Uncap the syringe (usually orange in color). Syringes are often
                capped on both ends (needle and plunger side).
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
                Remove needle, recap, and dispose of needle.
              </InstructionListItem>
            </InstructionList>
            <VideoWrapper>
              <VideoContainer>
                <iframe
                  width="360"
                  height="315"
                  src="https://www.youtube.com/embed/SjrIit0fYgo"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </VideoContainer>
              <VideoContainer>
                <iframe
                  width="360"
                  height="315"
                  src="https://www.youtube.com/embed/-8KnAmpXXko"
                  frameBorder="0"
                  allowFullScreen
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
      <MemoizedFooter />
    </BodyWrapper>
  );
};

export default OurPage;

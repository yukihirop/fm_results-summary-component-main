import styled from "@emotion/styled";
import { md } from "@/styles/media-query";
import YourResult from "@/components/your-result";
import { css } from "@emotion/react";

export default function Home() {
  const data = [
    {
      subject: "Reaction",
      score: 80,
    },
    {
      subject: "Memory",
      score: 92,
    },
    {
      subject: "Verbal",
      score: 61,
    },
    {
      subject: "Visual",
      score: 72,
    },
  ];

  return (
    <>
      <Container>
        <YourResult></YourResult>
        <YourSummaryContainer>
          <YourSummaryTitle>Summary</YourSummaryTitle>
          <YourSummarySubjectContainer>
            {data.map((item) => (
              <YourSummarySubjectItem key={item.subject}>
                <h3>{item.subject}</h3>
                <div>
                  <span>{item.score}</span>
                  <span> / 100</span>
                </div>
              </YourSummarySubjectItem>
            ))}
          </YourSummarySubjectContainer>
          <YourSummaryContinue>Continue</YourSummaryContinue>
        </YourSummaryContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 520px;
  height: 360px;
  margin: 0 auto;
  display: flex;
  border-radius: 1rem;

  border: 1px solid red;

  ${md} {
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
`;

const YourSummaryContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;

  border: 1px solid green;

  ${md} {
    width: 100%;
  }
`;

const YourSummaryTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
`;

const YourSummarySubjectItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  border-radius: .4rem;

  &:nth-child(3) {
    background-color: ${({ theme }) => theme.colors.secondary.greenTeal}};
  }

  &:nth-child(4) {
    background-color: ${({ theme }) => theme.colors.secondary.cobaltBlue}};
  }


  h3:nth-of-type(1) {
    color: ${({ theme }) => theme.colors.primary.lightRed}};
  }
`;

const YourSummarySubjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: .5rem;

  ${YourSummarySubjectItem}:nth-of-type(1) {
    background-color: ${({ theme }) => theme.colors.secondary.lightRed}};
  }

  ${YourSummarySubjectItem}:nth-of-type(2) {
    background-color: ${({ theme }) => theme.colors.secondary.orangeyYellow}};
  }

  /* font-size: 11rem; */
`;
const YourSummaryContinue = styled.button``;

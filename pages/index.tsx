import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled";
import { md } from "@/styles/media-query";

export default function Home() {
  return (
    <>
      <Container>
        <YourResultContainer>
          <YourResultTitle>Your Result</YourResultTitle>
          <YourResultScore>
            <h2>76</h2>
            <sub>of 100</sub>
          </YourResultScore>
          <YourResultDescription>
            <h3>Great</h3>
            <p>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </YourResultDescription>
        </YourResultContainer>
        <YourSummaryContainer />
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

const YourResultContainer = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 1rem;
  background: ${({ theme }) =>
    `linear-gradient(0deg, ${theme.colors.gradients.lightRoyalBlue}, ${theme.colors.gradients.lightStateBlue})`};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  border: 1px solid blue;

  ${md} {
    width: 100%;
    height: 50;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

const YourResultTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral.lightLavender};
`;
const YourResultScore = styled.div`
  width: 150px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${({ theme }) =>
    `linear-gradient(0deg, ${theme.colors.gradients.persianBlue}, ${theme.colors.gradients.violetBlue})`};
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;

  h2 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.neutral.white};
  }

  sub {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.neutral.paleBlue};
  }
`;
const YourResultDescription = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral.lightLavender};

  h3 {
    color: ${({ theme }) => theme.colors.neutral.white};
    font-size: 1.5rem;
    font-weight: 500;
  }

  p {
    font-size: 0.8rem;
    margin: 1rem 2.2rem;
  }
`;

const YourSummaryContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: green;

  border: 1px solid green;

  ${md} {
    width: 100%;
  }
`;

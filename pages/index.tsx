import styled from "@emotion/styled";
import { md } from "@/styles/media-query";
import YourResult from "@/components/your-result";

export default function Home() {
  return (
    <>
      <Container>
        <YourResult></YourResult>
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

const YourSummaryContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: green;

  border: 1px solid green;

  ${md} {
    width: 100%;
  }
`;

import styled from "@emotion/styled";
import { md } from "@/styles/media-query";
import YourResult from "@/components/your-result";
import YourSummary from "@/components/your-summary/your-summary";

export default function Home() {
  return (
    <>
      <Container>
        <YourResult />
        <YourSummary />
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
  background-color: ${({ theme }) => theme.colors.neutral.white};
  box-shadow: 20px 15px 50px -2px rgba(0, 0, 0, 0.33);

  ${md} {
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
`;

import styled from "@emotion/styled";
import { md } from "@/styles/media-query";
import styles from "./your-summary.module.scss";

const YourSummary = () => {
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
    <YourSummaryContainer>
      <YourSummaryTitle>Summary</YourSummaryTitle>
      <YourSummarySubjectContainer>
        {data.map((item) => (
          <YourSummarySubjectItem
            key={item.subject}
            className={styles.subjectItem}
          >
            <h3>{item.subject}</h3>
            <div>
              <span>{item.score}</span>
              <span> / 100</span>
            </div>
          </YourSummarySubjectItem>
        ))}
      </YourSummarySubjectContainer>
      <YourSummaryContinue className={styles.continue}>
        Continue
      </YourSummaryContinue>
    </YourSummaryContainer>
  );
};

export default YourSummary;

const YourSummaryContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;

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
  height: 40px;
  border-radius: 0.4rem;
  padding: 0.5rem;

  h3 {
    font-size: 1rem;
    font-weight: 400;
  }

  h3::before {
    margin-right: 0.5rem;
  }

  div {
    span:nth-of-type(2) {
      color: gray;
    }
  }
`;

const YourSummarySubjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 1rem;
`;
const YourSummaryContinue = styled.button`
  height: 36px;
  border-radius: 18px;
  color: ${({ theme }) => theme.colors.neutral.white};
  border-color: transparent;

  background-color: ${({ theme }) => theme.colors.neutral.darkGrayBlue}};
`;

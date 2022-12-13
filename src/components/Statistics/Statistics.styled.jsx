import styled from '@emotion/styled/macro';

export const StatWrapper = styled.section`
  margin: 20px auto;
  padding-top: 20px;
  width: fit-content;
  text-align: center;
  border-radius: 8px;
  box-shadow: rgba(34, 60, 80, 0.2) 3px 3px 6px 0px inset,
    rgba(34, 60, 80, 0.2) -3px -3px 6px 1px inset;
  background-color: rgb(232, 231, 231);
`;

export const StatList = styled.ul`
  display: flex;
  margin: 0;
`;

const setBgColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background-color: ${setBgColor};
  text-shadow: rgb(245, 244, 243);
`;

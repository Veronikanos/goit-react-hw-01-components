import styled from '@emotion/styled/macro';

export const NameUserCard = styled.p``;
export const StatsListItem = styled.li``;
export const LabelCard = styled.span``;

export const ProfileCard = styled.div`
  width: 300px;
  margin: 20px auto;
  padding: 20px;
  background-color: rgb(245, 244, 243);
  border-radius: 8px;
  box-shadow: rgba(34, 60, 80, 0.2) 3px 3px 6px 0px inset,
    rgba(34, 60, 80, 0.2) -3px -3px 6px 1px inset;
`;

export const DescriptionCard = styled.div`
  text-align: center;
  color: grey;
  ${NameUserCard} {
    font-size: larger;
    font-weight: 700;
    color: black;
    padding: 10px 0;
  }
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  background-color: rgb(232, 231, 231);
  ${StatsListItem} {
    width: 33.33%;
    text-align: center;
    padding: 5px;
    ${LabelCard} {
      display: block;
    }
  }
`;

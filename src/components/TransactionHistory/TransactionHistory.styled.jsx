import styled from '@emotion/styled/macro';

export const TableHead = styled.thead``;

export const TableWrapper = styled.table`
  margin: 20px auto;
  width: 50%;
  text-align: center;
  border-radius: 4px;
  box-shadow: rgba(34, 60, 80, 0.2) 3px 3px 6px 0px inset,
    rgba(34, 60, 80, 0.2) -3px -3px 6px 1px inset;
  background-color: cadetblue;
  ${TableHead} {
    text-transform: uppercase;
    color: white;
    padding: 20px;
  }
`;

export const TableBody = styled.tbody`
  color: black;
  background-color: white;
`;

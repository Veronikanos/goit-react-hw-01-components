import styled from '@emotion/styled/macro';

export const FriendListWrapper = styled.ul`
  margin: 30px auto;
  width: 50%;
`;

export const FriendListCard = styled.li`
  display: flex;
  padding: 20px;
  margin: 10px 0;
  background-color: rgb(245, 244, 243);
  box-shadow: rgba(34, 60, 80, 0.2) 3px 3px 6px 0px inset,
    rgba(34, 60, 80, 0.2) -3px -3px 6px 1px inset;
  border-radius: 8px;
  gap: 10px;
`;

const setColorIsOnline = ({online}) => {
  return online ? 'green' : 'red';
};

export const OnlineStatus = styled.span`
  color: ${setColorIsOnline};
`;

export const UserAvatar = styled.img`
  max-width: 100px;
  border-radius: 4px;
`;

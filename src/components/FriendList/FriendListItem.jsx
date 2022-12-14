import PropTypes from 'prop-types';
import {
  FriendListCard,
  OnlineStatus,
  UserAvatar,
  UserName,
} from './FriendList.styled';
import {GoPrimitiveDot} from 'react-icons/go';

export const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <FriendListCard>
      <OnlineStatus online={isOnline}>
        <GoPrimitiveDot size={30} />
      </OnlineStatus>
      <UserAvatar src={avatar} alt={name} width="48" />
      <UserName>{name}</UserName>
    </FriendListCard>
  );
};

//TODO & QUESTION: how to concat variable and string in JSX?
//TODO: add icon component for status.

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

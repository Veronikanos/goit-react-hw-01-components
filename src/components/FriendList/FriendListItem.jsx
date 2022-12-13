import PropTypes from 'prop-types';
import {FriendListCard} from './FriendList.styled';

export const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <FriendListCard>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </FriendListCard>
  );
};

//TODO: how to concat variable and string in JSX?
//TODO: add icon component for status.

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

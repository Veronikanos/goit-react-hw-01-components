import PropTypes from 'prop-types';
import {
  ProfileCard,
  DescriptionCard,
  NameUserCard,
  StatsList,
  StatsListItem,
  LabelCard,
} from './Profile.styled';

export const Profile = ({avatar, username, tag, location, stats}) => {
  return (
    <ProfileCard>
      <DescriptionCard>
        <img src={avatar} alt="User avatar" className="avatar" />
        <NameUserCard>{username}</NameUserCard>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </DescriptionCard>

      <StatsList>
        <StatsListItem>
          <LabelCard>Followers</LabelCard>
          <span className="quantity">{stats.followers}</span>
        </StatsListItem>
        <StatsListItem>
          <LabelCard>Views</LabelCard>
          <span className="quantity">{stats.views}</span>
        </StatsListItem>
        <StatsListItem>
          <LabelCard>Likes</LabelCard>
          <span className="quantity">{stats.likes}</span>
        </StatsListItem>
      </StatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

import PropTypes from 'prop-types';
import {StatWrapper, StatList, StatItem} from './Statistics.styled';

export const Statistics = ({title, stats}) => {
  return (
    <StatWrapper>
      <h2>{title}</h2>

      <StatList>
        {stats.map((item) => (
          <StatItem key={item.id}>
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </StatWrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

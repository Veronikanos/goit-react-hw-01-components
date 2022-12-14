import PropTypes from 'prop-types';
import {TableRow} from './TableRow';
import {
  TableWrapper,
  TableHead,
  TableBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
  return (
    <TableWrapper>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(({id, type, amount, currency}) => (
          <TableRow
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </TableBody>
    </TableWrapper>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

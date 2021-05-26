import { connect } from 'react-redux';
import { actions, filterValue } from 'redux/contacts';

import Filter from './Filter';
//
const mapStateToProps = state => ({
  filter: filterValue(state),
});

const mapDispatchToProps = dispatch => {
  return {
    setFilter: value => dispatch(actions.setFilter(value)),
    onReset: () => dispatch(actions.resetFilter('')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

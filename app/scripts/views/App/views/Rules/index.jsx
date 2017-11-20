import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Table from './Table';


const Rules = ({ rules }) => (
  <main className='container-fluid'>

    <button className='btn btn-primary'>
      Add new rule
    </button>

    <Table rules={rules} />

  </main>
);

Rules.propTypes = {
  rules: PropTypes.shape({
    [PropTypes.number]: PropTypes.object,
  }).isRequired,
};

const mapStateToProps = state => ({
  rules: state.rules,
});

export default connect(mapStateToProps, {
})(Rules);

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Rule from './Rule';

import { rules as messages } from 'messages';

import FormattedMessageUCFirst from 'AppComponents/FormattedMessageUCFirst';


const Table = ({ rules }) => {
  const rulesSorted = Object.keys(rules);
  rulesSorted.sort((a, b) => {
    const ruleA = rules[a];
    const ruleB = rules[b];
    if (ruleA.number > ruleB.number) return 1;
    if (ruleA.number < ruleB.number) return -1;
    return 0;
  });

  return (
    <table className='table'>

      <thead>
        <tr>
          <th><FormattedMessageUCFirst {...messages.number} /></th>
          <th><FormattedMessageUCFirst {...messages.description} /></th>
          <th><FormattedMessageUCFirst {...messages.action} /></th>
        </tr>
      </thead>

      <tbody>

        { rulesSorted.map(ruleNumber => <Rule key={ruleNumber} rule={rules[ruleNumber]} />) }

      </tbody>

    </table>
  );
};

Table.propTypes = {
  rules: PropTypes.shape({
    [PropTypes.number]: PropTypes.object,
  }).isRequired,
};

export default Table;

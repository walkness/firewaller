import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { rules } from 'messages';


const Rule = ({ rule }) => (
  <tr key={rule.number}>

    <td>{ rule.number }</td>

    <td>{ rule.description }</td>

    <td>
      <FormattedMessage
        {...rules.actions}
        values={{ action: rule.action }}
      />
    </td>

  </tr>
);

Rule.propTypes = {
  rule: PropTypes.shape({
    number: PropTypes.number,
  }).isRequired,
};

export default Rule;

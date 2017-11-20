import React from 'react';
import PropTypes from 'prop-types';

import { rules } from 'messages';

import FormattedMessageUCFirst from 'AppComponents/FormattedMessageUCFirst';


const Rule = ({ rule }) => (
  <tr key={rule.number}>

    <td>{ rule.number }</td>

    <td>{ rule.description }</td>

    <td>
      <FormattedMessageUCFirst
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

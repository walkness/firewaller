import React from 'react';
import PropTypes from 'prop-types';
import { intlShape } from 'react-intl';

import { ucFirst } from 'utils';


const FormattedMessageUCFirst = ({ values, ...props }, { intl }) => (
  <span>
    { ucFirst(intl.formatMessage(props, values)) }
  </span>
);

FormattedMessageUCFirst.propTypes = {
  values: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

FormattedMessageUCFirst.contextTypes = {
  intl: intlShape.isRequired,
};

export default FormattedMessageUCFirst;

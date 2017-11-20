/* eslint-disable import/prefer-default-export */

import { defineMessages } from 'react-intl';


export const rules = defineMessages({
  actions: {
    id: 'rules.actions',
    defaultMessage: `{action, select,
      ACCEPT {accept}
      DROP {drop}
      REJECT {reject}
      REJECT_TCP {reject TCP}
      other {{action}}
    }`,
  },
  number: {
    id: 'rules.number',
    defaultMessage: 'number',
  },
  description: {
    id: 'rules.description',
    defaultMessage: 'description',
  },
  action: {
    id: 'rules.action',
    defaultMessage: 'action',
  },
});

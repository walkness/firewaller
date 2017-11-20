import { combineReducers } from 'redux';

import rules from './RulesReducer';
import rulesets from './RulesetsReducer';

export default combineReducers({
  rules,
  rulesets,
});

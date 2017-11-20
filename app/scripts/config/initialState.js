export default {
  rules: {
    1: {
      number: 1,
      description: 'Allow established, related',
      action: 'ACCEPT',
    },
    2: {
      number: 2,
      description: 'Drop invalid',
      action: 'DROP',
    },
  },
  rulesets: {},
};

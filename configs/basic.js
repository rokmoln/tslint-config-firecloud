module.exports = {
  rules: {
    'array-type': [
      true,
      'array'
    ],
    'await-promise': true,
    'ban-ts-ignore': false,
    'interface-name': true,
    'jsdoc-format': true,
    'no-angle-bracket-type-assertion': true,
    'no-parameter-properties': false,
    typedef: [
      true,
      'call-signature',
      'parameter'
    ],
    'typedef-whitespace': [
      true,
      {
        'call-signature': 'nospace',
        'index-signature': 'nospace',
        'parameter': 'nospace',
        'property-declaration': 'nospace',
        'variable-declaration': 'nospace'
      },
      {
        'call-signature': 'space',
        'index-signature': 'space',
        'parameter': 'space',
        'property-declaration': 'space',
        'variable-declaration': 'space'
      }
    ],
    'unified-signatures': true,
    'promise-function-async': true,
    'no-null-undefined-union': true,
    'type-literal-delimiter': true
  }
};

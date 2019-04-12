// only rules marked as
// typescriptOnly:true (default) or requiresTypeInfo:true

module.exports = {
  rules: {
    'adjacent-overload-signatures': true,
    'array-type': [
      true,
      'array'
    ],
    'await-promise': true,
    'ban-ts-ignore': false,
    'ban-types': false,
    'callable-types': true,
    'interface-name': true,
    'interface-over-type-literal': true,
    'match-default-export-name': false,
    'member-access': false,
    'no-angle-bracket-type-assertion': true,
    'no-any': false,
    'no-boolean-literal-compare': true,
    'no-empty-interface': true,
    'no-floating-promises': true,
    'no-inferrable-types': false,
    'no-inferred-empty-object-type': true,
    'no-internal-module': true,
    'no-mergeable-namespace': true,
    'no-misused-new': true,
    'no-namespace': true,
    'no-non-null-assertion': true,
    'no-null-undefined-union': true,
    'no-object-literal-type-assertion': true,
    'no-parameter-properties': true,
    'no-redundant-jsdoc': true,
    'no-reference-import': true,
    'no-unbound-method': true,
    'no-unnecessary-qualifier': true,
    'no-unsafe-any': true,
    // ignored, not really typescriptOnly
    // 'no-unused-variables': true,
    // ignored, not really typescriptOnly
    // 'no-var-requires': true,
    // ignored, not really requiresTypeInfo
    // 'no-use-before-declare': true, // requiresTypeInfo
    'prefer-readonly': false,
    'promise-function-async': true, // requiresTypeInfo
    'restrict-plus-operands': true, // requiresTypeInfo
    'return-undefined': false, // requiresTypeInfo
    'strict-boolean-expressions': true,
    'strict-type-predicates': true,
    'type-literal-delimiter': true,
    typedef: true,
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
        'call-signature': 'onespace',
        'index-signature': 'onespace',
        'parameter': 'onespace',
        'property-declaration': 'onespace',
        'variable-declaration': 'onespace'
      }
    ],
    'unified-signatures': true
  }
};

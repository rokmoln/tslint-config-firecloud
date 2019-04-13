// only rules marked as
// typescriptOnly:true (default) or requiresTypeInfo:true

module.exports = {
  rules: {
    // rules not (yet) supported by https://github.com/typescript-eslint/typescript-eslint
    'deprecation': true, // requiresTypeInfo
    'match-default-export-name': false,
    'no-boolean-literal-compare': true,
    'no-floating-promises': true,
    'no-for-in-array': true, // requiresTypeInfo
    'no-inferred-empty-object-type': true,
    'no-mergeable-namespace': true,
    'no-null-undefined-union': true,
    'no-redundant-jsdoc': true,
    'no-reference-import': true,
    'no-restricted-globals': false, // requiresTypeInfo
    'no-unsafe-any': true,
    'no-void-expression': true, // requiresTypeInfo
    'prefer-readonly': false,
    'return-undefined': false, // requiresTypeInfo
    'strict-boolean-expressions': true,
    'strict-type-predicates': true,
    'type-literal-delimiter': true,
    typedef: true,
    'unnecessary-bind': true, // requiresTypeInfo
    'use-default-type-parameter': true, // requiresTypeInfo

    // -------------------------------------------------------------------------

    // rules supported by https://github.com/typescript-eslint/typescript-eslint
    'adjacent-overload-signatures': true, // @typescript-eslint/adjacent-overload-signatures
    'array-type': [ // @typescript-eslint/array-type
      true,
      'array'
    ],
    'await-promise': true, // @typescript-eslint/await-thenable
    'ban-ts-ignore': false, // @typescript-eslint/ban-ts-ignore
    'ban-types': false, // @typescript-eslint/ban-types
    'callable-types': true, // @typescript-eslint/prefer-function-type
    'interface-name': true, // @typescript-eslint/interface-name-prefix
    'interface-over-type-literal': true, // @typescript-eslint/no-type-alias, @typescript-eslint/prefer-interface
    'member-access': false, // @typescript-eslint/explicit-member-accessibility
    'member-ordering': [ // @typescript-eslint/member-ordering
      true,
      {
        order: 'fields-first'
      }
    ],
    'no-angle-bracket-type-assertion': true, // @typescript-eslint/no-angle-bracket-type-assertion
    'no-any': false, // @typescript-eslint/no-explicit-any
    'no-empty-interface': true, // @typescript-eslint/no-empty-interface
    'no-inferrable-types': false, // @typescript-eslint/no-inferrable-types
    'no-internal-module': true, // @typescript-eslint/prefer-namespace-keyword
    'no-misused-new': true, // @typescript-eslint/no-misused-new
    'no-namespace': true, // @typescript-eslint/no-namespace
    'no-non-null-assertion': true, // @typescript-eslint/no-non-null-assertion
    'no-object-literal-type-assertion': true, // @typescript-eslint/no-object-literal-type-assertion
    'no-parameter-properties': true, // @typescript-eslint/no-parameter-properties
    // typescript specific but not marked typescriptOnly
    'no-reference': true, // @typescript-eslint/no-triple-slash-reference
    'no-unbound-method': true, // @typescript-eslint/unbound-method
    'no-unnecessary-qualifier': true, // @typescript-eslint/no-unnecessary-qualifier
    'no-unnecessary-type-assertion': true, // @typescript-eslint/no-unnecessary-type-assertion
    // ignored, not really typescriptOnly
    // 'no-unused-variable': true, // // @typescript-eslint/no-unused-vars
    // ignored, not really typescriptOnly
    // 'no-var-requires': true, // @typescript-eslint/no-var-requires
    // ignored, not really requiresTypeInfo
    // 'no-use-before-declare': true, // requiresTypeInfo, @typescript-eslint/no-use-before-define
    'promise-function-async': true, // requiresTypeInfo, @typescript-eslint/promise-function-async
    'restrict-plus-operands': true, // requiresTypeInfo, @typescript-eslint/restrict-plus-operands
    'typedef-whitespace': [ // @typescript-eslint/type-annotation-spacing
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
    'unified-signatures': true // @typescript-eslint/unified-signatures

    // -------------------------------------------------------------------------

    // rules in https://github.com/typescript-eslint/typescript-eslint, typescript specific
    // @typescript-eslint/member-delimiter-style
    // @typescript-eslint/member-naming

    // -------------------------------------------------------------------------

    // rules in https://github.com/typescript-eslint/typescript-eslint, but not typescript specific
    // @typescript-eslint/camelcase
    // 'class-name': undefined, @typescript-eslint/class-name-casing
    // @typescript-eslint/explicit-function-return-type
    // @typescript-eslint/generic-type-naming
    // 'indent', @typescript-eslint/indent
    // @typescript-eslint/no-array-constructor
    // 'no-unnecessary-class': undefined, // @typescript-eslint/no-extraneous-class
    // 'no-require-imports': undefined, // @typescript-eslint/no-require-imports
    // 'no-this-assignment': undefined, // @typescript-eslint/no-this-alias
    // 'no-unused-variable': undefined,
    // @typescript-eslint/no-useless-constructor
    // @typescript-eslint/prefer-for-of
  }
};

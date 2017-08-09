module.exports = {
  extends: [
    'tslint:all'
  ],

  rules: {
    align: [
      true,
      'parameters',
      'statements'
    ],
    'array-type': [
      true,
      'array'
    ],
    'arrow-return-shorthand': [
      true,
      'multiline'
    ],
    'await-promise': true,
    ban: false,
    'ban-types': false,
    'class-name': true,
    'comment-format': [
      true,
      'check-space'
    ],
    curly: true,
    'cyclomaticComplexity': [
      true,
      20
    ],
    eofline: true,
    forin: true,
    'import-spacing': true,
    indent: [
      true,
      'spaces'
    ],
    'interface-name': true,
    'jsdoc-format': true,
    'label-position': true,
    'match-default-export-name': true,
    'max-classes-per-file': [
      true,
      2
    ],
    'max-line-length': [
      true,
      200
    ],
    'member-access': false,
    'member-ordering': [
      true,
      'static-before-instance',
      'variables-before-functions'
    ],
    'newline-before-return': false,
    'no-angle-bracket-type-assertion': true,
    'no-any': false,
    'no-arg': true,
    'no-bitwise': true,
    'no-boolean-literal-compare': true,
    'no-conditional-assignment': true,
    'no-consecutive-blank-lines': false,
    'no-console': false,
    'no-construct': true,
    'no-debugger': true,
    'no-duplicate-super': true,
    'no-duplicate-variable': true,
    'no-empty': true,
    'no-eval': true,
    'no-floating-promises': true,
    'no-inferrable-types': false,
    'no-internal-module': true,
    'no-import-side-effect': false, // true, // FIXME
    'no-misused-new': true,
    'no-non-null-assertion': true,
    'no-null-keyword': false,
    'no-parameter-properties': false,
    'no-require-imports': true,
    'no-shadowed-variable': true,
    'no-string-literal': true,
    'no-switch-case-fall-through': true,
    'no-trailing-whitespace': true,
    'no-unbound-method': true,
    'no-unnecessary-initializer': true,
    'no-unnecessary-qualifier': true,
    'no-unsafe-any': true,
    'no-unused-expression': true,
    'no-use-before-declare': true,
    'no-var-keyword': true,
    'no-var-requires': true,
    'object-literal-key-quotes': [
      true,
      'as-needed'
    ],
    'object-literal-sort-keys': false,
    'one-line': [
      true,
      'check-open-brace',
      'check-catch',
      'check-else',
      'check-finally',
      'check-whitespace'
    ],
    'prefer-for-of': false,
    'prefer-function-over-method': false, // true, // FIXME
    'prefer-method-signature': true,
    quotemark: [
      true,
      'single',
      'avoid-escape'
    ],
    radix: true,
    'semicolon': [
      true,
      'always'
    ],
    'space-before-function-paren': [
      true,
      'never'
    ],
    'strict-boolean-expressions': false,
    'strict-type-predicates': true,
    'switch-default': true,
    'trailing-comma': [
      true,
      {
        'multiline': 'never',
        'singleline': 'never'
      }
    ],
    'triple-equals': [
      true,
      'allow-null-check'
    ],
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
    'typeof-compare': true,
    'unified-signatures': true,
    'variable-name': [
      true,
      // 'check-format'
      'ban-keywords'
    ],
    whitespace: [
      true,
      'check-branch',
      'check-decl',
      'check-operator',
      'check-preblock',
      'check-separator',
      'check-type'
    ]
  }
};

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-recommended-scss',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [true, { severity: 'warn' }],
    // ::before, ::afterのコロンを2つにする
    'selector-pseudo-element-colon-notation': 'double',
    'selector-class-pattern': null,
    // クラス名でアンパサンド（&）は禁止（&:hoverなどはOK）
    // 'scss/selector-no-union-class-name': true,
    // no-unknown で無視する物を以下に追加
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export'],
      },
    ],
  },
  ignoreFiles: ['**/node_modules/**'],
};

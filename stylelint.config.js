module.exports = {
    rules: {

        /**
         * Color
         * http://stylelint.io/user-guide/rules/#color
         */

        'color-hex-case': 'lower',
        'color-hex-length': ['short', {
            severity: 'warning'
        }],
        'color-named': 'never',
        'color-no-hex': null,
        'color-no-invalid-hex': true,


        /**
         * Font family
         * http://stylelint.io/user-guide/rules/#font-family
         */

        'font-family-name-quotes': 'always-where-required',


        /**
         * Font weight
         * http://stylelint.io/user-guide/rules/#font-weight
         */

        'font-weight-notation': null,


        /**
         * Function
         * http://stylelint.io/user-guide/rules/#function
         */

        'function-blacklist': null,
        'function-calc-no-unspaced-operator': true,
        'function-comma-newline-after': 'always-multi-line',
        'function-comma-newline-before': 'never-multi-line',
        'function-comma-space-after': 'always-single-line',
        'function-comma-space-before': 'never',
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-parentheses-newline-inside': 'always-multi-line',
        'function-parentheses-space-inside': 'never-single-line',
        'function-url-quotes': ['always', {
            except: ['empty']
        }],
        'function-whitelist': null,
        'function-whitespace-after': 'always',


        /**
         * Number
         * http://stylelint.io/user-guide/rules/#number
         */

        'number-leading-zero': 'always',
        'number-max-precision': 3,
        'number-no-trailing-zeros': true,


        /**
         * String
         * http://stylelint.io/user-guide/rules/#string
         */

        'string-no-newline': true,
        'string-quotes': 'single',


        /**
         * Length
         * http://stylelint.io/user-guide/rules/#length
         */

        'length-zero-no-unit': true,


        /**
         * Time
         * http://stylelint.io/user-guide/rules/#time
         */

        //'time-no-imperceptible': true,


        /**
         * Unit
         * http://stylelint.io/user-guide/rules/#unit
         */

        'unit-blacklist': [
            'q',
            'pc',
            'pt'
        ],
        'unit-whitelist': null,


        /**
         * Value
         * http://stylelint.io/user-guide/rules/#value
         */

        'value-no-vendor-prefix': [true, {
            severity: 'warning'
        }],


        /**
         * Value list
         * http://stylelint.io/user-guide/rules/#value-list
         */

        'value-list-comma-newline-after': 'always-multi-line',
        'value-list-comma-newline-before': 'never-multi-line',
        'value-list-comma-space-after': 'always-single-line',
        'value-list-comma-space-before': 'never',


        /**
         * Custom property
         * http://stylelint.io/user-guide/rules/#custom property
         */

        'custom-property-no-outside-root': true,
        'custom-property-pattern': null,


        /**
         * Property
         * http://stylelint.io/user-guide/rules/#property
         */

        'property-blacklist': null,
        'property-no-vendor-prefix': true,
        'property-whitelist': null,


        /**
         * Declaration
         * http://stylelint.io/user-guide/rules/#declaration
         */

        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-colon-newline-after': null,
        'declaration-colon-space-after': 'always',
        'declaration-colon-space-before': 'never',
        'declaration-no-important': null,
        'declaration-property-unit-whitelist': {
            'font-size': [
                'em',
                'rem'
            ],
            'letter-spacing': [
                'em',
                'rem'
            ],
            'line-height': []
        },


        /**
         * Declaration block
         * http://stylelint.io/user-guide/rules/#declaration-block
         */

        'declaration-block-no-duplicate-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-properties-order': 'alphabetical',
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-semicolon-newline-before': 'never-multi-line',
        'declaration-block-semicolon-space-after': null,
        'declaration-block-semicolon-space-before': null,
        'declaration-block-single-line-max-declarations': null,
        'declaration-block-trailing-semicolon': 'always',


        /**
         * Block
         * http://stylelint.io/user-guide/rules/#block
         */

        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always',
        'block-closing-brace-space-after': null,
        'block-closing-brace-space-before': null,
        'block-no-empty': true,
        'block-no-single-line': true,
        'block-opening-brace-newline-after': 'always',
        'block-opening-brace-newline-before': null,
        'block-opening-brace-space-after': null,
        'block-opening-brace-space-before': 'always',


        /**
         * Selector
         * http://stylelint.io/user-guide/rules/#selector
         */

        'selector-class-pattern': null,
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-id-pattern': null,
        'selector-max-specificity': '0,4,1',
        'selector-no-attribute': null,
        'selector-no-combinator': null,
        'selector-no-id': true,
        'selector-no-type': null,
        // 'selector-no-type': [true, {
        //     ignore: ['descendant'],
        //     severity: 'warning'
        // }],
        'selector-no-universal': [true, {
            severity: 'warning'
        }],
        'selector-no-vendor-prefix': true,
        'selector-pseudo-element-colon-notation': 'double',
        'selector-root-no-composition': null,
        'selector-type-case': 'lower',


        /**
         * Selector list
         * http://stylelint.io/user-guide/rules/#selector-list
         */

        'selector-list-comma-newline-after': 'always',
        'selector-list-comma-newline-before': 'never-multi-line',
        'selector-list-comma-space-after': null,
        'selector-list-comma-space-before': null,


        /**
         * Root rule
         * http://stylelint.io/user-guide/rules/#root-rule
         */

        'root-no-standard-properties': true,


        /**
         * Rule
         * http://stylelint.io/user-guide/rules/#rule
         */

        'rule-nested-empty-line-before': ['always', {
            except: ['first-nested'],
            ignore: ['after-comment']
        }],
        'rule-non-nested-empty-line-before': ['always', {
            ignore: ['after-comment']
        }],


        /**
         * Media feature
         * http://stylelint.io/user-guide/rules/#media-feature
         */

        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-no-vendor-prefix': true,
        'media-feature-no-missing-punctuation': true,
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',


        /**
         * Custom media
         * http://stylelint.io/user-guide/rules/#custom-media
         */

        'custom-media-pattern': null,


        /**
         * Media query
         * http://stylelint.io/user-guide/rules/#media-query
         */

        'media-feature-parentheses-space-inside': 'never',


        /**
         * Media query list
         * http://stylelint.io/user-guide/rules/#media-query-list
         */

        'media-query-list-comma-newline-after': 'never-multi-line',
        'media-query-list-comma-newline-before': null,
        'media-query-list-comma-space-after': 'always-single-line',
        'media-query-list-comma-space-before': 'never',


        /**
         * At rule
         * http://stylelint.io/user-guide/rules/#at-rule
         */

        'at-rule-empty-line-before': ['always', {
            ignore: ['after-comment', 'all-nested']
        }],
        'at-rule-no-vendor-prefix': true,


        /**
         * Comment
         * http://stylelint.io/user-guide/rules/#comment
         */

        'comment-empty-line-before': ['always', {
            ignore: ['between-comments', 'stylelint-commands'],
            except: ['first-nested']
        }],
        'comment-whitespace-inside': 'always',


        /**
         * General / Sheet
         * http://stylelint.io/user-guide/rules/#general-sheet
         */

        'indentation': [4, {
            ignore: ['value']
        }],
        'max-empty-lines': 4,
        'max-line-length': [80, {
            severity: 'warning'
        }],
        'max-nesting-depth': 2,
        'no-browser-hacks': null,
        'no-descending-specificity': true,
        'no-duplicate-selectors': true,
        'no-eol-whitespace': true,
        'no-invalid-double-slash-comments': null,
        'no-missing-end-of-source-newline': true,
        //'no-unknown-animations': true,
        'no-unsupported-browser-features': null
        // Not working in Sublime Text reporting
        // 'no-unsupported-browser-features': [true, {
        //     browsers: 'last 2 versions',
        //     ignore: ['rem', 'vh'],
        //     severity: 'warning'
        // }]
    }
};

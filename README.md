# CM’s CSS Scaffolding

Hold on to your hats, documentation to come. Until then this is CM’s CSS
scaffolding—which is basically a CSS framework—that allows us to build UI

- efficiently;
- robust;
- faster;
- maintainable.

## Browser Support

See: https://campmon.com/wiki/display/DEV/Browser+Support+Policy+for+the+Campaign+Monitor+Product.


## TODO

### Core

- Test page for Normalise.
- Is this too opinionated for Normalise?

  ```scss
  summary::-webkit-details-marker {
      display: none;
  }
  ```
- Need to solidly test the following Form Normalise things:

  ```scss
  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font: inherit;
    margin: 0;
  }
  ```
  - *Remove inner padding and border in Firefox 4+*
  - *Address Firefox 4+ setting `line-height` on `input` using `!important` in
    the UA stylesheet.*
  - *Remove rounded corners that iOS applies to all `input` buttons, see:
     https://github.com/necolas/normalize.css/issues/178. And certain browsers
     e.g. Chrome, apply rounded corners to `select` lists.*
- Add this comment to the Base -> Forms:

  *Known limitation: by default, Chrome and Safari on OS X allow very limited
  styling of `select`, unless a `border` property is set.*

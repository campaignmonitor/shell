<img src="logo.png" alt="Shell logo" width="230">

A powerful, lightweight, mostly unopinionated, responsive friendly CSS library that provides a solid foundation for any UI build.

Built with &nbsp;&nbsp;:blue_heart:&nbsp;&nbsp; by
[Campaign Monitor](https://www.campaignmonitor.com/), which is why we say
*mostly unopinionated* :smile:.

A [docs website](http://campaignmonitor.github.io/shell/) is in the works, in
the meantime Shell's code is heavily documented.

If you would like to suggest any new additions or improvements to Shell, log
any issues or bugs, or just ask a question, please
[open a new GitHub issue](https://github.com/campaignmonitor/shell/issues) and
label it appropriately. If you would like to contribute see
[CONTRIBUTING.md](CONTRIBUTING.md).


# Install

```sh
npm install shell-csslib --save-dev
```

*There are other install options e.g. `git clone`, however, it's advised to
use a package manager like NPM to handle your third-party dependencies :+1:.*


# Setup

Once the `shell-csslib` NPM module is installed your project will look like
this:

```
project root/
└── node_modules/
    ├── shell-csslib/
```

Your master Sass stylesheet—we typically call ours `style.scss`—should be
set up like this:

```scss
@charset 'UTF-8';

/* ============================================================================
   MASTER STYLESHEET
   ========================================================================= */

/**
 * CONTENTS:
 *
 * 1. Your settings
 * 2. Shell CSS library
 * 3. Your styles
 *
 * N.B. the above order of sections #1 and #2 must be maintained otherwise Sass
 * will not compile!
 */




/* 1. Your settings incl. any Shell setting overrides
   ========================================================================= */

@import 'settings';




/* 2. Shell CSS library
   ========================================================================= */

/**
 * N.B. do not change the order of these partial imports!
 */

@import '~shell-csslib/src/settings';

@import '~shell-csslib/src/mixins-functions';

@import '~shell-csslib/src/normalise-reset';

@import '~shell-csslib/src/base';

@import '~shell-csslib/src/container';

@import '~shell-csslib/src/grid';

@import '~shell-csslib/src/helpers';




/* 3. Your styles
   ========================================================================= */

// Away you go!
```

Shell won't work without `_settings.scss` and `_mixins-functions.scss`, the
rest are optional.

## Example Architecture

```
project root/
├── css/
│   ├── components/
│   ├── vendor/
│   ├── _settings.scss
│   └── style.scss
└── node_modules/
    ├── shell-csslib/
```

## Dependencies

- [Sass](http://sass-lang.com/install) (either [Ruby](http://rubyinstaller.org/) or [LibSass](http://libsass.org/), *we recommend LibSass*).
- [Autoprefixer](https://github.com/postcss/autoprefixer).

    > [PostCSS](https://github.com/postcss/postcss) plugin to parse CSS and add vendor prefixes to CSS rules using values from [Can I Use](http://caniuse.com/).

    *We advise setting up Autoprefixer as part of your build process.*


# Docs and Tests

- [Test README.md](test/README.md)
- [Docs README.md](docs/README.md)


# Linting

[stylelint](http://stylelint.io/) is used for linting and Shell follows these
[CSS guidelines](https://github.com/chris-pearce/css-guidelines).

*Eventually linting will be setup as part of CI, see: #19.*


# Browser Support

- Chrome *(latest version)*
- Firefox *(latest version)*
- Opera *(latest version)*
- Safari *(latest version)*
- Edge *(latest version)*
- IE 10/11


# Versioning

Shell is maintained under the
[Semantic Versioning guidelines](http://semver.org/). We'll do our best to adhere to those guidelines and strive to maintain backwards compatibility.

See the [CHANGELOG](CHANGELOG.md).


# License

Copyright 2016 Campaign Monitor.

[View license](LICENSE).

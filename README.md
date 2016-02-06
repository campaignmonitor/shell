<img src="docs/src/_assets/img/logo.png" alt="Shell logo" width="230">

# What is Shell?

*Hold on to your hats, a docs website is in the works*, in the meantime Shell's
code is heavily documented.

In a nutshell this is Campaign Monitor's (CM) CSS Library that allows CM to build UI a lot faster and more consistently, plus makes our UI more robust and maintainable.

**☞ Shell is not at MAJOR version 1—very soon it will be, until then anything may change at any time therefore the library should not be considered stable ([see](http://semver.org/#spec-item-4)) ☜**

Feedback is welcome via [Issues](https://github.com/campaignmonitor/shell/issues).


# Install Shell

`npm shell-csslib`


# Linting & Guidelines

Shell is written and linted against these [guidelines](https://github.com/chris-pearce/css-guidelines).

Shell uses [stylelint](http://stylelint.io/) to lint all of the Shell source
files (`src/*.scss`) and all of the CSS in the `docs/` and `test/` folders.

Linting will be automated via CI, so when anyone pushes code to Shell it'll
automatically be linted against Shell's [guidelines](https://github.com/chris-pearce/css-guidelines) and also checked that Sass is compiling.

Linting will run in all of the Grunt tasks in `docs/` and `test/`. If you're
contributing to Shell and would like to lint against your updates and check
that Shell's Sass is compiling then run the following commands in your
Terminal:

- `cd test`
- `grunt testShell`

On watch:

- `cd test`
- `grunt testShellWatch`

Linting reporting in your text editor should work by reading the `.stylelintrc`
in the root, this'll require you to install the relevant linting plug-in for
your text editor. If you're using Sublime Text then install:

- [SublimeLinter](http://www.sublimelinter.com/en/latest/installation.html)
- [SublimeLinter-contrib-stylelint](https://github.com/kungfusheep/SublimeLinter-contrib-stylelint)

*Usually to see the reporting in Sublime Text you need to add the `-g` flag
for this command: `npm install postcss stylelint`, like this: `npm install postcss stylelint -g`.*

# Browser support

- Chrome
- Firefox
- Opera
- Safari
- Edge
- IE 10/11


# License

Copyright 2016 Campaign Monitor.

[View license](LICENSE).

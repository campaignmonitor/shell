# Contributing

Campaign Monitor gratefully welcomes contributions from the open-source community.

## Steps for contributing

- Create a [GitHub issue](https://github.com/campaignmonitor/shell/issues)
  (make sure it doesn't exist already) and label it appropriately. It's a good
  idea to wait a few days for some feedback before writing any code.
- [Fork](https://help.github.com/articles/fork-a-repo/) the Shell repository,
  make your changes, then create a [GitHub Pull Request](https://help.github.com/articles/using-pull-requests/) back to the Shell master
  branch for review. Your PR title should use the same title as its
  corresponding GitHub issue but prefixed with the issue number e.g.

    > Issue #71: Add a new Helper to remove responsive images

    In the PR description include:

    > This fixes #71

    Add a comment in the GitHub issue linking to the PR, so if the PR was
    number #72:

    > Fixed in #72
- If suitable for a visual test then create a [test](test/README.md).
- Make sure all Sass compiles (will be part of CI eventually):
  - `cd test`
  - `grunt testShell`
- Tested in all supported browsers, [see](README.md#browser-support).
- [Linted](README.md#linting).

## Keep it simple

Shell is written in [Sass](http://sass-lang.com/), which provides a lot of incredibly powerful features. However, Shell does not want to become a platform to showcase Sass' capabilities; all code that comes into Shell should be as simple and CSS-like as possible. In fact we plan to move away from Sass
in the not so distant future and use [PostCSS](http://postcss.org/) instead.

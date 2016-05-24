# Contributing

Campaign Monitor gratefully welcomes contributions from the open-source community.

Be respectful to one another and keep reviews of
[GitHub Pull Request](https://help.github.com/articles/using-pull-requests/)
(PR) on topic and always constructive :+1:.

## Steps for Contributing Code to Shell

- [ ] Create a [GitHub issue](https://github.com/campaignmonitor/shell/issues)
  (make sure it doesn't exist already) and be as detailed as possible
  (screenshots are good), and label it appropriately. It's a good idea to wait
  a few days for some feedback before writing any code.
- [ ] [Fork](https://help.github.com/articles/fork-a-repo/) the Shell
  repository, make your changes, then create a PR back to the Shell `master`
  branch for review. Your PR title should use the same title as its
  corresponding GitHub issue but prefixed with the issue number e.g.

    > Issue #71: Add a new Helper to remove responsive images

    In the PR description include:

    > This fixes #71

    Once the PR is merged (let's say the PR is number 72) then add the
    following in the corresponding GitHub issue:

    > Fixed in #72
- [ ] If suitable for a visual test then create a test, [see](test/README.md).
- [ ] Make sure all Sass compiles:
  - `cd test`
  - `grunt testShell`
- [ ] Test in all supported browsers, [see](README.md#browser-support).
- [ ] Passes linting, [see](README.md#linting).
- [ ] Bump the version number in the `.version` file then apply that version
  number to the `"version"` key in the `package.json` file. Versioning always
  needs to strictly adhere to [Semantic Versioning](http://semver.org/).
- [ ] Update the `CHANGELOG.md`. The format is always:
  - A H2 heading (## in markdown) for the version number plus the date.
  - A list item for each update, each item describes the update and references
    the corresponding Github issue within brackets at the end.

    **An example:**

    ```
    ## 1.3.0 (May 25, 2016)
    - Add a new Helper to remove responsive images (#71)
    - Add PR/Issue templates and .github folder (#15)
    ```

*Some of the above tasks will eventually be automated by CI, see: #19.*

## Keep it Simple

Shell is written in [Sass](http://sass-lang.com/), which provides a lot of incredibly powerful features. However, Shell does not want to become a platform to showcase Sass' capabilities; all code that comes into Shell should be as simple and CSS-like as possible. In fact we plan to move away from Sass
in the not so distant future and use [PostCSS](http://postcss.org/) instead.

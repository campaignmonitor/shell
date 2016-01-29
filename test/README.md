# Shell's Tests

All of Shell's tests to run against the source files (**src/**).

The test files are put together with [Assemble](http://assemble.io/)—same as the Shell docs.

## Install

To install the tests locally you'll need to [fork](https://help.github.com/articles/fork-a-repo/) the Shell repo, clone it, and install
all the dependencies. Once you've forked the repo crack open the Terminal and
do the following commands:

- `git clone [URL/of/your/fork]`
- `cd shell/tests`
- `npm install`

Once you're done with your changes issue a [Pull Request](https://help.github.com/articles/using-pull-requests/) back to the Shell master branch labelling it
appropriately.

## Grunt Tasks

- `grunt serve`
   Default Grunt task, use this when working on the test docs, will compile
   Sass and run the Assemble tasks, the test docs
   will be available in the browser on <http://localhost:9000>.
- `grunt compileShell`
   This will compile all of Shell's source files (**src/*.scss) to:
   **shell/dist/shell.css** including a minified version.
- `grunt compileShellWatch`
   This will compile all of Shell's source files (**src/*.scss) to:
   **shell/dist/shell.css** including a minified version, and watch for any changes to the Shell source files.

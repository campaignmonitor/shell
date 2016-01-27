# Shell's Docs

<https://shell.campmon.com>

## Install

To install the docs locally you'll need to `git clone` Shell, see the main
README.md's **Install** section for those instructions.

Once cloned crack open the Terminal and do the following commands:

- `cd docs` (assuming you're in the root of the *shell* folder)
- `npm install` (to install all the npm modules)
- `grunt serve` (run the Grunt tasks incl. launching the docs site in the browser on <http://localhost:8000>)

## Deploying

All files in the *dist* folder that are pushed to *origin/master* will be
automatically deployed to the Shell Docs website. Please make sure you have
thoroughly tested locally.

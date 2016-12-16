# Tests

Still being worked on, in the meantime here are some quick and instructions:

- `cd test`

- `npm install`

- `grunt`

  *Runs the default tasks and performs a watch on certain tasks, and makes the site available on <http://localhost:9000>.*
- `grunt build`

  *Runs the build tasks, final destination is the `dist/test` folder.*
- `grunt deploy`

  *Runs the build tasks, pushes the `dist/` folder to the remote `gh-pages` branch making it available at this GitHub Pages URL: <http://campaignmonitor.github.io/shell/test>.*
  **N.B.** we're using `dist/test` so we can have both the **test** and **docs** available at this GitHub Pages URL: <http://campaignmonitor.github.io/shell/>, **docs** sits in the root and **test** in the `test` sub-folder available at this URL: <http://campaignmonitor.github.io/shell/test>.
- `grunt testShell`

  *Testing the Sass in the Shell CSS library compiles.*

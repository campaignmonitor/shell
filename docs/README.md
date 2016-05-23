# Docs

Still being worked on, in the meantime here are some quick instructions:

- `cd docs`

- `npm install`

- `grunt`

  *Runs the default tasks and performs a watch on certain tasks, and makes the
  site available on <http://localhost:8000>.*
- `grunt build`

  *Runs the build tasks, final destination is the `dist` folder.*
- `grunt deploy`

  *Runs the build tasks, pushes the `dist/` folder to the remote `gh-pages`
  branch making it available at this GitHub Pages URL:
  <http://campaignmonitor.github.io/shell>.*

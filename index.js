var shell = require('./src/shell.scss');
var base = require('./src/_base.scss');
var grid = require('./src/_grid.scss');
var helpers = require('./src/_helpers.scss');
var mixins = require('./src/_mixins-functions.scss');
var normalise = require('./src/_normalise-reset.scss');
var settings = require('./src/_settings.scss');
var sideBySide = require('./src/_side-by-side-scss');


module.exports = {
    shell: shell,
    base: base,
    grid: grid,
    helpers: helpers,
    mixins: mixins,
    normalise: normalise,
    settings: settings,
    sideBySide: sideBySide
};


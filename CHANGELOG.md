# HEAD

## 2.1.0 (January 24, 2017)

* Added new modifiers to [Grid](https://github.com/campaignmonitor/shell/blob/master/src/_grid.scss) ([#102](https://github.com/campaignmonitor/shell/issues/102)).
* Added a new modifier to [Container](https://github.com/campaignmonitor/shell/blob/master/src/_container.scss) ([#100](https://github.com/campaignmonitor/shell/issues/100)).

## 2.0.0 (December 16, 2016)

* Updated the HiDPI units in `_settings.scss` and the `hidpi-bg-img` `@mixin` ([#88](https://github.com/campaignmonitor/shell/issues/88)).
* Updated the `h-hide-visually` Helper ([#87](https://github.com/campaignmonitor/shell/issues/87)).
* Updated print styles ([#83](https://github.com/campaignmonitor/shell/issues/83)).
* Removed the spinner from the `number` input type ([#82](https://github.com/campaignmonitor/shell/issues/82)).
* Made the base link styles into a `@mixin` ([#81](https://github.com/campaignmonitor/shell/issues/81)).
* Updated to latest [normalize.css](https://necolas.github.io/normalize.css/) ([#80](https://github.com/campaignmonitor/shell/issues/80)).
* Removed base `disabled`/`readonly` styles ([#79](https://github.com/campaignmonitor/shell/issues/79)).
* Applied Campaign Monitor CSS conventions via [stylelint](http://stylelint.io/), and updated stylelint to latest version. Also added a [Gulp task](README.md#linting) to lint all necessary `.scss` files ([#72](https://github.com/campaignmonitor/shell/issues/72)).
* Added a new Helper to remove responsive images ([#71](https://github.com/campaignmonitor/shell/issues/71)).

## 1.2.0 (September 9, 2016)

* Remove bottom margin from grid items in the last row of a grid when using the **Vertical Gutter** modifier. This is done by applying a negative bottom margin which equals the vertical gutter amount to the grid container.

## 1.1.0 (August 1, 2016)

* Removal of `line-height` rule for all text `<input>` elements and `<select>` and `<option>` elements.
* Added a new Grid modifier: **No wrap** `l-grid--nowrap`.
* Added a new Container modifier: **Full width** `l-container--full-width`.
* Added a new Helper: **Text word wrap and hyphenate** `h-text-wrap-word-and-hyphenate`.

## 1.0.0 (May 25, 2016)

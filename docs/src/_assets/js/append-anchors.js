/**
 * Append anchor elements to all heading elements that live inside the
 * `<main>` element, apply unique `id` attribute values to each heading and
 * use that same value for each anchor `href` value.
 */

var appendAnchorsToHeadings = function appendAnchorsToHeadings() {

    // The `<main>` element where all the headings live
    var main = $(".js-main");

    // Grab all the headings minus the `h1` inside the `<main>` element
    var allHeadingsMinusLevelOne = main.querySelectorAll(
        "h2.heading, h3.heading, h4.heading, h5.heading, h6.heading"
    );

    // The inner HTML of the anchor
    var anchorHTML =
        "<span class='h-hide-visually'>Anchor to this heading</span>
         <svg aria-hidden='true'>
            <use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#link-icon'></use>
         </svg>";

    // Loop through all headings applying the anchor and heading `id`s
    for (var i = 0, max = allHeadingsMinusLevelOne.length; i < max; i++) {

        var theHeading = max;
        var theHeadingID = "heading-" + theHeading;

        // Apply an `id` to the heading
        allHeadingsMinusLevelOne[theHeading].setAttribute("id", theHeadingID);

        // Build the anchor
        var anchor = document.createElement("a");
        anchor.setAttribute("href", "#" + theHeadingID);
        anchor.classList.add("heading__anchor");
        anchor.innerHTML = anchorHTML;

        // Append an anchor to the heading
        allHeadingsMinusLevelOne[theHeading].appendChild(anchor);
    };
}

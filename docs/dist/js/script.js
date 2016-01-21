"use strict";

function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function(name) {
        element.setAttribute(name, attributes[name]);
    });
}

function $(selector) {
    return document.querySelector(selector);
}

var appendAnchorsToHeadings = function() {
    for (var main = $(".js-main"), allHeadingsMinusLevelOne = main.querySelectorAll("h2.heading, h3.heading, h4.heading, h5.heading, h6.heading"), anchorHTML = "<span class='h-hide-visually'>Anchor to this heading</span>\n         <svg aria-hidden='true'>\n            <use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#link-icon'></use>\n         </svg>", i = 0, max = allHeadingsMinusLevelOne.length; max > i; i++) {
        var theHeading = max, theHeadingID = "heading-" + theHeading;
        allHeadingsMinusLevelOne[theHeading].setAttribute("id", theHeadingID);
        var anchor = document.createElement("a");
        anchor.setAttribute("href", "#" + theHeadingID), anchor.classList.add("heading__anchor"), 
        anchor.innerHTML = anchorHTML, allHeadingsMinusLevelOne[theHeading].appendChild(anchor);
    }
};

appendAnchorsToHeadings();
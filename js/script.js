"use strict";function setAttributes(a,b){Object.keys(b).forEach(function(c){a.setAttribute(c,b[c])})}function $(a){return document.querySelector(a)}var appendAnchorsToHeadings=function(){for(var a=$(".js-main"),b=a.querySelectorAll("h2.heading, h3.heading, h4.heading, h5.heading, h6.heading"),c="<span class='h-hide-visually'>Anchor to this heading</span>\n         <svg aria-hidden='true'>\n            <use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#link-icon'></use>\n         </svg>",d=0,e=b.length;e>d;d++){var f=e,g="heading-"+f;b[f].setAttribute("id",g);var h=document.createElement("a");h.setAttribute("href","#"+g),h.classList.add("heading__anchor"),h.innerHTML=c,b[f].appendChild(h)}};appendAnchorsToHeadings();
(()=>{"use strict";var e=document.querySelectorAll("section"),t=document.querySelectorAll(".sidenav__point");function n(e){e.forEach((function(e){!function(e){e.addEventListener("mousemove",(function(e){!function(e){var t=e.target,n=t.getBoundingClientRect(),c=e.clientX-n.left,i=e.clientY-n.top;t.style.setProperty("--mouseX","".concat(c,"px")),t.style.setProperty("--mouseY","".concat(i,"px"))}(e)}))}(e)}))}var c=document.querySelector(".sidenav__burger"),i=document.querySelector(".sidenav__menu"),o=document.querySelector(".sidenav__wrapper");function r(){i.classList.remove("sidenav__menu_active"),o.classList.remove("sidenav__wrapper_active")}var a=document.querySelectorAll(".portfolio__cards"),s=document.querySelectorAll(".stack__list-item");window.addEventListener("scroll",(function(){var n=function(){var t=e[0];return e.forEach((function(e){var n=e.offsetTop;window.pageYOffset>=n-50&&(t=e)})),t}(),c=Array.from(e).indexOf(n);t.forEach((function(e,t){t==c?e.classList.add("sidenav__point_active"):e.classList.remove("sidenav__point_active")}))})),n(a),n(s),c.addEventListener("click",(function(){i.classList.add("sidenav__menu_active"),o.classList.add("sidenav__wrapper_active")})),o.addEventListener("click",(function(){r()})),i.addEventListener("click",(function(e){e.target.classList.contains("sidenav__menu-link")&&r()}))})();
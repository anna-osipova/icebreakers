(()=>{"use strict";var e=function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},t=function(e){return e.slice(e.indexOf("*")+1).trim()},n=["default-theme","mint-theme","ghost-theme","black-white-theme"],r=function(e){var t=document.querySelector("html");t.classList.forEach((function(e){return t.classList.remove(e)})),t.classList.add(e),window.localStorage.setItem("theme",e)},o=function(){return Math.floor(2*Math.random())-1};new Promise((function(e){var t=window.localStorage.getItem("theme")||"default-theme",o=n.includes(t)?t:"default-theme";r(o),e()})).then((function(){return fetch("./QUESTIONS.md").then((function(e){return e.text()}))})).then((function(n){return n.split("\n").filter((function(e){return e.match(/^\s*\*/)})).map(t).reduce((function(t,n){var r=t[0],o=t[1];return n.startsWith("Credit:")?[function(e){var t=RegExp(/Credit:\s*\[(.*)\]\((.*)\)/gm).exec(e);return{name:t[1],href:t[2]}}(n),o]:[r,e(e([],o),[{question:n,credit:r}])]}),[{name:"",href:""},[]])[1]})).then((function(e){return e.sort(o)})).then((function(e){var t=0,o=function(e){document.querySelector("#question-display").innerHTML=e.question;var t=document.querySelector("#credit-link");t.href=e.credit.href,t.innerHTML=e.credit.name};o(e[0]),document.querySelector("#reload-button").addEventListener("click",(function(){history.pushState(t,e[t].question),t=(t+1)%e.length,o(e[t])})),document.querySelector("#change-theme-button").addEventListener("click",(function(){document.querySelector("body").classList.add("themed");var e=document.querySelector("html").classList[0],t=n.indexOf(e),o=-1===t?0:(t+1)%n.length,i=n[o];r(i)})),window.onpopstate=function(){var t=window.history.state;o(e[t])}}))})();
(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[23],{625:function(e,t){!function(e,t){for(var r in t)e[r]=t[r]}(t,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"deepObjectsMerge",(function(){return n})),r.d(t,"getColor",(function(){return s})),r.d(t,"getStyle",(function(){return i})),r.d(t,"hexToRgb",(function(){return l})),r.d(t,"hexToRgba",(function(){return d})),r.d(t,"makeUid",(function(){return u})),r.d(t,"omitByKeys",(function(){return b})),r.d(t,"pickByKeys",(function(){return p})),r.d(t,"rgbToHex",(function(){return f}));var n=function e(t,r){for(var n=0,o=Object.keys(r);n<o.length;n++){var a=o[n];r[a]instanceof Object&&Object.assign(r[a],e(t[a],r[a]))}return Object.assign(t||{},r),t},o=function(){for(var e={},t=document.styleSheets,r="",n=t.length-1;n>-1;n--){for(var o=t[n].cssRules,a=o.length-1;a>-1;a--)if(".ie-custom-properties"===o[a].selectorText){r=o[a].cssText;break}if(r)break}return(r=r.substring(r.lastIndexOf("{")+1,r.lastIndexOf("}"))).split(";").forEach((function(t){if(t){var r=t.split(": ")[0],n=t.split(": ")[1];r&&n&&(e["--".concat(r.trim())]=n.trim())}})),e},a=function(){return Boolean(document.documentMode)&&document.documentMode>=10},c=function(e){return e.match(/^--.*/i)},i=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(c(e)&&a()){var n=o();t=n[e]}else t=window.getComputedStyle(r,null).getPropertyValue(e).replace(/^\s/,"");return t},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,r="--".concat(e),n=i(r,t);return n||e},l=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var t,r,n;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),r=parseInt(e.slice(2,3),16),n=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(r,", ").concat(n,")")},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var r,n,o,a=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!a)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(r=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16)):(r=parseInt(e.slice(1,2),16),n=parseInt(e.slice(2,3),16),o=parseInt(e.slice(3,5),16)),"rgba(".concat(r,", ").concat(n,", ").concat(o,", ").concat(t/100,")")},u=function(){return"uid-"+Math.random().toString(36).substr(2)},b=function(e,t){for(var r={},n=Object.keys(e),o=0;o<n.length;o++)!t.includes(n[o])&&(r[n[o]]=e[n[o]]);return r},p=function(e,t){for(var r={},n=0;n<t.length;n++)r[t[n]]=e[t[n]];return r},f=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var t=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!t)throw new Error("".concat(e," is not a valid rgb color"));var r="0".concat(parseInt(t[1],10).toString(16)),n="0".concat(parseInt(t[2],10).toString(16)),o="0".concat(parseInt(t[3],10).toString(16));return"#".concat(r.slice(-2)).concat(n.slice(-2)).concat(o.slice(-2))},g={deepObjectsMerge:n,getColor:s,getStyle:i,hexToRgb:l,hexToRgba:d,makeUid:u,omitByKeys:b,pickByKeys:p,rgbToHex:f};t.default=g}]))},626:function(e,t,r){"use strict";var n=r(44),o=r(20),a=r(158),c=(r(1),r(625)),i=r(627),s=function(e){var t=e.borderColor,r=e.backgroundColor,s=e.pointHoverBackgroundColor,l=e.dataPoints,d=e.label,u=e.pointed,b=Object(a.a)(e,["borderColor","backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"]),p=s||("transparent"!==r?r:t),f=[{data:l,borderColor:Object(c.getColor)(t),backgroundColor:Object(c.getColor)(r),pointBackgroundColor:Object(c.getColor)(p),pointHoverBackgroundColor:Object(c.getColor)(p),label:d}],g={scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,l)-5,max:Math.max.apply(Math,l)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},j={scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},h=function(){var e=u?g:j;return Object.assign({},e,{maintainAspectRatio:!1,legend:{display:!1}})}(),m=Object(c.deepObjectsMerge)(f,b.datasets||{}),x=Object(c.deepObjectsMerge)(h,b.options||{});return Object(o.jsx)(i.c,Object(n.a)(Object(n.a)({},b),{},{datasets:m,options:x,labels:d}))};s.defaultProps={borderColor:"rgba(255,255,255,.55)",backgroundColor:"transparent",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=s},628:function(e,t,r){"use strict";var n=r(44),o=r(20),a=r(158),c=(r(1),r(625)),i=r(627),s=function(e){var t=e.backgroundColor,r=e.pointHoverBackgroundColor,s=e.dataPoints,l=e.label,d=(e.pointed,Object(a.a)(e,["backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"])),u=[{data:s,backgroundColor:Object(c.getColor)(t),pointHoverBackgroundColor:Object(c.getColor)(r),label:l,barPercentage:.5,categoryPercentage:1}],b={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}};return Object(o.jsx)(i.a,Object(n.a)(Object(n.a)({},d),{},{datasets:u,options:b,labels:l}))};s.defaultProps={backgroundColor:"rgba(0,0,0,.2)",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=s},688:function(e,t,r){"use strict";r.r(t);var n=r(20),o=(r(1),r(619)),a=r(622),c=r(626);r(628);t.default=function(){return Object(n.jsxs)(o.wb,{children:[Object(n.jsx)(o.u,{sm:"6",lg:"3",children:Object(n.jsx)(o.Ub,{color:"gradient-primary",header:"200",text:"Carbon Credit Balance",footerSlot:Object(n.jsx)(c.a,{pointed:!0,className:"c-chart-wrapper mt-3 mx-3",style:{height:"70px"},dataPoints:[65,59,84,84,51,55,40],pointHoverBackgroundColor:"primary",label:"Members",labels:"months"}),children:Object(n.jsxs)(o.z,{children:[Object(n.jsx)(o.E,{color:"transparent",children:Object(n.jsx)(a.a,{name:"cil-settings"})}),Object(n.jsxs)(o.D,{className:"pt-0",placement:"bottom-end",children:[Object(n.jsx)(o.C,{children:"Action"}),Object(n.jsx)(o.C,{children:"Another action"}),Object(n.jsx)(o.C,{children:"Something else here..."}),Object(n.jsx)(o.C,{disabled:!0,children:"Disabled action"})]})]})})}),Object(n.jsx)(o.u,{sm:"6",lg:"3",children:Object(n.jsx)(o.Ub,{color:"gradient-warning",header:"MYR 20000",text:"Fiat Balance",footerSlot:Object(n.jsx)(c.a,{className:"mt-3",style:{height:"70px"},backgroundColor:"rgba(255,255,255,.2)",dataPoints:[78,81,80,45,34,12,40],options:{elements:{line:{borderWidth:2.5}}},pointHoverBackgroundColor:"warning",label:"Members",labels:"months"}),children:Object(n.jsxs)(o.z,{children:[Object(n.jsx)(o.E,{color:"transparent",children:Object(n.jsx)(a.a,{name:"cil-settings"})}),Object(n.jsxs)(o.D,{className:"pt-0",placement:"bottom-end",children:[Object(n.jsx)(o.C,{children:"Action"}),Object(n.jsx)(o.C,{children:"Another action"}),Object(n.jsx)(o.C,{children:"Something else here..."}),Object(n.jsx)(o.C,{disabled:!0,children:"Disabled action"})]})]})})})]})}}}]);
//# sourceMappingURL=23.e0542ab6.chunk.js.map
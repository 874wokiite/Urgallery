(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{227:function(t,e,o){"use strict";o.d(e,"a",(function(){return l}));var r=o(233),l=(o(238),r.a.initializeApp({projectId:"object-museum"}).firestore())},266:function(t,e,o){"use strict";o.r(e);var r=o(227),l={data:function(){return{title:"",type:"",color:""}},methods:{saveAlbum:function(){var t=this;r.a.collection("albums").add({title:this.title,type:this.type,color:this.color}).then((function(e){t.$router.push("/albums/"+e.id)}))}}},n=o(26),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bgy w-screen h-screen"},[o("div",{staticClass:"w-screen h-16"}),t._v(" "),o("h2",{staticClass:"px-20 my-10"},[t._v("Create a new object")]),t._v(" "),o("div",{staticClass:"m-10 flex items-center justify-center"},[o("div",{staticClass:"flex flex-col justify-center"},[o("div",{staticClass:"m-4"},[o("label",{staticClass:"mr-4",attrs:{for:"title"}},[t._v("Title")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"border-2 rounded border-gray-900",attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"m-4"},[o("label",{staticClass:"mr-4",attrs:{for:"type"}},[t._v("Object")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"border-2 bg-white rounded border-gray-900",attrs:{id:"type"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.type=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"bulb"}},[t._v("Bulb")]),t._v(" "),o("option",{attrs:{value:"crow"}},[t._v("Crow")]),t._v(" "),o("option",{attrs:{value:"flower"}},[t._v("Flower")]),t._v(" "),o("option",{attrs:{value:"frog"}},[t._v("Frog")]),t._v(" "),o("option",{attrs:{value:"heart"}},[t._v("Heart")]),t._v(" "),o("option",{attrs:{value:"moth"}},[t._v("Moth")])])]),t._v(" "),o("div",{staticClass:"m-4"},[o("label",{staticClass:"mr-4",attrs:{for:"color"}},[t._v("Color")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],staticClass:"border-2 bg-white rounded border-gray-900",attrs:{id:"color"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.color=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"#A1D5CC"}},[t._v("blue")]),t._v(" "),o("option",{attrs:{value:"#D5B7A1"}},[t._v("red")]),t._v(" "),o("option",{attrs:{value:"#CDD5A1"}},[t._v("yellow")])])])]),t._v(" "),o("div",{staticClass:"m-10 h-64 w-64"},["frog"==t.type?o("IllustrationsFrog",{attrs:{color:t.color}}):t._e(),t._v(" "),"flower"==t.type?o("IllustrationsFlower",{attrs:{color:t.color}}):t._e(),t._v(" "),"bulb"==t.type?o("IllustrationsBulb",{attrs:{color:t.color}}):t._e(),t._v(" "),"crow"==t.type?o("IllustrationsCrow",{attrs:{color:t.color}}):t._e(),t._v(" "),"moth"==t.type?o("IllustrationsMoth",{attrs:{color:t.color}}):t._e(),t._v(" "),"heart"==t.type?o("IllustrationsHeart",{attrs:{color:t.color}}):t._e()],1),t._v(" "),o("div",[o("button",{staticClass:"mS-5 py-3 px-10",on:{click:t.saveAlbum}},[t._v("Save")])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IllustrationsFrog:o(229).default,IllustrationsFlower:o(236).default,IllustrationsBulb:o(230).default,IllustrationsCrow:o(237).default,IllustrationsMoth:o(231).default,IllustrationsHeart:o(232).default})}}]);
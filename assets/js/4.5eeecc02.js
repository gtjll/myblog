(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{256:function(t,n,a){},262:function(t,n,a){"use strict";var i=a(256);a.n(i).a},263:function(t,n,a){},264:function(t,n,a){},265:function(t,n,a){},274:function(t,n,a){"use strict";var i=a(263);a.n(i).a},275:function(t,n,a){"use strict";var i=a(264);a.n(i).a},276:function(t,n,a){"use strict";var i=a(265);a.n(i).a},282:function(t,n,a){"use strict";a.r(n);a(1);var i=a(17),e={data:function(){return{page:0,comp:null}},created:function(){this.page=this.$pagination.paginationIndex+1},mounted:function(){var t=this;a.e(2).then(a.t.bind(null,280,7)).then(function(n){t.comp=n.default})},methods:{clickCallback:function(t){var n=this.$pagination.getSpecificPageLink(t-1);this.$router.push(n)}}},o=(a(274),a(6)),s=Object(o.a)(e,function(){var t=this,n=t.$createElement,a=t._self._c||n;return t.comp?a(t.comp,{tag:"component",attrs:{"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":"Prev","next-text":"Next","container-class":"pagination","page-class":"page-item"},model:{value:t.page,callback:function(n){t.page=n},expression:"page"}}):t._e()},[],!1,null,null,null).exports,c=(a(275),Object(o.a)({},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?a("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("Prev")]):t._e(),t._v(" "),t.$pagination.hasNext?a("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("Next")]):t._e()],1)},[],!1,null,null,null).exports,{components:{NavigationIcon:i.g,ClockIcon:i.a},data:function(){return{paginationComponent:null}},created:function(){this.paginationComponent=this.getPaginationComponent()},computed:{pages:function(){return this.$pagination.pages}},methods:{getPaginationComponent:function(){return s}}}),r=(a(276),a(262),Object(o.a)(c,function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"base-list-layout"}},[a("div",{staticClass:"ui-posts"},t._l(t.pages,function(n){return a("div",{staticClass:"ui-post"},[a("div",{staticClass:"ui-post-title"},[a("NavLink",{attrs:{link:n.path}},[t._v(t._s(n.title))])],1),t._v(" "),a("div",{staticClass:"ui-post-summary"},[t._v("\n        "+t._s(n.frontmatter.summary||n.summary)+"\n        ")]),t._v(" "),n.frontmatter.author?a("div",{staticClass:"ui-post-author"},[a("NavigationIcon"),t._v(" "),a("span",[t._v(t._s(n.frontmatter.author)+" in "+t._s(n.frontmatter.location))])],1):t._e(),t._v(" "),n.frontmatter.date?a("div",{staticClass:"ui-post-date"},[a("ClockIcon"),t._v(" "),a("span",[t._v(t._s(new Date(n.frontmatter.date.trim()).toDateString()))])],1):t._e()])}),0),t._v(" "),t.$pagination.length>1&&t.paginationComponent?a(t.paginationComponent,{tag:"component"}):t._e()],1)},[],!1,null,null,null));n.default=r.exports}}]);
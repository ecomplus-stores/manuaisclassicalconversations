(window.webpackJsonp=window.webpackJsonp||[]).push([[47,46],{166:function(t,s,a){"use strict";a.d(s,"a",(function(){return i})),a.d(s,"b",(function(){return r}));var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"product-card",class:{"product-card--inactive":t.body._id&&!t.isActive,"product-card--small":t.isSmall},attrs:{"data-product-id":t.body._id,"data-sku":t.body.sku},on:{mouseover:function(s){t.isHovered=!0}}},[a("transition",{attrs:{"enter-active-class":t.transitionClass}},[t.isLoading?t._e():a("section",[t._t("discount-tag",(function(){return[t.isActive&&t.discount>0?a("span",{staticClass:"product-card__offer-stamp"},[a("i",{staticClass:"i-arrow-down"}),t._v(" "),a("b",[t._v(t._s(t.discount))]),t._v("% ")]):t._e()]}),null,{discount:t.discount}),t._t("stamps"),t._t("body",(function(){return[a("a-link",{staticClass:"product-card__link",attrs:{href:"/"+t.body.slug,title:t.name}},[t._t("header"),a("div",{staticClass:"product-card__pictures"},[t.body.pictures&&t.body.pictures.length?t._l(t.body.pictures.slice(0,2).reverse(),(function(s,i){return 1===t.body.pictures.length||1===i||t.isHovered?a("a-picture",{key:i,staticClass:"product-card__picture",attrs:{src:s,"can-calc-height":!1}}):t._e()})):a("a-picture",{staticClass:"product-card__picture"})],2)],2)]})),a("div",{staticClass:"product-card__content-group"},[a("a-link",{staticClass:"product-card__link",attrs:{href:"/"+t.body.slug,title:t.name}},[t._t("title",(function(){return[a(t.headingTag,{tag:"component",staticClass:"product-card__name"},[t._v(" "+t._s(t.name)+" ")])]}))],2),t._t("rating",(function(){return[t._m(0)]})),t.body.available&&t.body.visible?t.isInStock?t.isWithoutPrice?t._t("without-price",(function(){return[a("p",{staticClass:"badge badge-info mt-auto"},[t._v(" "+t._s(t.i19uponRequest)+" ")])]})):[t._t("prices",(function(){return[a("a-prices",{staticClass:"product-card__prices",attrs:{product:t.body,"installments-option":t.installmentsOption,"discount-option":t.discountOption}})]}))]:t._t("out-of-stock",(function(){return[a("p",{staticClass:"badge badge-dark mt-auto"},[t._v(" "+t._s(t.i19outOfStock)+" ")])]})):t._t("unavailable",(function(){return[a("p",{staticClass:"badge badge-warning mt-auto"},[t._v(" "+t._s(t.i19unavailable)+" ")])]})),t._t("footer",(function(){return[t.footerHtml?a("div",{domProps:{innerHTML:t._s(t.footerHtml)}}):t._e()]}))],2)],2)]),t.isLoading?[t._t("default"),t.error?a("div",{staticClass:"alert alert-warning small",attrs:{role:"alert"}},[t._v(" "+t._s(t.error)+" ")]):t._e()]:t._e(),a("div",{ref:"quickview"})],2)},r=[function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{staticClass:"product-card__rating",attrs:{"data-sku":t.body.sku},domProps:{innerHTML:t._s(t.ratingHtml)}})}]}},0,[0,2,4,3,25,24,48]]);
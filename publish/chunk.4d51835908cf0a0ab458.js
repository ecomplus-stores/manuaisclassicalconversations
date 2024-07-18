(window.webpackJsonp=window.webpackJsonp||[]).push([[10,46,47],{166:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product-card",class:{"product-card--inactive":t.body._id&&!t.isActive,"product-card--small":t.isSmall},attrs:{"data-product-id":t.body._id,"data-sku":t.body.sku},on:{mouseover:function(e){t.isHovered=!0}}},[i("transition",{attrs:{"enter-active-class":t.transitionClass}},[t.isLoading?t._e():i("section",[t._t("discount-tag",(function(){return[t.isActive&&t.discount>0?i("span",{staticClass:"product-card__offer-stamp"},[i("i",{staticClass:"i-arrow-down"}),t._v(" "),i("b",[t._v(t._s(t.discount))]),t._v("% ")]):t._e()]}),null,{discount:t.discount}),t._t("stamps"),t._t("body",(function(){return[i("a-link",{staticClass:"product-card__link",attrs:{href:"/"+t.body.slug,title:t.name}},[t._t("header"),i("div",{staticClass:"product-card__pictures"},[t.body.pictures&&t.body.pictures.length?t._l(t.body.pictures.slice(0,2).reverse(),(function(e,s){return 1===t.body.pictures.length||1===s||t.isHovered?i("a-picture",{key:s,staticClass:"product-card__picture",attrs:{src:e,"can-calc-height":!1}}):t._e()})):i("a-picture",{staticClass:"product-card__picture"})],2)],2)]})),i("div",{staticClass:"product-card__content-group"},[i("a-link",{staticClass:"product-card__link",attrs:{href:"/"+t.body.slug,title:t.name}},[t._t("title",(function(){return[i(t.headingTag,{tag:"component",staticClass:"product-card__name"},[t._v(" "+t._s(t.name)+" ")])]}))],2),t._t("rating",(function(){return[t._m(0)]})),t.body.available&&t.body.visible?t.isInStock?t.isWithoutPrice?t._t("without-price",(function(){return[i("p",{staticClass:"badge badge-info mt-auto"},[t._v(" "+t._s(t.i19uponRequest)+" ")])]})):[t._t("prices",(function(){return[i("a-prices",{staticClass:"product-card__prices",attrs:{product:t.body,"installments-option":t.installmentsOption,"discount-option":t.discountOption}})]}))]:t._t("out-of-stock",(function(){return[i("p",{staticClass:"badge badge-dark mt-auto"},[t._v(" "+t._s(t.i19outOfStock)+" ")])]})):t._t("unavailable",(function(){return[i("p",{staticClass:"badge badge-warning mt-auto"},[t._v(" "+t._s(t.i19unavailable)+" ")])]})),t._t("footer",(function(){return[t.footerHtml?i("div",{domProps:{innerHTML:t._s(t.footerHtml)}}):t._e()]}))],2)],2)]),t.isLoading?[t._t("default"),t.error?i("div",{staticClass:"alert alert-warning small",attrs:{role:"alert"}},[t._v(" "+t._s(t.error)+" ")]):t._e()]:t._e(),i("div",{ref:"quickview"})],2)},a=[function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"product-card__rating",attrs:{"data-sku":t.body.sku},domProps:{innerHTML:t._s(t.ratingHtml)}})}]},224:function(t,e,i){"use strict";i(7);var s=i(30),a=i(28),o=i(34),n=i(73),c=i(24),r=i(5),l=i(227),p=i(230),u=i.n(p),d=i(237);const m="object"==typeof window&&window.localStorage,h="shipping-to-zip",_=t=>{const e={};return["product_id","variation_id","sku","name","quantity","inventory","currency_id","currency_symbol","price","final_price","dimensions","weight"].forEach((i=>{void 0!==t[i]&&(e[i]=t[i])})),e};var y={name:"ShippingCalculator",components:{CleaveInput:u.a,ShippingLine:d.a},props:{zipCode:String,canSelectServices:Boolean,canInputZip:{type:Boolean,default:!0},countryCode:{type:String,default:a.$ecomConfig.get("country_code")},shippedItems:{type:Array,default:()=>[]},shippingResult:{type:Array,default:()=>[]},shippingData:{type:Object,default:()=>({})},skipAppIds:Array,shippingAppsSort:{type:Array,default:()=>window.ecomShippingApps||[]}},data:()=>({localZipCode:null,localShippedItems:[],amountSubtotal:null,shippingServices:[],selectedService:null,hasPaidOption:!1,freeFromValue:null,isScheduled:!1,retryTimer:null,isWaiting:!1,hasCalculated:!1}),computed:{i19add$1ToEarn:()=>Object(o.a)(s.j),i19calculateShipping:()=>Object(o.a)(s.E),i19zipCode:()=>Object(o.a)(s.ye),i19freeShipping:()=>Object(o.a)(s.Cb).toLowerCase(),cleaveOptions(){return"BR"===this.countryCode?{blocks:[5,3],delimiter:"-"}:{blocks:[30]}},freeFromPercentage(){return this.hasPaidOption&&this.amountSubtotal<this.freeFromValue?Math.round(100*this.amountSubtotal/this.freeFromValue):null},shippingServicesFinal(){return this.shippingServices.filter((t=>1253===t.app_id&&("5050"==t.service_code||"20133"==t.service_code||"6060"==t.service_code)||1253!==t.app_id))},productionDeadline(){let t=0;return this.shippedItems.forEach((e=>{if(e.quantity&&e.production_time){const{days:i,cumulative:s}=e.production_time,a=s?i*e.quantity:i;a>t&&(t=a)}})),t}},methods:{formatMoney:n.a,updateZipCode(){this.$emit("update:zip-code",this.localZipCode)},parseShippingOptions(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.freeFromValue=null,this.shippingServices=[],t.length&&(t.forEach((e=>{const{validated:i,error:s,response:a}=e;if(!i||s)return;if(this.skipAppIds&&this.skipAppIds.includes(e.app_id)&&t.filter((t=>{let{app_id:e}=t;return!this.skipAppIds.includes(e)})).length)return;a.shipping_services.forEach((t=>{this.shippingServices.push({app_id:e.app_id,...t})}));const o=a.free_shipping_from_value;o&&(!this.freeFromValue||this.freeFromValue>o)&&(this.freeFromValue=o)})),this.shippingServices.length?(this.shippingServices=this.shippingServices.sort(((t,e)=>{const i=t.shipping_line.total_price-e.shipping_line.total_price;return i<0?-1:i>0?1:t.shipping_line.delivery_time&&e.shipping_line.delivery_time&&t.shipping_line.delivery_time.days<e.shipping_line.delivery_time.days?-1:1})),this.hasPaidOption=Boolean(this.shippingServices.find((t=>t.shipping_line.total_price||t.shipping_line.price))),Array.isArray(this.shippingAppsSort)&&this.shippingAppsSort.length&&(this.shippingServices=Object(l.a)(this.shippingServices,this.shippingAppsSort)),this.setSelectedService(0)):e?this.scheduleRetry():this.fetchShippingServices(!0))},scheduleRetry(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;clearTimeout(this.retryTimer),this.retryTimer=setTimeout((()=>{this.localZipCode&&!this.shippingServices.length&&this.shippedItems.length&&this.fetchShippingServices(!0)}),t)},fetchShippingServices(t){this.isScheduled||(this.isScheduled=!0,setTimeout((()=>{this.isScheduled=!1;const{storeId:e}=this;let i="/calculate_shipping.json";this.skipAppIds&&this.skipAppIds.length&&(i+="?skip_ids=",this.skipAppIds.forEach(((t,e)=>{e>0&&(i+=","),i+=`${t}`})));const s={...this.shippingData,to:{zip:this.localZipCode,...this.shippingData.to}};this.localShippedItems.length&&(s.items=this.localShippedItems,s.subtotal=this.amountSubtotal),this.isWaiting=!0,Object(r.c)({url:i,method:"POST",storeId:e,data:s}).then((e=>{let{data:i}=e;return this.parseShippingOptions(i.result,t)})).catch((e=>{t||this.scheduleRetry(4e3),console.error(e)})).finally((()=>{this.hasCalculated=!0,this.isWaiting=!1}))}),this.hasCalculated?150:50))},submitZipCode(){this.updateZipCode(),m&&m.setItem(h,this.localZipCode),this.fetchShippingServices()},setSelectedService(t){if(this.canSelectServices){this.$emit("select-service",this.shippingServices[t]),this.selectedService=t;const e=window.dataLayer.find((t=>{let{event:e}=t;return"eec.checkout"===e}));window.dataLayer.push({event:"add_shipping_info",ecommerce:{currency:"BRL",shipping_method:this.shippingServices[t]&&this.shippingServices[t].label,value:this.shippingServices[t]&&this.shippingServices[t].shipping_line&&this.shippingServices[t].shipping_line.total_price,items:e&&e.ecommerce&&e.ecommerce.checkout&&e.ecommerce.checkout.products}})}}},watch:{shippedItems:{handler(){setTimeout((()=>{this.localShippedItems=this.shippedItems.map(_);const{amountSubtotal:t}=this;this.amountSubtotal=this.shippedItems.reduce(((t,e)=>t+Object(c.a)(e)*e.quantity),0),this.hasCalculated&&(this.canSelectServices||t!==this.amountSubtotal||!this.shippingServices.length&&!this.isWaiting)&&this.fetchShippingServices()}),50)},deep:!0,immediate:!0},localZipCode(t){"BR"===this.countryCode&&8===t.replace(/\D/g,"").length&&this.submitZipCode()},zipCode:{handler(t){t&&(this.localZipCode=t)},immediate:!0},skipAppIds(){this.fetchShippingServices()},shippingResult:{handler(t){t.length&&this.parseShippingOptions(t)},immediate:!0}},created(){if(!this.zipCode&&m){const t=m.getItem(h);t&&(this.localZipCode=t)}}};e.a=y},235:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shipping-calculator"},[t.canInputZip?i("form",{staticClass:"shipping-calculator__form",on:{submit:function(e){return e.preventDefault(),t.submitZipCode.apply(null,arguments)}}},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"shipping-calculator-zip"}},[t._v(" "+t._s(t.i19calculateShipping)+" ")]),i("div",{staticClass:"input-group"},[i("cleave-input",{staticClass:"form-control shipping-calculator__input",attrs:{type:"tel",id:"shipping-calculator-zip",placeholder:t.i19zipCode,"aria-label":t.i19zipCode,options:t.cleaveOptions},model:{value:t.localZipCode,callback:function(e){t.localZipCode=e},expression:"localZipCode"}}),i("div",{staticClass:"input-group-append"},[i("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit","aria-label":t.i19calculateShipping}},[i("i",{staticClass:"i-shipping-fast"})])])],1)])]):t._e(),i("div",{staticClass:"shipping-calculator__services"},[i("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp"}},[t.isWaiting?i("div",{key:"waiting",staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[t._v("Loading...")])]):i("div",{key:"services",staticClass:"list-group"},t._l(t.shippingServicesFinal,(function(e,s){return i(t.canSelectServices?"a":"div",{key:s,tag:"component",staticClass:"list-group-item",class:{"list-group-item-action":t.canSelectServices,active:t.canSelectServices&&t.selectedService===s},attrs:{href:t.canSelectServices&&"#"},on:{click:function(e){return e.preventDefault(),t.setSelectedService(s)}}},[i("span",{staticClass:"shipping-calculator__option"},[t._t("option",(function(){return[i("shipping-line",{attrs:{"shipping-line":e.shipping_line,"production-deadline":t.productionDeadline,"data-service-code":e.service_code,serviceCode:e.service_code}}),i("small",[t._v(t._s(e.label))])]}),null,{service:e})],2)])})),1)]),i("transition",{attrs:{"enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},[t.freeFromPercentage?i("div",{staticClass:"shipping-calculator__free-from-value"},[t._t("free-from-value",(function(){return[i("span",[t._v(" "+t._s(t.i19add$1ToEarn.replace("$1",t.formatMoney(t.freeFromValue-t.amountSubtotal)))+" "),i("strong",[t._v(t._s(t.i19freeShipping))])]),t.freeFromPercentage>=33?i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar progress-bar-striped",style:"width: "+t.freeFromPercentage+"%",attrs:{role:"progressbar","aria-valuenow":t.freeFromPercentage,"aria-valuemin":"0","aria-valuemax":"100"}},[i("span",[t._v(" "+t._s(t.i19freeShipping)+" "),i("i",{staticClass:"i-truck mx-1"}),i("strong",[t._v(t._s(t.freeFromPercentage)+"%")])])])]):t._e()]}),null,{amountSubtotal:t.amountSubtotal,freeFromValue:t.freeFromValue,freeFromPercentage:t.freeFromPercentage})],2):t._e()])],1)])},a=[]},278:function(t,e,i){"use strict";var s=i(30),a=i(34),o=i(22),n=i(24),c=i(73),r=i(84),l=i(11),p=i(236),u=i(180),d=i(273),m=i(436),h=i(325),_=i(238),y=i(237),g=i(256),f=i(428),v=i(323),C=i(322),b=i(327),S=i(407),k={name:"EcCheckout",components:{DiscountApplier:d.a,PointsApplier:m.a,LoginBlock:h.a,ShippingLine:y.a,ShippingCalculator:_.a,RecommendedItems:g.a,PaymentMethods:f.a,AccountForm:v.a,AccountAddresses:C.a,EcSummary:b.a},props:{mergeDictionary:{type:Object,default:()=>({})},cartUrl:{type:String,default:"/app/#/cart"},amount:{type:Object,default:()=>({})},customer:{type:Object,default:()=>({})},checkoutStep:{type:Number,default:1},isGuestCheckout:{type:Boolean,default:()=>!0===window.ecomGuestCheckout},isExternalAuth:{type:Boolean,default:()=>Boolean(window.$firebaseConfig&&window.$firebaseConfig.authDomain)},canRecommendItems:{type:Boolean,default:!0},canHideSummary:Boolean,shippingZipCode:String,shippingService:Object,skipShippingApps:{type:Array,default:()=>[]},paymentGateway:Object,discountCoupon:String,notes:String,ecomCart:{type:Object,default:()=>l.a}},data(){return{checkoutAppId:1,toCheckoutStep:this.checkoutStep,customerEmail:this.customer.main_email,isUserIdentified:Boolean(this.customer.main_email),editAccount:!1,editShippingService:!this.shippingService,localZipCode:this.shippingZipCode,selectedAddressId:null,isEditingAddr:!1,paymentGateways:[],loyaltyPointsApplied:{},loyaltyPointsAmount:0,hasMoreOffers:!1,summaryVisible:!1}},computed:{i19addToCart:()=>Object(a.a)(s.l),i19additionalComments:()=>Object(a.a)(s.n),i19buyAlsoMsg:()=>Object(a.a)(s.B),i19checkout:()=>Object(a.a)(s.L),i19orderNotesInputMsg:()=>Object(a.a)(s.Pc),i19proceed:()=>Object(a.a)(s.gd),i19selectedOffers:()=>Object(a.a)(s.Pd),modulesPayload:()=>u.a,dictionary(){return{Bag:S.b,BackToCart:S.a,Buyer:S.c,ChangeShippingMethod:S.d,ContactPhone:S.e,Continue:S.f,Delivery:S.g,Discount:S.h,DocNumber:S.i,Logout:S.j,MyAccount:S.k,Payment:S.l,ProceedToPayment:S.m,RegisterToBuy:S.n,Summary:S.o,...this.mergeDictionary}},cart(){return this.ecomCart.data},hasBuyerInfo(){const{customer:t}=this;return this.customerEmail&&t.name&&t.name.given_name&&t.registry_type&&t.doc_number&&t.phones&&t.phones.length},localCustomer:{get(){return this.customer},set(t){this.$emit("update:customer",t),this.$nextTick((()=>{this.editAccount=!1}))}},localDiscountCoupon:{get(){return this.discountCoupon},set(t){this.$emit("update:discount-coupon",t)}},paymentAmount(){return{...this.amount,total:this.amount.total-this.loyaltyPointsAmount}},localNotes:{get(){return this.notes},set(t){this.$emit("update:notes",t)}},shownCheckoutStep(){return!this.hasBuyerInfo||this.editAccount?this.isGuestCheckout?1:0:Math.min(this.enabledCheckoutStep,this.toCheckoutStep)},shippingAddress(){const{addresses:t}=this.customer;return t&&t.find((t=>(this.selectedAddressId===t._id||t.default)&&t.province_code&&!!(t.street&&t.city||t.line_address&&t.line_address.endsWith("*"))))},enabledCheckoutStep(){return this.hasBuyerInfo?this.shippingAddress&&this.shippingService?2:1:this.isGuestCheckout?1:0},paymentsListKey(){let t="pay";return this.localDiscountCoupon&&(t+=`-${this.localDiscountCoupon}`),["freight","subtotal"].forEach((e=>{this.amount[e]>0&&(t+=`-${this.amount[e]}`)})),t}},methods:{name:o.a,price:n.a,formatMoney:c.a,img:t=>Object(r.a)(t,null,"small"),i18n(t){return Object(a.a)(this.dictionary[t])},login(t){t.checkLogin()&&(this.customerEmail=t.getCustomer().main_email,this.$emit("login",t))},autoMoveStep(){"activeElement"in document&&document.activeElement.blur(),this.$nextTick((()=>{document.body.offsetWidth>=768?this.toCheckoutStep=this.enabledCheckoutStep:!this.enabledCheckoutStep||this.toCheckoutStep>1||(this.toCheckoutStep=1)}))},updateZipCode(){this.shippingAddress&&(this.localZipCode=this.shippingAddress.zip)},selectAddress(t){this.$emit("address-selected",t),this.selectedAddressId=t,this.$nextTick(this.updateZipCode)},goToTop(){this.$nextTick((()=>{Object(p.a)(this.$el,-15)}))},goToOffers(){Object(p.a)(this.$refs.offers.$el)},selectPaymentGateway(t){this.$emit("update:payment-gateway",t),2!==this.checkoutStep||this.paymentGateway||this.goToTop()},checkout(t){if(this.loyaltyPointsAmount)for(let e=0;e<this.paymentGateways.length;e++)if("loyalty_points"===this.paymentGateways[e].payment_method.code){const i=this.loyaltyPointsAmount/this.amount.total;return this.$emit("checkout",[{...t,amount_part:1-i},{...this.paymentGateways[e],loyalty_points_applied:this.loyaltyPointsApplied,amount_part:i}])}this.$emit("checkout",t)},toggleSummarySm(){this.summaryVisible=!this.summaryVisible}},watch:{customerEmail(t){t&&(this.customer.main_email!==t&&this.$emit("update:customer",{...this.customer,main_email:t}),this.isUserIdentified=!0)},"customer.main_email"(t){t&&(this.customerEmail=t)},localZipCode(){this.editShippingService=!0},skipShippingApps(){this.toCheckoutStep=1},toCheckoutStep(t){this.$emit("update:checkout-step",t),this.goToTop()},enabledCheckoutStep(){this.autoMoveStep()},paymentsListKey:{handler(){this.paymentGateways=window.ecomPaymentGateways||[]},immediate:!0}},created(){this.autoMoveStep(),this.updateZipCode(),this.ecomCart.on("addItem",(()=>{this.checkoutAppId++,this.$nextTick((()=>{window.scroll({top:this.$el.offsetTop-15,behavior:"smooth"})}))}))},mounted(){}};e.a=k},440:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"checkout"},[i("transition-group",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"d-none"}},[t.shownCheckoutStep?i("div",{key:"app"+t.checkoutAppId,staticClass:"checkout__app",attrs:{"data-current-step":t.shownCheckoutStep,"data-enabled-step":t.enabledCheckoutStep}},[i("div",{staticClass:"row"},[i("div",{staticClass:"checkout-left-col",class:t.canHideSummary?"col":"col-lg-8"},[i("nav",{staticClass:"checkout__steps d-none"},[i("a",{staticClass:"checkout__step",attrs:{href:t.cartUrl,title:t.i18n("BackToCart")}},[i("i",{staticClass:"i-arrow-left"}),i("span",{staticClass:"d-none d-md-inline"},[i("i",{staticClass:"i-shopping-cart"})])]),t._l([null,"Delivery","Payment"],(function(e,s){return e?i("a",{staticClass:"checkout__step",class:"checkout__step--"+(t.shownCheckoutStep===s?"current":t.enabledCheckoutStep<s?"disabled":t.shownCheckoutStep>s?"past":"next"),attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.toCheckoutStep=s}}},[i("small",[t._v(t._s(s))]),t._v(" "+t._s(t.i18n(e))+" ")]):t._e()}))],2),i("div",{staticClass:"row"},[i("div",{staticClass:"checkout__col col-md-12"},[i("div",{staticClass:"first_step"},[t.isGuestCheckout?i("div",{staticClass:"checkout__account mb-3"},[i("account-form",{attrs:{customer:t.localCustomer,"is-short":!0,"is-guest-access":!0,"has-submit-btn":!t.hasBuyerInfo,"btn-text":t.i19proceed},on:{"update:customer":function(e){t.localCustomer=e}}})],1):t._e(),i("div",{staticClass:"mb-md-5 mb-4"},[i("h3",[t._v(" Endereço de entrega ")]),i("account-addresses",{attrs:{customer:t.localCustomer,"zip-code":t.shippingZipCode,"form-btn-text":t.i19proceed,"can-show-form":!0},on:{"update:customer":function(e){t.localCustomer=e},"select-address":t.selectAddress,"show-form":function(e){return t.isEditingAddr=e}}})],1),t.shippingAddress?i("div",{staticClass:"checkout__shipping mb-md-5 mb-4"},[i("h3",[t._v(" Forma de envio ")]),i("transition-group",{attrs:{"enter-active-class":"animated fadeInDown"}},[t.cart.items.length?i("shipping-calculator",{key:"shipTo"+t.localZipCode,attrs:{"can-select-services":!0,"shipped-items":t.cart.items,"zip-code":t.localZipCode,"can-input-zip":!1,"skip-app-ids":t.skipShippingApps},on:{"select-service":function(e){return t.$emit("update:shipping-service",e)}}}):t._e()],1)],1):t._e()]),i("div",{staticClass:"mb-md-5 mb-4"},[i("h3",[t._v("Observações")]),i("div",{staticClass:"checkout__notes"},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"d-none",attrs:{for:"order-notes"}},[t._v(t._s(t.i19additionalComments))]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.localNotes,expression:"localNotes"}],staticClass:"form-control",attrs:{placeholder:t.i19orderNotesInputMsg,id:"order-notes",rows:"3",maxlength:"255"},domProps:{value:t.localNotes},on:{input:function(e){e.target.composing||(t.localNotes=e.target.value)}}})])])]),i("div",{staticClass:"mb-md-5 mb-4"},[i("discount-applier",{staticClass:"checkout__discount mt-4",attrs:{amount:t.amount,"coupon-code":t.localDiscountCoupon,"modules-payload":t.modulesPayload,customer:t.customer,"is-attention-wanted":""},on:{"update:couponCode":function(e){t.localDiscountCoupon=e},"update:coupon-code":function(e){t.localDiscountCoupon=e},"set-discount-rule":function(e){return t.$emit("set-discount-rule",e)}}})],1)]),i("div",{staticClass:"checkout__col col-md-12 pt-0",class:t.enabledCheckoutStep?"ativao":"desativao"},[i("h3",[t._v(" Forma de pagamento ")]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("transition",{attrs:{"enter-active-class":"animated fadeInRight slow","leave-active-class":"animated fadeOutRight fast position-absolute"}},[i("div",{class:2!==t.shownCheckoutStep?"d-block d-md-block":null},[i("payment-methods",{key:t.paymentsListKey,attrs:{amount:t.paymentAmount,customer:t.localCustomer,"payment-gateways":t.paymentGateways},on:{"update:paymentGateways":function(e){t.paymentGateways=e},"update:payment-gateways":function(e){t.paymentGateways=e},"select-gateway":t.selectPaymentGateway,checkout:t.checkout}})],1)])],1)])])]),t.canHideSummary&&t.enabledCheckoutStep>1?i("discount-applier",{staticClass:"checkout__discount mt-4",attrs:{amount:t.amount,"coupon-code":t.localDiscountCoupon,"modules-payload":t.modulesPayload,customer:t.customer,"is-attention-wanted":""},on:{"update:couponCode":function(e){t.localDiscountCoupon=e},"update:coupon-code":function(e){t.localDiscountCoupon=e},"set-discount-rule":function(e){return t.$emit("set-discount-rule",e)}}}):t._e()],1),t.canHideSummary?t._e():i("div",{staticClass:"col-lg-4 checkout__info"},[i("button",{staticClass:"d-md-none d-flex checkout-toggle-resume",class:t.summaryVisible?"inactive":"active",attrs:{type:"button"},on:{click:t.toggleSummarySm}},[t._v(" "+t._s(t.cart.items.length)+" produto(s) "),i("small",[t._v(t._s(t.summaryVisible?"Fechar":"Ver Resumo"))])]),i("div",{staticClass:"checkout__summary",class:t.summaryVisible?"d-block d-md-block":"d-none d-md-block"},[i("ec-summary",{attrs:{amount:t.amount,items:t.cart.items,buyer:t.customer,shippingAddress:t.shippingAddress,"can-show-price-options":!(t.paymentGateway&&t.paymentGateway.app_id),"paid-in-advance":t.loyaltyPointsAmount},on:{"click:account":function(e){t.editAccount=!0}},scopedSlots:t._u([{key:"more-offers",fn:function(){return[i("transition",{attrs:{"enter-active-class":"animated fadeInDown"}},[t.hasMoreOffers?i("button",{staticClass:"checkout__btn-offers btn btn-sm btn-link",on:{click:t.goToOffers}},[i("i",{staticClass:"i-plus mr-1"}),t._v(" "+t._s(t.i19selectedOffers)+" ")]):t._e()])]},proxy:!0},{key:"amount-custom",fn:function(){return[t.enabledCheckoutStep>1?i("points-applier",{staticClass:"checkout__loyalty-points",attrs:{"points-applied":t.loyaltyPointsApplied,"points-amount":t.loyaltyPointsAmount,"max-points-amount":Math.min(t.amount.subtotal-5,t.amount.total/2)},on:{"update:pointsApplied":function(e){t.loyaltyPointsApplied=e},"update:points-applied":function(e){t.loyaltyPointsApplied=e},"update:pointsAmount":function(e){t.loyaltyPointsAmount=e},"update:points-amount":function(e){t.loyaltyPointsAmount=e}}}):t._e()]},proxy:!0}],null,!1,995081779)},[(t.enabledCheckoutStep,t._e())],2),i("div",{staticClass:"checkout__back"},[i("a",{staticClass:"btn btn-sm btn-light",attrs:{href:t.cartUrl}},[i("i",{staticClass:"i-chevron-left mr-1"}),t._v(" "+t._s(t.i18n("BackToCart"))+" ")])])],1)])]),t.canRecommendItems?[i("recommended-items",{ref:"offers",staticClass:"mt-5 pt-lg-3 mx-xl-3",attrs:{"sort-order":"offers","can-load-more":!1,"row-class-name":"row mt-4","product-card-props":{buyText:t.i19addToCart}},on:{"recommend-items":function(e){t.hasMoreOffers=!0}},scopedSlots:t._u([{key:"title",fn:function(){return[i("h3",[t._v(" "+t._s(t.i19buyAlsoMsg)+" "),i("small",{staticClass:"d-block text-muted"},[t._v(" "+t._s(t.i19selectedOffers)+" ")])])]},proxy:!0}],null,!1,1215317570)})]:t._e()],2):t.isUserIdentified?i("div",{key:"account",staticClass:"checkout__account"},[t._t("account",(function(){return[i("p",{staticClass:"lead"},[t._v(" "+t._s(t.i18n("RegisterToBuy"))+": "),t.isExternalAuth?i("small",{staticClass:"d-block"},[t._v(" Já possui conta? "),i("a",{attrs:{href:"/app/account#/checkout"}},[t._v("Receber link de acesso por e-mail")])]):t._e()]),i("account-form",{attrs:{customer:t.localCustomer,"is-short":!0,"btn-text":t.i19proceed},on:{"update:customer":function(e){t.localCustomer=e}}})]}))],2):i("div",{key:"login"},[t._t("login",(function(){return[i("login-block",{attrs:{"customer-email":t.customerEmail,"can-fetch-oauth":!t.isExternalAuth},on:{login:t.login,update:function(e){t.isUserIdentified=!0},"update:customerEmail":function(e){t.customerEmail=e},"update:customer-email":function(e){t.customerEmail=e}},scopedSlots:t._u([t.isExternalAuth?{key:"login-methods",fn:function(e){return[(0,e.confirmAccount)()?i("p",[t._v(" Ou entre com "),i("a",{attrs:{href:"/app/account#/checkout"}},[t._v("link de acesso por e-mail")])]):t._e()]}}:null],null,!0)})]}))],2)])],1)},a=[]},441:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"payment"},[i("transition-group",{attrs:{"enter-active-class":"animated fadeIn slow"}},[t.isWaiting?i("div",{key:"waiting",staticClass:"payment__loading"},[i("div",{staticClass:"spinner-grow",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[t._v("Loading...")])])]):t.paymentGateways.length?i("div",{key:"gateways",staticClass:"list-group"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-5"},t._l(t.paymentGateways,(function(e,s){return t.checkListedGateway(e,s)?i("a",{key:e.app_id+e.payment_method.code+s,staticClass:"payment__gateway list-group-item list-group-item-action",class:t.paymentGateway.app_id==e.app_id&&t.paymentGateway.label==e.label?"active_ payment__gateway--"+e.app_id:"payment__gateway--"+e.app_id,attrs:{href:"#","data-intermediator":e.intermediator&&e.intermediator.code,"data-label":e.label},on:{click:function(e){e.preventDefault(),t.selectedGateway=t.selectedGateway===s?-1:s}}},[i("span",{staticClass:"payment__head"},[i("span",{staticClass:"payment__title"},[t.paymentGateway.app_id==e.app_id&&t.paymentGateway.label==e.label?i("span",{staticClass:"payment__back",attrs:{"aria-label":t.i19changePaymentMethod}},[i("i",{staticClass:"i-chevron-left"})]):t._e(),t._v(" "+t._s("recurrence"!==e.type?e.label:t.i19subscription)+" ")]),i("span",[i("span",{staticClass:"payment__badges"},["recurrence"===e.type?i("span",{staticClass:"payment__recurrence mr-1",attrs:{title:t.i19recurrent}},[i("i",{staticClass:"i-history"})]):t._e(),e.discount&&e.discount.value>0?i("span",{staticClass:"badge badge-success payment__discount"},["percentage"===e.discount.type?[t._v(" "+t._s(e.discount.value)+"% ")]:i("span",{staticClass:"payment__discount-value"},[t._v(" "+t._s(t.formatMoney(e.discount.value))+" ")]),t._v(" "+t._s(t.i19ofDiscount)+" "),"freight"===e.discount.apply_at?[t._v(" "+t._s(t.i19onFreight)+" ")]:t._e()],2):e.installment_option?i("span",{staticClass:"badge badge-info payment__installment"},[t._v(" "+t._s(t.i19upTo)+" "+t._s(e.installment_option.number)+"x "),e.installment_option.tax?t._e():[t._v(" "+t._s(t.i19interestFree)+" ")]],2):t._e()]),i("span",{staticClass:"payment__icon"},[i("i",{staticClass:"fas",class:"fa-"+t.gatewayIcon(e)})])])]),t.canShowGatewayIcon?[e.icon?i("img",{staticClass:"payment__stamp",attrs:{src:e.icon}}):e.intermediator&&e.intermediator.name?i("small",{staticClass:"payment__intermediator"},[t._v(" "+t._s(e.intermediator.name)+" ")]):t._e()]:t._e()],2):t._e()})),0),i("div",{staticClass:"col"},[i("transition",{attrs:{"enter-active-class":"animated fadeIn"}},[t.selectedGateway>-1?i("div",{staticClass:"payment__method list-group-item"},[t.paymentGateway.text?i("p",{staticClass:"payment__text",domProps:{innerHTML:t._s(t.paymentGateway.text)}}):t._e(),t.jsClient&&t.jsClient.container_html?i("div",{ref:"gatewayContainer",attrs:{"data-loaded":t.jsClientLoad.toString(),"data-amount":JSON.stringify(t.amount)},domProps:{innerHTML:t._s(t.jsClient.container_html)}}):[i("p",{staticClass:"payment__total"},[t._v(" "+t._s(t.i19total)+": "),i("strong",[t._v(t._s(t.formatMoney(t.amount.total)))])]),t.shouldUseCardForm?i("credit-card-form",{attrs:{"gateway-options":t.cardFormGatewayOptions,"gateway-options-label":t.i19chooseSubscriptionPeriod,amount:t.amount,"check-holder":t.customerName,"is-company":t.isCompany,"installment-options":t.paymentGateway.installment_options,"js-client":t.jsClient,"js-client-load":t.jsClientLoad},on:{"select-gateway":t.onCardFormSelectGateway,checkout:t.checkout}}):i("button",{staticClass:"btn btn-success btn-lg btn-block payment__pay",on:{click:t.handleCheckout}},[i("i",{staticClass:"i-check mr-1"}),t._v(" "+t._s("banking_billet"===t.paymentGateway.payment_method.code?t.i19generateBillet:t.i19checkout)+" ")])]],2):t._e()])],1)])]):i("div",{key:"empty",staticClass:"payment__empty"},[i("p",[t._v(t._s(t.i19anyPaymentMethodMsg))]),i("button",{staticClass:"btn btn-primary",on:{click:function(){return t.fetchPaymentGateways()}}},[t._v(" "+t._s(t.i19tryAgain)+" ")])])])],1)},a=[]}}]);
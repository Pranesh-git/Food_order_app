(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3wRYQ",summary:"CartItem_summary__3dwN4",price:"CartItem_price__33AMN",amount:"CartItem_amount__2-Xd8",actions:"CartItem_actions__2cIcy"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1j5Og",total:"Cart_total__Uw3t_",actions:"Cart_actions__3wSjE","button--alt":"Cart_button--alt__2Pdya",button:"Cart_button__3b5bn"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__2wz_S",icon:"HeaderCartButton_icon__2b4N6",badge:"HeaderCartButton_badge__2yhhi",bump:"HeaderCartButton_bump__f-CQu"}},,function(e,t,n){e.exports={meal:"MealItem_meal__36NB1",description:"MealItem_description__2fIdY",price:"MealItem_price__3IPtJ"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2FSm0",modal:"Modal_modal__33pF-","slide-down":"Modal_slide-down__sY-NE"}},,function(e,t,n){e.exports={header:"Header_header__1iX_g","main-image":"Header_main-image__2o29c"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__2TZWT"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2J6t2","meals-appear":"AvailableMeals_meals-appear__3-MeI"}},function(e,t,n){e.exports={card:"Card_card__1MkCp"}},function(e,t,n){e.exports={form:"MealItemForm_form__1rXEE"}},function(e,t,n){e.exports={input:"Input_input__2HOMD"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),s=n.n(r),o=n.p+"static/media/meals.ded8f832.jpg",l=n(13),d=n.n(l),m=n(0),u=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},j=n(8),b=n.n(j),O=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),p=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(O).items,o=s.reduce((function(e,t){return e+t.amount}),0),l="".concat(b.a.button," ").concat(a?b.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(m.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(m.jsx)("span",{className:b.a.icon,children:Object(m.jsx)(u,{})}),Object(m.jsx)("span",{children:"Your Cart"}),Object(m.jsx)("span",{className:b.a.badge,children:o})]})},x=function(e){return Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsxs)("header",{className:d.a.header,children:[Object(m.jsx)("h1",{children:"React Meals"}),Object(m.jsx)(p,{onClick:e.openCart})]}),Object(m.jsx)("div",{className:d.a["main-image"],children:Object(m.jsx)("img",{src:o,alt:"A table full of delicious food!"})})]})},h=n(15),_=n.n(h),f=function(){return Object(m.jsxs)("section",{className:_.a.summary,children:[Object(m.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(16),C=n.n(v),N=n(17),g=n.n(N),A=function(e){return Object(m.jsx)("div",{className:g.a.card,children:e.children})},y=n(10),I=n.n(y),M=n(18),k=n.n(M),w=n(2),F=n(19),H=n.n(F),B=s.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:H.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(w.a)({ref:t},e.input))]})})),E=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(m.jsxs)("form",{className:k.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(m.jsx)(B,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(m.jsx)("button",{children:"+ Add"}),!a&&Object(m.jsx)("p",{children:"Please enter a valid amount(1-5)."})]})},S=function(e){var t=Object(r.useContext)(O),n="\u20b9".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:I.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("div",{className:I.a.description,children:e.description}),Object(m.jsx)("div",{className:I.a.price,children:n})]}),Object(m.jsx)("div",{children:Object(m.jsx)(E,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},R=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german speciality",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Litti Chokha",description:"Speciality of Bihar",price:5}],D=function(){var e=R.map((function(e){return Object(m.jsx)(S,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(m.jsx)("section",{className:C.a.meals,children:Object(m.jsx)(A,{children:Object(m.jsx)("ul",{children:e})})})},T=function(e){return Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)(f,{}),Object(m.jsx)(D,{})]})},P=n(11),z=n.n(P),Y=function(e){return Object(m.jsx)("div",{className:z.a.backdrop,onClick:e.onClick})},J=function(e){return Object(m.jsx)("div",{className:z.a.modal,children:Object(m.jsx)("div",{className:z.a.content,children:e.children})})},V=document.getElementById("overlays"),X=function(e){return Object(m.jsxs)(r.Fragment,{children:[c.a.createPortal(Object(m.jsx)(Y,{onClick:e.onClose}),V),c.a.createPortal(Object(m.jsx)(J,{children:e.children}),V)]})},Q=n(4),q=n.n(Q),L=function(e){var t="\u20b9".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:q.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:q.a.summary,children:[Object(m.jsx)("span",{className:q.a.price,children:t}),Object(m.jsxs)("span",{className:q.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:q.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},U=n(5),W=n.n(U),Z=function(e){var t=Object(r.useContext)(O),n="\u20b9".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(w.a)(Object(w.a)({},e),{},{amount:1}))},s=Object(m.jsx)("ul",{className:W.a["cart-items"],children:t.items.map((function(e){return Object(m.jsx)(L,{name:e.name,price:e.price,amount:e.amount,onAdd:i.bind(null,e),onRemove:c.bind(null,e.id)},e.id)}))});return Object(m.jsxs)(X,{onClose:e.closeCart,children:[s,Object(m.jsxs)("div",{className:W.a.total,children:[Object(m.jsx)("span",{children:"Total Amount"}),Object(m.jsx)("span",{children:n})]}),Object(m.jsxs)("div",{className:W.a.actions,children:[Object(m.jsx)("button",{className:W.a["button--alt"],onClick:e.closeCart,children:"Close"}),a&&Object(m.jsx)("button",{className:W.a.button,children:"Order"})]})]})},G=n(14),K={items:[],totalAmount:0},$=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(w.a)(Object(w.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(G.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],d=e.totalAmount-l.price;if(l.amount>1){var m=Object(w.a)(Object(w.a)({},l),{},{amount:l.amount-1});(s=Object(G.a)(e.items))[o]=m}else s=e.items.filter((function(e){return e.id!==t.id}));return{items:s,totalAmount:d}}return K},ee=function(e){var t=Object(r.useReducer)($,K),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(m.jsx)(O.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)(ee,{children:[Object(m.jsx)(x,{openCart:function(){a(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(T,{})}),n&&Object(m.jsx)(Z,{closeCart:function(){a(!1)}})]})};c.a.render(Object(m.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.085c2153.chunk.js.map
"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[628],{5628:function(n,t,e){e.r(t),e.d(t,{default:function(){return on}});var r,o,i,a,c,u,s,l,m,d,f,p,h,x,b=e(1413),g=e(5913),Z=e(4808),j=e(5048),v=e(9439),y=e(2791),w=e(5861),k=e(4687),P=e.n(k),z=e(5705),C=e(168),S=e(6444),A=(0,S.ZP)(z.l0)(r||(r=(0,C.Z)(["\n  width: 400px;\n  align-items: center;\n  padding: ","px ","px;\n  border-radius: ",";\n  border: "," ",";\n  color: ",";\n"])),(function(n){return n.theme.space[6]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.border}),(function(n){return n.theme.colors.accent})),_=S.ZP.span(o||(o=(0,C.Z)(["\n  font-family: ",";\n  font-weight: ",";\n  font-size: ",";\n  color: ",";\n  transition: transform ",";\n"])),(function(n){return n.theme.fonts.body}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.transition.main})),F=(S.ZP.p(i||(i=(0,C.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.text})),(0,S.ZP)(z.gN)(a||(a=(0,C.Z)(["\n  width: 100%;\n  border-color: ",";\n  margin-bottom: ","px;\n  padding: ","px;\n"])),(function(n){return n.theme.colors.border}),(function(n){return n.theme.space[6]}),(function(n){return n.theme.space[3]}))),T=S.ZP.button(c||(c=(0,C.Z)(["\n  width: 190px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: ","px;\n  text-align: center;\n  text-transform: uppercase;\n  outline: none;\n  border: "," ",";\n  border-radius: ",";\n  box-shadow: 0 0 20px ",";\n  color: ",";\n  background: ",";\n  background-size: 200% auto;\n  cursor: pointer;\n  transition: ",";\n  &:hover {\n    color: ",";\n    text-decoration: none;\n    background: ",";\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.transparent}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.transition.main}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary})),J=(S.ZP.span(u||(u=(0,C.Z)(["\n  font-weight: ",";\n  font-family: ",";\n  font-size: ",";\n  color: ",";\n"])),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fonts.monospace}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.red})),e(184)),L=function(n){var t=n.initialValues,e=void 0===t?{name:"",number:""}:t,r=n.onSubmit,o=n.btnText,i=function(){var n=(0,w.Z)(P().mark((function n(t,e){return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r(t);case 2:e.setSubmitting(!1),e.resetForm();case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}();return(0,J.jsx)(z.J9,{initialValues:e,onSubmit:i,children:function(n){var t=n.isSubmitting;return(0,J.jsxs)(A,{id:"form",children:[(0,J.jsx)(_,{children:"Name"}),(0,J.jsx)(z.Bc,{name:"name"}),(0,J.jsx)(F,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,J.jsx)(_,{children:"Number"}),(0,J.jsx)(z.Bc,{name:"number"}),(0,J.jsx)(F,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,J.jsx)(T,{type:"submit",disabled:t,children:o})]})}})},N=S.ZP.div(s||(s=(0,C.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),W=S.ZP.div(l||(l=(0,C.Z)(["\n  position: relative;\n  padding: 24px;\n  background-color: #fff;\n"]))),D=S.ZP.h2(m||(m=(0,C.Z)(["\n  margin-bottom: ","px;\n  font-family: ",";\n  font-size: ",";\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.fonts.heading}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.normal})),B=S.ZP.button(d||(d=(0,C.Z)(["\n display: flex;\n    align-items: center;\n    justify-content: center;\n\n    position: absolute;\n    cursor: pointer;\n    top: 10px;\n    right: 10px;\n\n    width: 20px;\n    height: 20px;\n   \n    border-radius: 50%;\n    box-shadow: 0px 6px 6px 0px var(--button-bg-cl);\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    background-color: var(--main-bg-cl);\n\n    font-size: 16px;\n    color: var(--main-text-cl);\n\n    transition: all 250ms linear;\n\n    &:focus,\n    &:hover {\n        background-color: var(--button-bg-cl);\n        border: 1px solid transparent;\n        fill: var(--main-bg-cl);\n        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)"]))),M=e(9085),V=e(9468),q=function(n){var t=n.closeModal,e=n.id,r=(0,g.Jx)().data,o=(0,g.wv)(),i=(0,v.Z)(o,1)[0],a=function(){return t(!1)},c=r.filter((function(n){return n.id===e})),u=function(){var n=(0,w.Z)(P().mark((function n(t){return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i((0,b.Z)({id:e},t));case 3:M.Am.success("Yoohoo, contact is updated"),a(),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}();return(0,J.jsx)(N,{children:(0,J.jsxs)(W,{children:[(0,J.jsx)(D,{children:"Contact Update"}),r&&(0,J.jsx)(L,{initialValues:{name:c[0].name,number:c[0].number},btnText:"Save",onSubmit:u}),(0,J.jsx)(B,{type:"button",onClick:a,children:(0,J.jsx)(V.ySC,{size:32})})]})})},I=e(8402),U=S.ZP.div(f||(f=(0,C.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: ",";\n"])),(function(n){return n.theme.space[2]})),Y=S.ZP.p(p||(p=(0,C.Z)(["\n  font-weight: ",";\n  text-transform: lowercase;\n  margin: 0;\n  margin-left: 10px;\n"])),(function(n){return n.theme.fontWeights.normal}));function K(){return(0,J.jsxs)(U,{role:"alert",children:[(0,J.jsx)(I.s5,{strokeColor:"#3f51b5",strokeWidth:"3",animationDuration:"0.75",width:"14",visible:!0}),(0,J.jsx)(Y,{children:"Loading..."})]})}var $,E,G,H=S.ZP.li(h||(h=(0,C.Z)(["\n  display: flex;\n  width: 400px;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 20px;\n  list-style: disc;\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),O=S.ZP.button(x||(x=(0,C.Z)(["\n  padding: ","px;\n  text-align: center;\n  text-transform: uppercase;\n  outline: none;\n  border: "," ",";\n  box-shadow: 0 0 20px ",";\n  color: ",";\n  background: ",";\n  background-size: 200% auto;\n  cursor: pointer;\n  transition: ",";\n  &:hover {\n    color: ",";\n    text-decoration: none;\n    background: ",";\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.transparent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.transition.main}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.primary})),Q=function(n){var t=n.id,e=n.name,r=n.number,o=(0,y.useState)(!1),i=(0,v.Z)(o,2),a=i[0],c=i[1],u=(0,g.Nt)(),s=(0,v.Z)(u,2),l=s[0],m=s[1].isLoading;return(0,J.jsxs)(H,{children:[e,": ",r,(0,J.jsxs)("div",{children:[(0,J.jsx)(O,{type:"button",onClick:function(){c(!0)},children:"Update"}),(0,J.jsx)(O,{type:"button",disabled:m,onClick:function(n){n.preventDefault(),l(t),M.Am.warning("Contact is deleted")},children:m?(0,J.jsx)(K,{}):"Delete"})]}),a&&(0,J.jsx)(q,{closeModal:c,id:t})]})},R=function(){var n=(0,g.Jx)(),t=n.data,e=n.isFetching,r=(0,j.v9)(Z.zK),o=t?t.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())})):[];return(0,J.jsxs)(J.Fragment,{children:[e&&(0,J.jsx)(K,{}),t?(0,J.jsx)("ul",{children:o.map((function(n){return(0,J.jsx)(Q,(0,b.Z)({},n),n.id)}))}):(0,J.jsx)("p",{children:"Your contactlist is empty"})]})},X=e(3628),nn=S.ZP.label($||($=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[5]})),tn=S.ZP.p(E||(E=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[5]})),en=(S.ZP.input(G||(G=(0,C.Z)(["\n  width: 230px;\n  font-size: ",";\n  border: ",";\n  outline: none;\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.borders.normal})),function(){var n=(0,j.I0)();return(0,J.jsxs)(nn,{children:[(0,J.jsx)(tn,{children:"Find contacts by name"}),(0,J.jsx)(X.DebounceInput,{minLength:2,debounceTimeout:300,onChange:function(t){n((0,Z.Tv)(t.target.value))}})]})}),rn=function(){var n=(0,g.Tn)(),t=(0,v.Z)(n,1)[0],e=(0,g.Jx)().data,r=function(){var n=(0,w.Z)(P().mark((function n(r){return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.find((function(n){return n.name===r.name}))){n.next=4;break}return M.Am.error("".concat(r.name," is already in contacts.")),n.abrupt("return");case 4:return n.prev=4,n.next=7,t(r);case 7:M.Am.success("".concat(r.name," is added to Phonebook.")),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(4),M.Am.error("error");case 13:case"end":return n.stop()}}),n,null,[[4,10]])})));return function(t){return n.apply(this,arguments)}}();return(0,J.jsx)(L,{btnText:"Add contact",onSubmit:r})};function on(){return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(rn,{}),(0,J.jsx)(en,{}),(0,J.jsx)(R,{})]})}}}]);
//# sourceMappingURL=628.f04ab247.chunk.js.map
"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[488],{5488:function(e,a,t){t.r(a),t.d(a,{default:function(){return ne}});var o=t(2791),n=t(6151),r=t(4708),i=t(7209),l=t(4942),c=t(3366),s=t(7462),d=t(8182),p=t(4419),u=t(2930),m=t(890),h=t(4036),v=t(6934),f=t(1402),g=t(5878),b=t(1217);function Z(e){return(0,b.Z)("MuiFormControlLabel",e)}var x=(0,g.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),y=t(6147),k=t(184),w=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],P=(0,v.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[(0,l.Z)({},"& .".concat(x.label),a.label),a.root,a["labelPlacement".concat((0,h.Z)(t.labelPlacement))]]}})((function(e){var a=e.theme,t=e.ownerState;return(0,s.Z)((0,l.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(x.disabled),{cursor:"default"}),"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,l.Z)({},"& .".concat(x.label),(0,l.Z)({},"&.".concat(x.disabled),{color:(a.vars||a).palette.text.disabled})))})),C=o.forwardRef((function(e,a){var t,n=(0,f.Z)({props:e,name:"MuiFormControlLabel"}),r=n.className,i=n.componentsProps,l=void 0===i?{}:i,v=n.control,g=n.disabled,b=n.disableTypography,x=n.label,C=n.labelPlacement,j=void 0===C?"end":C,R=n.slotProps,S=void 0===R?{}:R,B=(0,c.Z)(n,w),F=(0,u.Z)(),M=g;"undefined"===typeof M&&"undefined"!==typeof v.props.disabled&&(M=v.props.disabled),"undefined"===typeof M&&F&&(M=F.disabled);var I={disabled:M};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof v.props[e]&&"undefined"!==typeof n[e]&&(I[e]=n[e])}));var z=(0,y.Z)({props:n,muiFormControl:F,states:["error"]}),N=(0,s.Z)({},n,{disabled:M,labelPlacement:j,error:z.error}),L=function(e){var a=e.classes,t=e.disabled,o=e.labelPlacement,n=e.error,r={root:["root",t&&"disabled","labelPlacement".concat((0,h.Z)(o)),n&&"error"],label:["label",t&&"disabled"]};return(0,p.Z)(r,Z,a)}(N),W=null!=(t=S.typography)?t:l.typography,T=x;return null==T||T.type===m.Z||b||(T=(0,k.jsx)(m.Z,(0,s.Z)({component:"span"},W,{className:(0,d.Z)(L.label,null==W?void 0:W.className),children:T}))),(0,k.jsxs)(P,(0,s.Z)({className:(0,d.Z)(L.root,r),ownerState:N,ref:a},B,{children:[o.cloneElement(v,I),T]}))})),j=t(2065),R=t(9439),S=t(8744),B=t(3701);function F(e){return(0,b.Z)("PrivateSwitchBase",e)}(0,g.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var M=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],I=(0,v.ZP)(B.Z)((function(e){var a=e.ownerState;return(0,s.Z)({padding:9,borderRadius:"50%"},"start"===a.edge&&{marginLeft:"small"===a.size?-3:-12},"end"===a.edge&&{marginRight:"small"===a.size?-3:-12})})),z=(0,v.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),N=o.forwardRef((function(e,a){var t=e.autoFocus,o=e.checked,n=e.checkedIcon,r=e.className,i=e.defaultChecked,l=e.disabled,m=e.disableFocusRipple,v=void 0!==m&&m,f=e.edge,g=void 0!==f&&f,b=e.icon,Z=e.id,x=e.inputProps,y=e.inputRef,w=e.name,P=e.onBlur,C=e.onChange,j=e.onFocus,B=e.readOnly,N=e.required,L=e.tabIndex,W=e.type,T=e.value,O=(0,c.Z)(e,M),_=(0,S.Z)({controlled:o,default:Boolean(i),name:"SwitchBase",state:"checked"}),E=(0,R.Z)(_,2),H=E[0],q=E[1],D=(0,u.Z)(),V=l;D&&"undefined"===typeof V&&(V=D.disabled);var A="checkbox"===W||"radio"===W,U=(0,s.Z)({},e,{checked:H,disabled:V,disableFocusRipple:v,edge:g}),J=function(e){var a=e.classes,t=e.checked,o=e.disabled,n=e.edge,r={root:["root",t&&"checked",o&&"disabled",n&&"edge".concat((0,h.Z)(n))],input:["input"]};return(0,p.Z)(r,F,a)}(U);return(0,k.jsxs)(I,(0,s.Z)({component:"span",className:(0,d.Z)(J.root,r),centerRipple:!0,focusRipple:!v,disabled:V,tabIndex:null,role:void 0,onFocus:function(e){j&&j(e),D&&D.onFocus&&D.onFocus(e)},onBlur:function(e){P&&P(e),D&&D.onBlur&&D.onBlur(e)},ownerState:U,ref:a},O,{children:[(0,k.jsx)(z,(0,s.Z)({autoFocus:t,checked:o,defaultChecked:i,className:J.input,disabled:V,id:A&&Z,name:w,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var a=e.target.checked;q(a),C&&C(e,a)}},readOnly:B,ref:y,required:N,ownerState:U,tabIndex:L,type:W},"checkbox"===W&&void 0===T?{}:{value:T},x)),H?n:b]}))})),L=t(9201),W=(0,L.Z)((0,k.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),T=(0,L.Z)((0,k.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),O=(0,L.Z)((0,k.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function _(e){return(0,b.Z)("MuiCheckbox",e)}var E,H=(0,g.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),q=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],D=(0,v.ZP)(N,{shouldForwardProp:function(e){return(0,v.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,t.indeterminate&&a.indeterminate,"default"!==t.color&&a["color".concat((0,h.Z)(t.color))]]}})((function(e){var a,t=e.theme,o=e.ownerState;return(0,s.Z)({color:(t.vars||t).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===o.color?t.vars.palette.action.activeChannel:t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,j.Fq)("default"===o.color?t.palette.action.active:t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(a={},(0,l.Z)(a,"&.".concat(H.checked,", &.").concat(H.indeterminate),{color:(t.vars||t).palette[o.color].main}),(0,l.Z)(a,"&.".concat(H.disabled),{color:(t.vars||t).palette.action.disabled}),a))})),V=(0,k.jsx)(T,{}),A=(0,k.jsx)(W,{}),U=(0,k.jsx)(O,{}),J=o.forwardRef((function(e,a){var t,n,r=(0,f.Z)({props:e,name:"MuiCheckbox"}),i=r.checkedIcon,l=void 0===i?V:i,u=r.color,m=void 0===u?"primary":u,v=r.icon,g=void 0===v?A:v,b=r.indeterminate,Z=void 0!==b&&b,x=r.indeterminateIcon,y=void 0===x?U:x,w=r.inputProps,P=r.size,C=void 0===P?"medium":P,j=r.className,R=(0,c.Z)(r,q),S=Z?y:g,B=Z?y:l,F=(0,s.Z)({},r,{color:m,indeterminate:Z,size:C}),M=function(e){var a=e.classes,t=e.indeterminate,o=e.color,n={root:["root",t&&"indeterminate","color".concat((0,h.Z)(o))]},r=(0,p.Z)(n,_,a);return(0,s.Z)({},a,r)}(F);return(0,k.jsx)(D,(0,s.Z)({type:"checkbox",inputProps:(0,s.Z)({"data-indeterminate":Z},w),icon:o.cloneElement(S,{fontSize:null!=(t=S.props.fontSize)?t:C}),checkedIcon:o.cloneElement(B,{fontSize:null!=(n=B.props.fontSize)?n:C}),ownerState:F,ref:a,className:(0,d.Z)(M.root,j)},R,{classes:M}))})),G=t(1889),K=t(4554),Q=t(1614),X=t(5048),Y=t(5493),$=t(168),ee=t(7691),ae=t(1087),te=(0,ee.ZP)(ae.rU)(E||(E=(0,$.Z)(["\n  text-decoration: grey underline;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.43;\n  letter-spacing: 0.01071em;\n  color: #1976d2;\n"]))),oe=function(){var e=(0,X.I0)();return(0,k.jsxs)(Q.Z,{component:"main",maxWidth:"xs",children:[(0,k.jsx)(r.ZP,{}),(0,k.jsx)(K.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:(0,k.jsxs)(K.Z,{component:"form",onSubmit:function(a){a.preventDefault();var t=a.target;e((0,Y.Ib)({email:t.elements.email.value,password:t.elements.password.value})),t.reset()},noValidate:!0,sx:{mt:1},children:[(0,k.jsx)(i.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),(0,k.jsx)(i.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),(0,k.jsx)(C,{control:(0,k.jsx)(J,{value:"remember",color:"primary"}),label:"Remember me"}),(0,k.jsx)(n.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Login"}),(0,k.jsx)(G.ZP,{container:!0,children:(0,k.jsx)(G.ZP,{item:!0,children:(0,k.jsx)(te,{to:"/register",children:"Don't have an account? Sign Up"})})})]})})]})};function ne(){return(0,k.jsxs)("div",{children:[(0,k.jsx)("title",{children:"Login"}),(0,k.jsx)(oe,{})]})}},890:function(e,a,t){t.d(a,{Z:function(){return x}});var o=t(3366),n=t(7462),r=t(2791),i=t(8182),l=t(8519),c=t(4419),s=t(6934),d=t(1402),p=t(4036),u=t(5878),m=t(1217);function h(e){return(0,m.Z)("MuiTypography",e)}(0,u.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var v=t(184),f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,s.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,t.variant&&a[t.variant],"inherit"!==t.align&&a["align".concat((0,p.Z)(t.align))],t.noWrap&&a.noWrap,t.gutterBottom&&a.gutterBottom,t.paragraph&&a.paragraph]}})((function(e){var a=e.theme,t=e.ownerState;return(0,n.Z)({margin:0},t.variant&&a.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})})),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},x=r.forwardRef((function(e,a){var t=(0,d.Z)({props:e,name:"MuiTypography"}),r=function(e){return Z[e]||e}(t.color),s=(0,l.Z)((0,n.Z)({},t,{color:r})),u=s.align,m=void 0===u?"inherit":u,x=s.className,y=s.component,k=s.gutterBottom,w=void 0!==k&&k,P=s.noWrap,C=void 0!==P&&P,j=s.paragraph,R=void 0!==j&&j,S=s.variant,B=void 0===S?"body1":S,F=s.variantMapping,M=void 0===F?b:F,I=(0,o.Z)(s,f),z=(0,n.Z)({},s,{align:m,color:r,className:x,component:y,gutterBottom:w,noWrap:C,paragraph:R,variant:B,variantMapping:M}),N=y||(R?"p":M[B]||b[B])||"span",L=function(e){var a=e.align,t=e.gutterBottom,o=e.noWrap,n=e.paragraph,r=e.variant,i=e.classes,l={root:["root",r,"inherit"!==e.align&&"align".concat((0,p.Z)(a)),t&&"gutterBottom",o&&"noWrap",n&&"paragraph"]};return(0,c.Z)(l,h,i)}(z);return(0,v.jsx)(g,(0,n.Z)({as:N,ref:a,ownerState:z,className:(0,i.Z)(L.root,x)},I))}))}}]);
//# sourceMappingURL=488.c910d227.chunk.js.map
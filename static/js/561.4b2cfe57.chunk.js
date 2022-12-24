"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[561],{561:function(e,o,n){n.r(o),n.d(o,{default:function(){return de}});var a=n(2791),t=n(3044),r=n(6151),l=n(4708),i=n(9497),c=n(4942),d=n(3366),s=n(7462),u=n(8182),m=n(4419),p=n(2930),h=n(890),b=n(4036),f=n(6934),v=n(1402),Z=n(5878),g=n(1217);function x(e){return(0,g.Z)("MuiFormControlLabel",e)}var k=(0,Z.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),y=n(6147),P=n(184),w=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],j=(0,f.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,o){var n=e.ownerState;return[(0,c.Z)({},"& .".concat(k.label),o.label),o.root,o["labelPlacement".concat((0,b.Z)(n.labelPlacement))]]}})((function(e){var o=e.theme,n=e.ownerState;return(0,s.Z)((0,c.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(k.disabled),{cursor:"default"}),"start"===n.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===n.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===n.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,c.Z)({},"& .".concat(k.label),(0,c.Z)({},"&.".concat(k.disabled),{color:(o.vars||o).palette.text.disabled})))})),C=a.forwardRef((function(e,o){var n,t=(0,v.Z)({props:e,name:"MuiFormControlLabel"}),r=t.className,l=t.componentsProps,i=void 0===l?{}:l,c=t.control,f=t.disabled,Z=t.disableTypography,g=t.label,k=t.labelPlacement,C=void 0===k?"end":k,R=t.slotProps,S=void 0===R?{}:R,F=(0,d.Z)(t,w),I=(0,p.Z)(),z=f;"undefined"===typeof z&&"undefined"!==typeof c.props.disabled&&(z=c.props.disabled),"undefined"===typeof z&&I&&(z=I.disabled);var B={disabled:z};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof c.props[e]&&"undefined"!==typeof t[e]&&(B[e]=t[e])}));var L=(0,y.Z)({props:t,muiFormControl:I,states:["error"]}),N=(0,s.Z)({},t,{disabled:z,labelPlacement:C,error:L.error}),M=function(e){var o=e.classes,n=e.disabled,a=e.labelPlacement,t=e.error,r={root:["root",n&&"disabled","labelPlacement".concat((0,b.Z)(a)),t&&"error"],label:["label",n&&"disabled"]};return(0,m.Z)(r,x,o)}(N),_=null!=(n=S.typography)?n:i.typography,D=g;return null==D||D.type===h.Z||Z||(D=(0,P.jsx)(h.Z,(0,s.Z)({component:"span"},_,{className:(0,u.Z)(M.label,null==_?void 0:_.className),children:D}))),(0,P.jsxs)(j,(0,s.Z)({className:(0,u.Z)(M.root,r),ownerState:N,ref:o},F,{children:[a.cloneElement(c,B),D]}))})),R=n(2065),S=n(9439),F=n(8744),I=n(3701);function z(e){return(0,g.Z)("PrivateSwitchBase",e)}(0,Z.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var B=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],L=(0,f.ZP)(I.Z)((function(e){var o=e.ownerState;return(0,s.Z)({padding:9,borderRadius:"50%"},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12},"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})})),N=(0,f.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),M=a.forwardRef((function(e,o){var n=e.autoFocus,a=e.checked,t=e.checkedIcon,r=e.className,l=e.defaultChecked,i=e.disabled,c=e.disableFocusRipple,h=void 0!==c&&c,f=e.edge,v=void 0!==f&&f,Z=e.icon,g=e.id,x=e.inputProps,k=e.inputRef,y=e.name,w=e.onBlur,j=e.onChange,C=e.onFocus,R=e.readOnly,I=e.required,M=e.tabIndex,_=e.type,D=e.value,E=(0,d.Z)(e,B),H=(0,F.Z)({controlled:a,default:Boolean(l),name:"SwitchBase",state:"checked"}),O=(0,S.Z)(H,2),q=O[0],T=O[1],V=(0,p.Z)(),W=i;V&&"undefined"===typeof W&&(W=V.disabled);var A="checkbox"===_||"radio"===_,U=(0,s.Z)({},e,{checked:q,disabled:W,disableFocusRipple:h,edge:v}),G=function(e){var o=e.classes,n=e.checked,a=e.disabled,t=e.edge,r={root:["root",n&&"checked",a&&"disabled",t&&"edge".concat((0,b.Z)(t))],input:["input"]};return(0,m.Z)(r,z,o)}(U);return(0,P.jsxs)(L,(0,s.Z)({component:"span",className:(0,u.Z)(G.root,r),centerRipple:!0,focusRipple:!h,disabled:W,tabIndex:null,role:void 0,onFocus:function(e){C&&C(e),V&&V.onFocus&&V.onFocus(e)},onBlur:function(e){w&&w(e),V&&V.onBlur&&V.onBlur(e)},ownerState:U,ref:o},E,{children:[(0,P.jsx)(N,(0,s.Z)({autoFocus:n,checked:a,defaultChecked:l,className:G.input,disabled:W,id:A&&g,name:y,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var o=e.target.checked;T(o),j&&j(e,o)}},readOnly:R,ref:k,required:I,ownerState:U,tabIndex:M,type:_},"checkbox"===_&&void 0===D?{}:{value:D},x)),q?t:Z]}))})),_=n(9201),D=(0,_.Z)((0,P.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),E=(0,_.Z)((0,P.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),H=(0,_.Z)((0,P.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function O(e){return(0,g.Z)("MuiCheckbox",e)}var q,T=(0,Z.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),V=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],W=(0,f.ZP)(M,{shouldForwardProp:function(e){return(0,f.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,o){var n=e.ownerState;return[o.root,n.indeterminate&&o.indeterminate,"default"!==n.color&&o["color".concat((0,b.Z)(n.color))]]}})((function(e){var o,n=e.theme,a=e.ownerState;return(0,s.Z)({color:(n.vars||n).palette.text.secondary},!a.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat("default"===a.color?n.vars.palette.action.activeChannel:n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,R.Fq)("default"===a.color?n.palette.action.active:n.palette[a.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==a.color&&(o={},(0,c.Z)(o,"&.".concat(T.checked,", &.").concat(T.indeterminate),{color:(n.vars||n).palette[a.color].main}),(0,c.Z)(o,"&.".concat(T.disabled),{color:(n.vars||n).palette.action.disabled}),o))})),A=(0,P.jsx)(E,{}),U=(0,P.jsx)(D,{}),G=(0,P.jsx)(H,{}),J=a.forwardRef((function(e,o){var n,t,r=(0,v.Z)({props:e,name:"MuiCheckbox"}),l=r.checkedIcon,i=void 0===l?A:l,c=r.color,p=void 0===c?"primary":c,h=r.icon,f=void 0===h?U:h,Z=r.indeterminate,g=void 0!==Z&&Z,x=r.indeterminateIcon,k=void 0===x?G:x,y=r.inputProps,w=r.size,j=void 0===w?"medium":w,C=r.className,R=(0,d.Z)(r,V),S=g?k:f,F=g?k:i,I=(0,s.Z)({},r,{color:p,indeterminate:g,size:j}),z=function(e){var o=e.classes,n=e.indeterminate,a=e.color,t={root:["root",n&&"indeterminate","color".concat((0,b.Z)(a))]},r=(0,m.Z)(t,O,o);return(0,s.Z)({},o,r)}(I);return(0,P.jsx)(W,(0,s.Z)({type:"checkbox",inputProps:(0,s.Z)({"data-indeterminate":g},y),icon:a.cloneElement(S,{fontSize:null!=(n=S.props.fontSize)?n:j}),checkedIcon:a.cloneElement(F,{fontSize:null!=(t=F.props.fontSize)?t:j}),ownerState:I,ref:o,className:(0,u.Z)(z.root,C)},R,{classes:z}))})),K=n(1889),Q=n(4554),X=n(403),Y=n(1614),$=n(7107),ee=n(7012),oe=n(5048),ne=n(5493),ae=n(168),te=n(7691),re=n(1087),le=(0,te.ZP)(re.rU)(q||(q=(0,ae.Z)(["\n  text-decoration: grey underline;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.43;\n  letter-spacing: 0.01071em;\n  color: #1976d2;\n"]))),ie=(0,$.Z)(),ce=function(){var e=(0,oe.I0)();return(0,P.jsx)(ee.Z,{theme:ie,children:(0,P.jsxs)(Y.Z,{component:"main",maxWidth:"xs",children:[(0,P.jsx)(l.ZP,{}),(0,P.jsxs)(Q.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,P.jsx)(t.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,P.jsx)(X.Z,{})}),(0,P.jsx)(h.Z,{component:"h1",variant:"h5",children:"Login"}),(0,P.jsxs)(Q.Z,{component:"form",onSubmit:function(o){o.preventDefault();var n=new FormData(o.currentTarget);e((0,ne.Ib)({email:n.get("email"),password:n.get("password")}))},noValidate:!0,sx:{mt:1},children:[(0,P.jsx)(i.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),(0,P.jsx)(i.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),(0,P.jsx)(C,{control:(0,P.jsx)(J,{value:"remember",color:"primary"}),label:"Remember me"}),(0,P.jsx)(r.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),(0,P.jsx)(K.ZP,{container:!0,children:(0,P.jsx)(K.ZP,{item:!0,children:(0,P.jsx)(le,{to:"/register",children:"Don't have an account? Sign Up"})})})]})]})]})})};function de(){return(0,P.jsxs)("div",{children:[(0,P.jsx)("title",{children:"Login"}),(0,P.jsx)(ce,{})]})}}}]);
//# sourceMappingURL=561.4b2cfe57.chunk.js.map
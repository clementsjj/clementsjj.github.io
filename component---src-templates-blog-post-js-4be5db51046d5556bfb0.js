(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return o});var n=a(0),r=a.n(n),c=a(163),l=a(679),i=a(680);t.default=function(e){var t=e.data,a=e.location,n=t.markdownRemark;return r.a.createElement(c.a,{location:a},r.a.createElement(l.a,{container:!0},r.a.createElement(l.a.Column,null,r.a.createElement(i.a,null,r.a.createElement("h1",null,n.frontmatter.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}})))))};var o="2198836028"},155:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return b}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),c=a(4),l=a.n(c),i=a(147),o=a.n(i);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var s=a(157),d=a.n(s);a.d(t,"PageRenderer",function(){return d.a});var u=a(34);a.d(t,"parsePath",function(){return u.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function b(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},157:function(e,t,a){var n;e.exports=(n=a(164))&&n.default||n},163:function(e,t,a){"use strict";var n=a(7),r=a.n(n),c=a(0),l=a.n(c),i=a(4),o=a.n(i),s=a(179),d=a.n(s),u=a(155),m=(a(165),a(176)),p=a(183),b=a.n(p),h=a(184),g=a.n(h),f=a(182),v=a.n(f),j=a(174),y=a.n(j),O=a(180),E=a.n(O),w=a(181),k=a.n(w),N=a(175),x=a.n(N),A=a(185),M=a.n(A),C=(a(166),{backgroundColor:"#00008b"}),S=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleMenuClose=function(){a.setState({anchorEl:null}),a.handleMobileMenuClose()},a.handleMobileMenuOpen=function(e){a.setState({mobileMoreAnchorEl:e.currentTarget})},a.handleMobileMenuClose=function(){a.setState({mobileMoreAnchorEl:null})},a.state={isShown:!1,selectedIndex:0,anchorEl:null,mobileMoreAnchorEl:null},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){console.log("Window.location: ",window.location)},a.render=function(){var e=this,t=this.props.classes,a=(this.props.location,this.state),n=(a.anchorEl,a.mobileMoreAnchorEl),r=Boolean(n),c=l.a.createElement(E.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:r,onClose:this.handleMobileMenuClose},l.a.createElement(k.a,null,l.a.createElement(u.Link,{to:"/",className:"nav"},l.a.createElement(v.a,{style:{margin:5},className:t.grow,color:"primary",variant:"outlined"},"Home"))),l.a.createElement(k.a,null,l.a.createElement(u.Link,{to:"/about",className:"nav"},l.a.createElement(v.a,{className:t.grow,style:{margin:5},color:"primary",variant:"outlined"},"About"))),l.a.createElement(k.a,null,l.a.createElement(u.Link,{to:"/blog",className:"nav"},l.a.createElement(v.a,{style:{margin:5},color:"primary",variant:"outlined"},"Blog"))));return l.a.createElement("div",{className:t.root},l.a.createElement(b.a,{position:"static"},l.a.createElement(g.a,{style:C},l.a.createElement(y.a,{variant:"h5",color:"inherit",className:t.title},"{JJ_Clements}"),l.a.createElement("div",{className:t.grow}),l.a.createElement("div",{className:t.sectionDesktop},l.a.createElement(u.Link,{to:"/",className:"nav"},l.a.createElement(v.a,{style:{margin:5},className:t.grow,color:"primary",variant:"/"===window.location.pathname?"contained":"outlined"},"Home")),l.a.createElement(u.Link,{to:"/about",className:"nav"},l.a.createElement(v.a,{className:t.grow,style:{margin:5},color:"primary",variant:"/about"===window.location.pathname?"contained":"outlined"},"About")),l.a.createElement(u.Link,{to:"/blog",className:"nav"},l.a.createElement(v.a,{style:{margin:5},color:"primary",variant:"outlined"},"Blog")),l.a.createElement(v.a,{style:{margin:5,marginLeft:20},disabled:!0,variant:"outlined",color:"inherit",onClick:function(){return e.setState({isShown:!0})}},"Dashboard")),l.a.createElement("div",{className:t.sectionMobile},l.a.createElement(x.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},l.a.createElement(M.a,null))))),c)},t}(c.Component),T=Object(m.withStyles)(function(e){var t,a,n;return{root:{flexGrow:1,width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:(t={display:"block",fontFamily:"Heletica",fontSize:".7rem"},t[e.breakpoints.up("sm")]={display:"block",fontSize:"1.5rem"},t),sectionDesktop:(a={display:"none"},a[e.breakpoints.up("md")]={display:"flex"},a),sectionMobile:(n={display:"flex"},n[e.breakpoints.up("md")]={display:"none"},n)}})(S);a(167);a.d(t,"a",function(){return q});var q=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.color,n={backgroundColor:a};return l.a.createElement("div",{style:n},l.a.createElement(d.a,{title:"Internet Home of JJ",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},l.a.createElement("html",{lang:"en"}),l.a.createElement("style",null,"body { background-color: "+a+"; }")),l.a.createElement(T,this.props),t)},t}(c.Component);q.propTypes={children:o.a.node.isRequired}},164:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),i=a(51),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t){(function(t){e.exports={siteMetadata:{title:"Internet Home of JJ Clements",description:"Landing Page for JJ Clements",siteUrl:"https://www.clementsjj.com",author:"clementsjj",twitter:"clementsjj",adsense:""},plugins:["gatsby-plugin-react-helmet",{resolve:"gatsby-plugin-manifest",options:{name:"gatsby-starter-default",short_name:"starter",start_url:"/",background_color:"#663399",theme_color:"#663399",display:"minimal-ui",icon:"src/images/icons/dancer.svg"}},"gatsby-plugin-offline","gatsby-transformer-remark",{resolve:"gatsby-source-filesystem",options:{name:"src",path:t+"/src/"}}]}}).call(this,"/")},679:function(e,t,a){"use strict";a(191);var n=a(146),r=a.n(n),c=a(148),l=a.n(c),i=(a(4),a(0)),o=a.n(i),s=a(177),d=a(298),u=a(299),m=a(300);function p(e){var t=e.children,a=e.className,n=e.computer,c=e.color,i=e.floated,m=e.largeScreen,b=e.mobile,h=e.only,g=e.stretched,f=e.tablet,v=e.textAlign,j=e.verticalAlign,y=e.widescreen,O=e.width,E=l()(c,Object(s.a)(g,"stretched"),Object(s.c)(h,"only"),Object(s.d)(v),Object(s.e)(i,"floated"),Object(s.f)(j),Object(s.g)(n,"wide computer"),Object(s.g)(m,"wide large screen"),Object(s.g)(b,"wide mobile"),Object(s.g)(f,"wide tablet"),Object(s.g)(y,"wide widescreen"),Object(s.g)(O,"wide"),"column",a),w=Object(d.a)(p,e),k=Object(u.a)(p,e);return o.a.createElement(k,r()({},w,{className:E}),t)}p.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"],p.propTypes={},p.create=Object(m.a)(p,function(e){return{children:e}});var b=p;function h(e){var t=e.centered,a=e.children,n=e.className,c=e.color,i=e.columns,m=e.divided,p=e.only,b=e.reversed,g=e.stretched,f=e.textAlign,v=e.verticalAlign,j=l()(c,Object(s.a)(t,"centered"),Object(s.a)(m,"divided"),Object(s.a)(g,"stretched"),Object(s.c)(p,"only"),Object(s.c)(b,"reversed"),Object(s.d)(f),Object(s.f)(v),Object(s.g)(i,"column",!0),"row",n),y=Object(d.a)(h,e),O=Object(u.a)(h,e);return o.a.createElement(O,r()({},y,{className:j}),a)}h.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"],h.propTypes={};var g=h;function f(e){var t=e.celled,a=e.centered,n=e.children,c=e.className,i=e.columns,m=e.container,p=e.divided,b=e.doubling,h=e.inverted,g=e.padded,v=e.relaxed,j=e.reversed,y=e.stackable,O=e.stretched,E=e.textAlign,w=e.verticalAlign,k=l()("ui",Object(s.a)(a,"centered"),Object(s.a)(m,"container"),Object(s.a)(b,"doubling"),Object(s.a)(h,"inverted"),Object(s.a)(y,"stackable"),Object(s.a)(O,"stretched"),Object(s.b)(t,"celled"),Object(s.b)(p,"divided"),Object(s.b)(g,"padded"),Object(s.b)(v,"relaxed"),Object(s.c)(j,"reversed"),Object(s.d)(E),Object(s.f)(w),Object(s.g)(i,"column",!0),"grid",c),N=Object(d.a)(f,e),x=Object(u.a)(f,e);return o.a.createElement(x,r()({},N,{className:k}),n)}f.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"],f.Column=b,f.Row=g,f.propTypes={};t.a=f},680:function(e,t,a){"use strict";var n=a(146),r=a.n(n),c=(a(187),a(148)),l=a.n(c),i=(a(4),a(0)),o=a.n(i),s=a(177),d=a(298),u=a(299),m=a(158);function p(e){var t=e.children,a=e.className,n=e.compact,c=e.content,i=e.horizontal,b=e.piled,h=e.raised,g=e.size,f=e.stacked,v=l()("ui",g,Object(s.a)(n,"compact"),Object(s.a)(i,"horizontal"),Object(s.a)(b,"piled"),Object(s.a)(h,"raised"),Object(s.a)(f,"stacked"),"segments",a),j=Object(d.a)(p,e),y=Object(u.a)(p,e);return o.a.createElement(y,r()({},j,{className:v}),m.a.isNil(t)?c:t)}p.handledProps=["as","children","className","compact","content","horizontal","piled","raised","size","stacked"],p.propTypes={};var b=p;function h(e){var t=e.children,a=e.className,n=e.content,c=l()("inline",a),i=Object(d.a)(h,e),s=Object(u.a)(h,e);return o.a.createElement(s,r()({},i,{className:c}),m.a.isNil(t)?n:t)}h.handledProps=["as","children","className","content"],h.propTypes={};var g=h;function f(e){var t=e.attached,a=e.basic,n=e.children,c=e.circular,i=e.className,p=e.clearing,b=e.color,h=e.compact,g=e.content,v=e.disabled,j=e.floated,y=e.inverted,O=e.loading,E=e.placeholder,w=e.padded,k=e.piled,N=e.raised,x=e.secondary,A=e.size,M=e.stacked,C=e.tertiary,S=e.textAlign,T=e.vertical,q=l()("ui",b,A,Object(s.a)(a,"basic"),Object(s.a)(c,"circular"),Object(s.a)(p,"clearing"),Object(s.a)(h,"compact"),Object(s.a)(v,"disabled"),Object(s.a)(y,"inverted"),Object(s.a)(O,"loading"),Object(s.a)(E,"placeholder"),Object(s.a)(k,"piled"),Object(s.a)(N,"raised"),Object(s.a)(x,"secondary"),Object(s.a)(M,"stacked"),Object(s.a)(C,"tertiary"),Object(s.a)(T,"vertical"),Object(s.b)(t,"attached"),Object(s.b)(w,"padded"),Object(s.d)(S),Object(s.e)(j,"floated"),"segment",i),L=Object(d.a)(f,e),P=Object(u.a)(f,e);return o.a.createElement(P,r()({},L,{className:q}),m.a.isNil(n)?g:n)}f.handledProps=["as","attached","basic","children","circular","className","clearing","color","compact","content","disabled","floated","inverted","loading","padded","piled","placeholder","raised","secondary","size","stacked","tertiary","textAlign","vertical"],f.Group=b,f.Inline=g,f.propTypes={};t.a=f}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-4be5db51046d5556bfb0.js.map
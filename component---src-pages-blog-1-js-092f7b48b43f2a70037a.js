(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return u});n(52);var a=n(0),r=n.n(a),i=n(152),o=n.n(i),c=n(167),l=n(217),s=n(390),d=n(324);t.default=function(e){var t=e.data,n=e.location;return r.a.createElement(c.a,{location:n,color:"#f0f8ff"},r.a.createElement(l.a,{container:!0},r.a.createElement(l.a.Column,{computer:4,mobile:16},r.a.createElement(s.a,{as:d.a,minWidth:768},"Placeholder")),r.a.createElement(l.a.Column,{computer:12,mobile:16},r.a.createElement(d.a,null,r.a.createElement("h1",null,"Blog"),r.a.createElement("h4",null,t.allMarkdownRemark.totalCount," Posts"),r.a.createElement("hr",{style:{width:"20%"}}),t.allMarkdownRemark.edges.map(function(e,t){var n=e.node;return r.a.createElement(o.a,{key:t,to:n.fields.slug,style:{textDecoration:"none",color:"inherit"}},r.a.createElement("h3",null,n.frontmatter.title),r.a.createElement("p",null,r.a.createElement("span",null,r.a.createElement("em",null,"- ",n.frontmatter.date))),r.a.createElement("p",null,n.excerpt))})))))};var u="4006241940"},159:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(152),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(160),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var u=n(34);n.d(t,"parsePath",function(){return u.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},160:function(e,t,n){var a;e.exports=(a=n(163))&&a.default||a},163:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(51),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},164:function(e,t,n){},165:function(e,t,n){},166:function(e,t){(function(t){e.exports={siteMetadata:{title:"Internet Home of JJ Clements",description:"Landing Page for JJ Clements",siteUrl:"https://www.clementsjj.com",author:"clementsjj",twitter:"https://twitter.com/clementsjj",github:"https://github.com/clementsjj",linkedin:"https://www.linkedin.com/in/john-clements-084a1811a/",instagram:"https://www.instagram.com/jj4bucky/",adsense:""},plugins:["gatsby-plugin-react-helmet",{resolve:"gatsby-plugin-manifest",options:{name:"gatsby-starter-default",short_name:"starter",start_url:"/",background_color:"#663399",theme_color:"#663399",display:"minimal-ui",icon:"src/images/icons/dancer.svg"}},"gatsby-plugin-offline","gatsby-transformer-remark",{resolve:"gatsby-source-filesystem",options:{name:"src",path:t+"/src/"}}]}}).call(this,"/")},167:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(4),l=n.n(c),s=n(177),d=n.n(s),u=n(159),m=(n(164),n(174)),p=n(181),h=n.n(p),b=n(182),f=n.n(b),g=n(180),v=n.n(g),y=n(173),j=n.n(y),w=n(178),O=n.n(w),E=n(179),k=n.n(E),N=n(176),x=n.n(N),M=n(183),C=n.n(M),W=(n(165),{backgroundColor:"#00008b"}),A=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleMenuClose=function(){n.setState({anchorEl:null}),n.handleMobileMenuClose()},n.handleMobileMenuOpen=function(e){n.setState({mobileMoreAnchorEl:e.currentTarget})},n.handleMobileMenuClose=function(){n.setState({mobileMoreAnchorEl:null})},n.state={isShown:!1,selectedIndex:0,anchorEl:null,mobileMoreAnchorEl:null,path:"/"},n}r()(t,e);var n=t.prototype;return n.handlePageNavigation=function(){},n.componentDidMount=function(){console.log("Window.location.pathname: ",window.location)},n.render=function(){var e=this,t=this.props.classes,n=(this.props.location,this.state),a=(n.anchorEl,n.mobileMoreAnchorEl),r=Boolean(a),i=o.a.createElement(O.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:r,onClose:this.handleMobileMenuClose},o.a.createElement(k.a,null,o.a.createElement(u.Link,{to:"/",className:"nav"},o.a.createElement(v.a,{style:{margin:5},className:t.grow,color:"primary",variant:"outlined"},"Home"))),o.a.createElement(k.a,null,o.a.createElement(u.Link,{to:"/about",className:"nav"},o.a.createElement(v.a,{className:t.grow,style:{margin:5},color:"primary",variant:"outlined"},"About"))),o.a.createElement(k.a,null,o.a.createElement(u.Link,{to:"/blog",className:"nav"},o.a.createElement(v.a,{style:{margin:5},color:"primary",variant:"outlined"},"Blog"))));return o.a.createElement("div",{className:t.root},o.a.createElement(h.a,{position:"static"},o.a.createElement(f.a,{style:W},o.a.createElement(j.a,{variant:"h5",color:"inherit",className:t.title},"{JJ_Clements}"),o.a.createElement("div",{className:t.grow}),o.a.createElement("div",{className:t.sectionDesktop},o.a.createElement(u.Link,{to:"/",className:"nav"},o.a.createElement(v.a,{style:{margin:5},className:t.grow,color:"primary",variant:"undefined"!=typeof window&&"/"==window.location.pathname?"contained":"outlined",onClick:this.handlePageNavigation},"Home")),o.a.createElement(u.Link,{to:"/about",className:"nav"},o.a.createElement(v.a,{className:t.grow,style:{margin:5},color:"primary",variant:"undefined"!=typeof window&&"/about"==window.location.pathname?"contained":"outlined",onClick:this.handlePageNavigation},"About")),o.a.createElement(u.Link,{to:"/blog",className:"nav"},o.a.createElement(v.a,{style:{margin:5},color:"primary",variant:"undefined"!=typeof window&&"/blog"==window.location.pathname?"contained":"outlined"},"Blog")),o.a.createElement(u.Link,{to:"/projects",className:"nav"},o.a.createElement(v.a,{style:{margin:5},color:"primary",variant:"undefined"!=typeof window&&"/projects"==window.location.pathname?"contained":"outlined"},"Projects")),o.a.createElement(u.Link,{to:"/gists",className:"nav"},o.a.createElement(v.a,{style:{margin:5},color:"primary",variant:"undefined"!=typeof window&&"/gists"==window.location.pathname?"contained":"outlined"},"Gists")),o.a.createElement(v.a,{style:{margin:5,marginLeft:20},disabled:!0,variant:"outlined",color:"inherit",onClick:function(){return e.setState({isShown:!0})}},"Dashboard")),o.a.createElement("div",{className:t.sectionMobile},o.a.createElement(x.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},o.a.createElement(C.a,null))))),i)},t}(i.Component),S=Object(m.withStyles)(function(e){var t,n,a;return{root:{flexGrow:1,width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:(t={display:"block",fontFamily:"Lato",fontSize:".7rem"},t[e.breakpoints.up("sm")]={display:"block",fontSize:"1.5rem"},t),sectionDesktop:(n={display:"none"},n[e.breakpoints.up("md")]={display:"flex"},n),sectionMobile:(a={display:"flex"},a[e.breakpoints.up("md")]={display:"none"},a)}})(A);n(166);n.d(t,"a",function(){return P});var P=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.color,a={backgroundColor:n};return o.a.createElement("div",{style:a},o.a.createElement(d.a,{title:"Internet Home of JJ",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"}),o.a.createElement("style",null,"body { background-color: "+n+"; }")),o.a.createElement(S,this.props),t)},t}(i.Component);P.propTypes={children:l.a.node.isRequired}},184:function(e,t,n){"use strict";var a=n(150),r=n.n(a),i=n(151),o=n.n(i),c=(n(4),n(0)),l=n.n(c),s=n(205),d=n(348),u=n(349),m=n(350);function p(e){var t=e.children,n=e.className,a=e.computer,i=e.color,c=e.floated,m=e.largeScreen,h=e.mobile,b=e.only,f=e.stretched,g=e.tablet,v=e.textAlign,y=e.verticalAlign,j=e.widescreen,w=e.width,O=o()(i,Object(s.a)(f,"stretched"),Object(s.c)(b,"only"),Object(s.d)(v),Object(s.e)(c,"floated"),Object(s.f)(y),Object(s.g)(a,"wide computer"),Object(s.g)(m,"wide large screen"),Object(s.g)(h,"wide mobile"),Object(s.g)(g,"wide tablet"),Object(s.g)(j,"wide widescreen"),Object(s.g)(w,"wide"),"column",n),E=Object(d.a)(p,e),k=Object(u.a)(p,e);return l.a.createElement(k,r()({},E,{className:O}),t)}p.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"],p.propTypes={},p.create=Object(m.b)(p,function(e){return{children:e}}),t.a=p},217:function(e,t,n){"use strict";n(172);var a=n(150),r=n.n(a),i=n(151),o=n.n(i),c=(n(4),n(0)),l=n.n(c),s=n(205),d=n(348),u=n(349),m=n(184);function p(e){var t=e.centered,n=e.children,a=e.className,i=e.color,c=e.columns,m=e.divided,h=e.only,b=e.reversed,f=e.stretched,g=e.textAlign,v=e.verticalAlign,y=o()(i,Object(s.a)(t,"centered"),Object(s.a)(m,"divided"),Object(s.a)(f,"stretched"),Object(s.c)(h,"only"),Object(s.c)(b,"reversed"),Object(s.d)(g),Object(s.f)(v),Object(s.g)(c,"column",!0),"row",a),j=Object(d.a)(p,e),w=Object(u.a)(p,e);return l.a.createElement(w,r()({},j,{className:y}),n)}p.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"],p.propTypes={};var h=p;function b(e){var t=e.celled,n=e.centered,a=e.children,i=e.className,c=e.columns,m=e.container,p=e.divided,h=e.doubling,f=e.inverted,g=e.padded,v=e.relaxed,y=e.reversed,j=e.stackable,w=e.stretched,O=e.textAlign,E=e.verticalAlign,k=o()("ui",Object(s.a)(n,"centered"),Object(s.a)(m,"container"),Object(s.a)(h,"doubling"),Object(s.a)(f,"inverted"),Object(s.a)(j,"stackable"),Object(s.a)(w,"stretched"),Object(s.b)(t,"celled"),Object(s.b)(p,"divided"),Object(s.b)(g,"padded"),Object(s.b)(v,"relaxed"),Object(s.c)(y,"reversed"),Object(s.d)(O),Object(s.f)(E),Object(s.g)(c,"column",!0),"grid",i),N=Object(d.a)(b,e),x=Object(u.a)(b,e);return l.a.createElement(x,r()({},N,{className:k}),a)}b.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"],b.Column=m.a,b.Row=h,b.propTypes={};t.a=b},266:function(e,t,n){"use strict";var a=n(243),r=n.n(a);t.a=r.a},324:function(e,t,n){"use strict";var a=n(150),r=n.n(a),i=(n(162),n(151)),o=n.n(i),c=(n(4),n(0)),l=n.n(c),s=n(205),d=n(348),u=n(349),m=n(153);function p(e){var t=e.children,n=e.className,a=e.compact,i=e.content,c=e.horizontal,h=e.piled,b=e.raised,f=e.size,g=e.stacked,v=o()("ui",f,Object(s.a)(a,"compact"),Object(s.a)(c,"horizontal"),Object(s.a)(h,"piled"),Object(s.a)(b,"raised"),Object(s.a)(g,"stacked"),"segments",n),y=Object(d.a)(p,e),j=Object(u.a)(p,e);return l.a.createElement(j,r()({},y,{className:v}),m.a.isNil(t)?i:t)}p.handledProps=["as","children","className","compact","content","horizontal","piled","raised","size","stacked"],p.propTypes={};var h=p;function b(e){var t=e.children,n=e.className,a=e.content,i=o()("inline",n),c=Object(d.a)(b,e),s=Object(u.a)(b,e);return l.a.createElement(s,r()({},c,{className:i}),m.a.isNil(t)?a:t)}b.handledProps=["as","children","className","content"],b.propTypes={};var f=b;function g(e){var t=e.attached,n=e.basic,a=e.children,i=e.circular,c=e.className,p=e.clearing,h=e.color,b=e.compact,f=e.content,v=e.disabled,y=e.floated,j=e.inverted,w=e.loading,O=e.placeholder,E=e.padded,k=e.piled,N=e.raised,x=e.secondary,M=e.size,C=e.stacked,W=e.tertiary,A=e.textAlign,S=e.vertical,P=o()("ui",h,M,Object(s.a)(n,"basic"),Object(s.a)(i,"circular"),Object(s.a)(p,"clearing"),Object(s.a)(b,"compact"),Object(s.a)(v,"disabled"),Object(s.a)(j,"inverted"),Object(s.a)(w,"loading"),Object(s.a)(O,"placeholder"),Object(s.a)(k,"piled"),Object(s.a)(N,"raised"),Object(s.a)(x,"secondary"),Object(s.a)(C,"stacked"),Object(s.a)(W,"tertiary"),Object(s.a)(S,"vertical"),Object(s.b)(t,"attached"),Object(s.b)(E,"padded"),Object(s.d)(A),Object(s.e)(y,"floated"),"segment",c),z=Object(d.a)(g,e),L=Object(u.a)(g,e);return l.a.createElement(L,r()({},z,{className:P}),m.a.isNil(a)?f:a)}g.handledProps=["as","attached","basic","children","circular","className","clearing","color","compact","content","disabled","floated","inverted","loading","padded","piled","placeholder","raised","secondary","size","stacked","tertiary","textAlign","vertical"],g.Group=h,g.Inline=f,g.propTypes={};t.a=g},390:function(e,t,n){"use strict";n.d(t,"a",function(){return A});var a=n(206),r=n.n(a),i=n(154),o=n.n(i),c=n(155),l=n.n(c),s=n(156),d=n.n(s),u=n(157),m=n.n(u),p=n(158),h=n.n(p),b=n(49),f=n.n(b),g=n(48),v=n.n(g),y=n(189),j=n.n(y),w=n(169),O=n.n(w),E=(n(4),n(0)),k=n.n(E),N=n(381),x=n(266),M=n(349),C=n(348),W=n(378),A=function(e){function t(){var e,n;o()(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return n=d()(this,(e=m()(t)).call.apply(e,[this].concat(i))),v()(f()(f()(n)),"fitsMaxWidth",function(){var e=n.props.maxWidth,t=n.state.width;return!!j()(e)||t<=e}),v()(f()(f()(n)),"fitsMinWidth",function(){var e=n.props.minWidth,t=n.state.width;return!!j()(e)||t>=e}),v()(f()(f()(n)),"setSafeState",function(){var e;return n.mounted&&(e=n).setState.apply(e,arguments)}),v()(f()(f()(n)),"isVisible",function(){return n.fitsMinWidth()&&n.fitsMaxWidth()}),v()(f()(f()(n)),"handleResize",function(e){n.ticking||(n.ticking=!0,requestAnimationFrame(function(){return n.handleUpdate(e)}))}),v()(f()(f()(n)),"handleUpdate",function(e){n.ticking=!1;var t=O()(n.props,"getWidth");n.setSafeState({width:t}),O()(n.props,"onUpdate",e,r()({},n.props,{width:t}))}),n.state={width:O()(n.props,"getWidth")},n}return h()(t,e),l()(t,[{key:"componentDidMount",value:function(){var e=this.props.fireOnMount;this.mounted=!0,N.a.sub("resize",this.handleResize,{target:"window"}),e&&this.handleUpdate()}},{key:"componentWillUnmount",value:function(){this.mounted=!1,N.a.unsub("resize",this.handleResize,{target:"window"})}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.width!==t.width||!Object(x.a)(this.props,e)}},{key:"render",value:function(){var e=this.props.children,n=Object(M.a)(t,this.props),a=Object(C.a)(t,this.props);return this.isVisible()?k.a.createElement(n,a,e):null}}]),t}(E.Component);v()(A,"defaultProps",{getWidth:function(){return Object(W.a)()?window.innerWidth:0}}),v()(A,"onlyMobile",{minWidth:320,maxWidth:767}),v()(A,"onlyTablet",{minWidth:768,maxWidth:991}),v()(A,"onlyComputer",{minWidth:992}),v()(A,"onlyLargeScreen",{minWidth:1200,maxWidth:1919}),v()(A,"onlyWidescreen",{minWidth:1920}),v()(A,"handledProps",["as","children","fireOnMount","getWidth","maxWidth","minWidth","onUpdate"]),A.propTypes={}}}]);
//# sourceMappingURL=component---src-pages-blog-1-js-092f7b48b43f2a70037a.js.map
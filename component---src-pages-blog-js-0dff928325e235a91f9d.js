(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return v});n(52),n(260),n(261);var a=n(7),i=n.n(a),r=n(49),o=n.n(r),l=n(0),c=n.n(l),s=n(167),m=n(152),u=n.n(m),d=n(217),p=n(382),h=n(758),f=n(411),g=n(297),y=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={selectedView:"Programming",activeItem:"Programming"},n.handleCategoryClick=n.handleCategoryClick.bind(o()(o()(n))),n}i()(t,e);var n=t.prototype;return n.handleCategoryClick=function(e,t){var n=t.name,a=e.target.value;this.setState({selectedView:a,activeItem:n})},n.render=function(){var e=this.props,t=e.location,n=e.data,a=n.Programming.edges,i=n.All.edges;console.log("All Data ",n.All),console.log("Programming Data ",n.Programming);return c.a.createElement("div",null,c.a.createElement(s.a,{location:t,color:"#f0f8ff"},c.a.createElement(d.a,{container:!0},c.a.createElement(d.a.Column,{computer:4,mobile:16},c.a.createElement(p.a,{as:h.a,minWidth:768},c.a.createElement(h.a,{textAlign:"center",style:{marginTop:"2.5rem"}},c.a.createElement(f.a,{fluid:!0,vertical:!0,tabular:!0},c.a.createElement(f.a.Item,{name:"All",active:"All"===this.state.activeItem,onClick:this.handleCategoryClick}),c.a.createElement(f.a.Item,{name:"Programming",active:"Programming"===this.state.activeItem,onClick:this.handleCategoryClick}))))),c.a.createElement(d.a.Column,{computer:12,mobile:16},c.a.createElement(h.a,{style:{marginTop:"2.5rem"}},"Programming"==this.state.activeItem&&a.map(function(e,t){var n=e.node;return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{key:t,to:n.fields.slug},c.a.createElement("div",null,c.a.createElement("h3",{style:{display:"inline"}},n.frontmatter.title)," ",c.a.createElement("p",{style:{display:"inline"}},c.a.createElement("em",null," - ",n.frontmatter.date))),c.a.createElement("br",null),c.a.createElement("p",null,n.excerpt)),c.a.createElement(g.a,null))}),"All"==this.state.activeItem&&i.map(function(e,t){var n=e.node;return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{key:t,to:n.fields.slug},c.a.createElement("div",null,c.a.createElement("h3",{style:{display:"inline"}},n.frontmatter.title)," ",c.a.createElement("p",{style:{display:"inline"}},c.a.createElement("em",null," - ",n.frontmatter.date))),c.a.createElement("br",null),c.a.createElement("p",null,n.excerpt)),c.a.createElement(g.a,null))}))))))},t}(l.Component);t.default=y;var v="3532570565"},159:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(152),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(160),m=n.n(s);n.d(t,"PageRenderer",function(){return m.a});var u=n(34);n.d(t,"parsePath",function(){return u.a});var d=i.a.createContext({}),p=function(e){return i.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},160:function(e,t,n){var a;e.exports=(a=n(163))&&a.default||a},163:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(51),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},164:function(e,t,n){},165:function(e,t,n){},166:function(e,t){(function(t){e.exports={siteMetadata:{title:"Internet Home of JJ Clements",description:"Landing Page for JJ Clements",siteUrl:"https://www.clementsjj.com",author:"clementsjj",twitter:"https://twitter.com/clementsjj",github:"https://github.com/clementsjj",linkedin:"https://www.linkedin.com/in/john-clements-084a1811a/",instagram:"https://www.instagram.com/jj4bucky/",adsense:""},plugins:["gatsby-plugin-react-helmet",{resolve:"gatsby-plugin-manifest",options:{name:"gatsby-starter-default",short_name:"starter",start_url:"/",background_color:"#663399",theme_color:"#663399",display:"minimal-ui",icon:"src/images/icons/dancer.svg"}},"gatsby-plugin-offline","gatsby-transformer-remark",{resolve:"gatsby-source-filesystem",options:{name:"src",path:t+"/src/"}}]}}).call(this,"/")},167:function(e,t,n){"use strict";var a=n(7),i=n.n(a),r=n(0),o=n.n(r),l=n(4),c=n.n(l),s=n(177),m=n.n(s),u=n(159),d=(n(164),n(174)),p=n(181),h=n.n(p),f=n(182),g=n.n(f),y=n(180),v=n.n(y),b=n(173),E=n.n(b),w=n(178),k=n.n(w),C=n(179),j=n.n(C),M=n(175),W=n.n(M),N=n(183),x=n.n(N),O=(n(165),{backgroundColor:"#00008b"}),P=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleMenuClose=function(){n.setState({anchorEl:null}),n.handleMobileMenuClose()},n.handleMobileMenuOpen=function(e){n.setState({mobileMoreAnchorEl:e.currentTarget})},n.handleMobileMenuClose=function(){n.setState({mobileMoreAnchorEl:null})},n.state={isShown:!1,selectedIndex:0,anchorEl:null,mobileMoreAnchorEl:null,path:"/"},n}i()(t,e);var n=t.prototype;return n.handlePageNavigation=function(){},n.componentDidMount=function(){console.log("Window.location.pathname: ",window.location)},n.render=function(){var e=this,t=this.props.classes,n=(this.props.location,this.state),a=(n.anchorEl,n.mobileMoreAnchorEl),i=Boolean(a),r=o.a.createElement(k.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:this.handleMobileMenuClose},o.a.createElement(j.a,null,o.a.createElement(u.Link,{to:"/",className:"nav"},o.a.createElement(v.a,{style:{margin:5},className:t.grow,color:"primary",variant:"outlined"},"Home"))),o.a.createElement(j.a,null,o.a.createElement(u.Link,{to:"/about",className:"nav"},o.a.createElement(v.a,{className:t.grow,style:{margin:5},color:"primary",variant:"outlined"},"About"))),o.a.createElement(j.a,null,o.a.createElement(u.Link,{to:"/blog",className:"nav"},o.a.createElement(v.a,{style:{margin:5},color:"primary",variant:"outlined"},"Blog"))));return o.a.createElement("div",{className:t.root},o.a.createElement(h.a,{position:"static"},o.a.createElement(g.a,{style:O},o.a.createElement(E.a,{variant:"h5",color:"inherit",className:t.title},"{JJ_Clements}"),o.a.createElement("div",{className:t.grow}),o.a.createElement("div",{className:t.sectionDesktop},o.a.createElement(u.Link,{to:"/",className:"nav"},o.a.createElement(v.a,{style:{margin:5},className:t.grow,color:"primary",variant:"undefined"!=typeof window&&"/"==window.location.pathname?"contained":"outlined",onClick:this.handlePageNavigation},"Home")),o.a.createElement(u.Link,{to:"/about",className:"nav"},o.a.createElement(v.a,{className:t.grow,style:{margin:5},color:"primary",variant:"undefined"!=typeof window&&"/about"==window.location.pathname?"contained":"outlined",onClick:this.handlePageNavigation},"About")),o.a.createElement(u.Link,{to:"/blog",className:"nav"},o.a.createElement(v.a,{style:{margin:5},color:"primary",variant:"undefined"!=typeof window&&"/blog"==window.location.pathname?"contained":"outlined"},"Blog")),o.a.createElement(u.Link,{to:"/projects",className:"nav"},o.a.createElement(v.a,{style:{margin:5},color:"primary",variant:"undefined"!=typeof window&&"/projects"==window.location.pathname?"contained":"outlined"},"Projects")),o.a.createElement(u.Link,{to:"/gists",className:"nav"},o.a.createElement(v.a,{style:{margin:5},color:"primary",variant:"undefined"!=typeof window&&"/gists"==window.location.pathname?"contained":"outlined"},"Gists")),o.a.createElement(v.a,{style:{margin:5,marginLeft:20},disabled:!0,variant:"outlined",color:"inherit",onClick:function(){return e.setState({isShown:!0})}},"Dashboard")),o.a.createElement("div",{className:t.sectionMobile},o.a.createElement(W.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},o.a.createElement(x.a,null))))),r)},t}(r.Component),S=Object(d.withStyles)(function(e){var t,n,a;return{root:{flexGrow:1,width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:(t={display:"block",fontFamily:"Lato",fontSize:".7rem"},t[e.breakpoints.up("sm")]={display:"block",fontSize:"1.5rem"},t),sectionDesktop:(n={display:"none"},n[e.breakpoints.up("md")]={display:"flex"},n),sectionMobile:(a={display:"flex"},a[e.breakpoints.up("md")]={display:"none"},a)}})(P);n(166);n.d(t,"a",function(){return A});var A=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.color,a={backgroundColor:n};return o.a.createElement("div",{style:a},o.a.createElement(m.a,{title:"Internet Home of JJ",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"}),o.a.createElement("style",null,"body { background-color: "+n+"; }")),o.a.createElement(S,this.props),t)},t}(r.Component);A.propTypes={children:c.a.node.isRequired}},259:function(e,t,n){"use strict";var a=n(236),i=n.n(a);t.a=i.a},297:function(e,t,n){"use strict";var a=n(150),i=n.n(a),r=n(151),o=n.n(r),l=(n(4),n(0)),c=n.n(l),s=n(205),m=n(340),u=n(341),d=n(153);function p(e){var t=e.children,n=e.className,a=e.clearing,r=e.content,l=e.fitted,h=e.hidden,f=e.horizontal,g=e.inverted,y=e.section,v=e.vertical,b=o()("ui",Object(s.a)(a,"clearing"),Object(s.a)(l,"fitted"),Object(s.a)(h,"hidden"),Object(s.a)(f,"horizontal"),Object(s.a)(g,"inverted"),Object(s.a)(y,"section"),Object(s.a)(v,"vertical"),"divider",n),E=Object(m.a)(p,e),w=Object(u.a)(p,e);return c.a.createElement(w,i()({},E,{className:b}),d.a.isNil(t)?r:t)}p.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"],p.propTypes={},t.a=p},382:function(e,t,n){"use strict";n.d(t,"a",function(){return P});var a=n(206),i=n.n(a),r=n(154),o=n.n(r),l=n(155),c=n.n(l),s=n(156),m=n.n(s),u=n(157),d=n.n(u),p=n(158),h=n.n(p),f=n(49),g=n.n(f),y=n(48),v=n.n(y),b=n(189),E=n.n(b),w=n(169),k=n.n(w),C=(n(4),n(0)),j=n.n(C),M=n(373),W=n(259),N=n(341),x=n(340),O=n(370),P=function(e){function t(){var e,n;o()(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return n=m()(this,(e=d()(t)).call.apply(e,[this].concat(r))),v()(g()(g()(n)),"fitsMaxWidth",function(){var e=n.props.maxWidth,t=n.state.width;return!!E()(e)||t<=e}),v()(g()(g()(n)),"fitsMinWidth",function(){var e=n.props.minWidth,t=n.state.width;return!!E()(e)||t>=e}),v()(g()(g()(n)),"setSafeState",function(){var e;return n.mounted&&(e=n).setState.apply(e,arguments)}),v()(g()(g()(n)),"isVisible",function(){return n.fitsMinWidth()&&n.fitsMaxWidth()}),v()(g()(g()(n)),"handleResize",function(e){n.ticking||(n.ticking=!0,requestAnimationFrame(function(){return n.handleUpdate(e)}))}),v()(g()(g()(n)),"handleUpdate",function(e){n.ticking=!1;var t=k()(n.props,"getWidth");n.setSafeState({width:t}),k()(n.props,"onUpdate",e,i()({},n.props,{width:t}))}),n.state={width:k()(n.props,"getWidth")},n}return h()(t,e),c()(t,[{key:"componentDidMount",value:function(){var e=this.props.fireOnMount;this.mounted=!0,M.a.sub("resize",this.handleResize,{target:"window"}),e&&this.handleUpdate()}},{key:"componentWillUnmount",value:function(){this.mounted=!1,M.a.unsub("resize",this.handleResize,{target:"window"})}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.width!==t.width||!Object(W.a)(this.props,e)}},{key:"render",value:function(){var e=this.props.children,n=Object(N.a)(t,this.props),a=Object(x.a)(t,this.props);return this.isVisible()?j.a.createElement(n,a,e):null}}]),t}(C.Component);v()(P,"defaultProps",{getWidth:function(){return Object(O.a)()?window.innerWidth:0}}),v()(P,"onlyMobile",{minWidth:320,maxWidth:767}),v()(P,"onlyTablet",{minWidth:768,maxWidth:991}),v()(P,"onlyComputer",{minWidth:992}),v()(P,"onlyLargeScreen",{minWidth:1200,maxWidth:1919}),v()(P,"onlyWidescreen",{minWidth:1920}),v()(P,"handledProps",["as","children","fireOnMount","getWidth","maxWidth","minWidth","onUpdate"]),P.propTypes={}}}]);
//# sourceMappingURL=component---src-pages-blog-js-0dff928325e235a91f9d.js.map
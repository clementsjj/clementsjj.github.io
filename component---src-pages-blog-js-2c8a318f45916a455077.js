(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return E});a(52),a(352),a(353);var n=a(7),r=a.n(n),o=a(50),l=a.n(o),i=a(0),c=a.n(i),s=a(166),m=a(150),u=a.n(m),d=a(298),p=a(642),h=a(632),g=a(723),f=a(660),y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={selectedView:"Programming",activeItem:"Programming"},a.handleCategoryClick=a.handleCategoryClick.bind(l()(l()(a))),a}r()(t,e);var a=t.prototype;return a.handleCategoryClick=function(e,t){var a=t.name,n=e.target.value;this.setState({selectedView:n,activeItem:a})},a.render=function(){var e=this,t=this.props,a=t.location,n=t.data,r=n.Programming.edges,o=n.All.edges;console.log("All Data ",n.All),console.log("Programming Data ",n.Programming);return c.a.createElement("div",null,c.a.createElement(s.a,{location:a,color:"#f0f8ff"},c.a.createElement(d.a,{container:!0},c.a.createElement(d.a.Column,{computer:4,mobile:16},c.a.createElement(p.a,{as:h.a,minWidth:768},c.a.createElement(h.a,{textAlign:"center",style:{marginTop:"2.5rem"}},c.a.createElement(g.a,{fluid:!0,vertical:!0,tabular:!0},c.a.createElement(g.a.Item,{name:"All",active:"All"===this.state.activeItem,onClick:this.handleCategoryClick}),n.All.edges.map(function(t,a){var n=t.node;if("page"!==n.frontmatter.cat)return c.a.createElement(g.a.Item,{name:n.frontmatter.cat,active:e.state.activeItem===n.frontmatter.cat,onClick:e.handleCategoryClick})}))))),c.a.createElement(d.a.Column,{computer:12,mobile:16},c.a.createElement(h.a,{style:{marginTop:"2.5rem"}},"Programming"==this.state.activeItem&&r.map(function(e,t){var a=e.node;return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{key:t,to:a.fields.slug},c.a.createElement("div",null,c.a.createElement("h3",{style:{display:"inline"}},a.frontmatter.title)," ",c.a.createElement("p",{style:{display:"inline"}},c.a.createElement("em",null," - ",a.frontmatter.date))),c.a.createElement("br",null),c.a.createElement("p",null,a.excerpt)),c.a.createElement(f.a,null))}),"All"==this.state.activeItem&&o.map(function(e,t){var a=e.node;return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{key:t,to:a.fields.slug},c.a.createElement("div",null,c.a.createElement("h3",{style:{display:"inline"}},a.frontmatter.title)," ",c.a.createElement("p",{style:{display:"inline"}},c.a.createElement("em",null," - ",a.frontmatter.date))),c.a.createElement("br",null),c.a.createElement("p",null,a.excerpt)),c.a.createElement(f.a,null))}))))))},t}(i.Component);t.default=y;var E="2769320006"},155:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(150),c=a.n(i);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var s=a(159),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var u=a(34);a.d(t,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},159:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},161:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(51),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},162:function(e,t,a){},163:function(e,t,a){},165:function(e,t){(function(t){e.exports={siteMetadata:{title:"Internet Home of JJ Clements",description:"Landing Page for JJ Clements",siteUrl:"https://www.clementsjj.com",author:"clementsjj",twitter:"https://twitter.com/clementsjj",github:"https://github.com/clementsjj",linkedin:"https://www.linkedin.com/in/john-clements-084a1811a/",instagram:"https://www.instagram.com/jj4bucky/",adsense:""},plugins:["gatsby-plugin-react-helmet",{resolve:"gatsby-plugin-manifest",options:{name:"gatsby-starter-default",short_name:"starter",start_url:"/",background_color:"#663399",theme_color:"#663399",display:"minimal-ui",icon:"src/images/icons/dancer.svg"}},"gatsby-plugin-offline","gatsby-transformer-remark",{resolve:"gatsby-source-filesystem",options:{name:"src",path:t+"/src/"}}]}}).call(this,"/")},166:function(e,t,a){"use strict";var n=a(7),r=a.n(n),o=a(0),l=a.n(o),i=a(4),c=a.n(i),s=a(175),m=a.n(s),u=a(155),d=(a(162),a(173)),p=a(179),h=a.n(p),g=a(180),f=a.n(g),y=a(178),E=a.n(y),v=a(171),b=a.n(v),w=a(176),k=a.n(w),C=a(177),M=a.n(C),N=a(172),j=a.n(N),P=a(181),x=a.n(P),S=(a(163),{backgroundColor:"#00008b"}),A=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleMenuClose=function(){a.setState({anchorEl:null}),a.handleMobileMenuClose()},a.handleMobileMenuOpen=function(e){a.setState({mobileMoreAnchorEl:e.currentTarget})},a.handleMobileMenuClose=function(){a.setState({mobileMoreAnchorEl:null})},a.state={isShown:!1,selectedIndex:0,anchorEl:null,mobileMoreAnchorEl:null,path:"/"},a}r()(t,e);var a=t.prototype;return a.handlePageNavigation=function(){},a.componentDidMount=function(){console.log("Window.location.pathname: ",window.location)},a.render=function(){var e=this,t=this.props.classes,a=(this.props.location,this.state),n=(a.anchorEl,a.mobileMoreAnchorEl),r=Boolean(n),o=l.a.createElement(k.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:r,onClose:this.handleMobileMenuClose},l.a.createElement(M.a,null,l.a.createElement(u.Link,{to:"/",className:"nav"},l.a.createElement(E.a,{style:{margin:5},className:t.grow,color:"primary",variant:"outlined"},"Home"))),l.a.createElement(M.a,null,l.a.createElement(u.Link,{to:"/about",className:"nav"},l.a.createElement(E.a,{className:t.grow,style:{margin:5},color:"primary",variant:"outlined"},"About"))),l.a.createElement(M.a,null,l.a.createElement(u.Link,{to:"/blog",className:"nav"},l.a.createElement(E.a,{style:{margin:5},color:"primary",variant:"outlined"},"Blog"))));return l.a.createElement("div",{className:t.root},l.a.createElement(h.a,{position:"static"},l.a.createElement(f.a,{style:S},l.a.createElement(b.a,{variant:"h5",color:"inherit",className:t.title},"{JJ_Clements}"),l.a.createElement("div",{className:t.grow}),l.a.createElement("div",{className:t.sectionDesktop},l.a.createElement(u.Link,{to:"/",className:"nav"},l.a.createElement(E.a,{style:{margin:5},className:t.grow,color:"primary",variant:"undefined"!=typeof window&&"/"==window.location.pathname?"contained":"outlined",onClick:this.handlePageNavigation},"Home")),l.a.createElement(u.Link,{to:"/about",className:"nav"},l.a.createElement(E.a,{className:t.grow,style:{margin:5},color:"primary",variant:"undefined"!=typeof window&&"/about"==window.location.pathname?"contained":"outlined",onClick:this.handlePageNavigation},"About")),l.a.createElement(u.Link,{to:"/blog",className:"nav"},l.a.createElement(E.a,{style:{margin:5},color:"primary",variant:"undefined"!=typeof window&&"/blog"==window.location.pathname?"contained":"outlined"},"Blog")),l.a.createElement(u.Link,{to:"/projects",className:"nav"},l.a.createElement(E.a,{style:{margin:5},color:"primary",variant:"undefined"!=typeof window&&"/projects"==window.location.pathname?"contained":"outlined"},"Projects")),l.a.createElement(E.a,{style:{margin:5,marginLeft:20},disabled:!0,variant:"outlined",color:"inherit",onClick:function(){return e.setState({isShown:!0})}},"Dashboard")),l.a.createElement("div",{className:t.sectionMobile},l.a.createElement(j.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},l.a.createElement(x.a,null))))),o)},t}(o.Component),L=Object(d.withStyles)(function(e){var t,a,n;return{root:{flexGrow:1,width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:(t={display:"block",fontFamily:"Lato",fontSize:".7rem"},t[e.breakpoints.up("sm")]={display:"block",fontSize:"1.5rem"},t),sectionDesktop:(a={display:"none"},a[e.breakpoints.up("md")]={display:"flex"},a),sectionMobile:(n={display:"flex"},n[e.breakpoints.up("md")]={display:"none"},n)}})(A);a(165);a.d(t,"a",function(){return q});var q=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.color,n={backgroundColor:a};return l.a.createElement("div",{style:n},l.a.createElement(m.a,{title:"Internet Home of JJ",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},l.a.createElement("html",{lang:"en"}),l.a.createElement("style",null,"body { background-color: "+a+"; }")),l.a.createElement(L,this.props),t)},t}(o.Component);q.propTypes={children:c.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-blog-js-2c8a318f45916a455077.js.map
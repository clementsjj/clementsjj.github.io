(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return o});n(53);var a=n(0),r=n.n(a),l=n(163);t.default=function(e){var t=e.data,n=e.location;return console.log("MD Files:"),console.log(t),r.a.createElement(l.a,{location:n},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:"1.45rem"}},r.a.createElement("h1",null,"Markdown Files"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Word Count"),r.a.createElement("th",null,"Time to Read"))),r.a.createElement("tbody",null,t.allMarkdownRemark.edges.map(function(e,t){var n=e.node;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,n.frontmatter.title),r.a.createElement("td",null,n.frontmatter.date),r.a.createElement("td",null,n.wordCount.words),r.a.createElement("td",null,n.timeToRead))}))),r.a.createElement("h4",null,t.allMarkdownRemark.totalCount," Posts"),t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement("div",{key:t.id},r.a.createElement("h3",null,t.frontmatter.title," ",r.a.createElement("span",null,"- ",t.frontmatter.date)),r.a.createElement("p",null,t.excerpt))})))};var o="475080715"},155:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),l=n(4),o=n.n(l),i=n(147),c=n.n(i);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var s=n(157),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var m=n(34);n.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},157:function(e,t,n){var a;e.exports=(a=n(164))&&a.default||a},163:function(e,t,n){"use strict";var a=n(7),r=n.n(a),l=n(0),o=n.n(l),i=n(4),c=n.n(i),s=n(179),u=n.n(s),m=n(155),d=(n(165),n(176)),p=n(183),h=n.n(p),f=n(184),g=n.n(f),E=n(182),y=n.n(E),v=n(174),b=n.n(v),w=n(180),k=n.n(w),M=n(181),C=n.n(M),N=n(175),x=n.n(N),R=n(185),S=n.n(R),q=(n(166),{backgroundColor:"#00008b"}),L=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleMenuClose=function(){n.setState({anchorEl:null}),n.handleMobileMenuClose()},n.handleMobileMenuOpen=function(e){n.setState({mobileMoreAnchorEl:e.currentTarget})},n.handleMobileMenuClose=function(){n.setState({mobileMoreAnchorEl:null})},n.state={isShown:!1,selectedIndex:0,anchorEl:null,mobileMoreAnchorEl:null},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){},n.render=function(){var e=this,t=this.props.classes,n=this.props.location,a=this.state,r=(a.anchorEl,a.mobileMoreAnchorEl),l=Boolean(r);console.log("Location-Navbar-Render: ",n);var i=o.a.createElement(k.a,{anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:this.handleMobileMenuClose},o.a.createElement(C.a,null,o.a.createElement(m.Link,{to:"/",className:"nav"},o.a.createElement(y.a,{style:{margin:5},className:t.grow,color:"primary",variant:"outlined"},"Home"))),o.a.createElement(C.a,null,o.a.createElement(m.Link,{to:"/about",className:"nav"},o.a.createElement(y.a,{className:t.grow,style:{margin:5},color:"primary",variant:"outlined"},"About"))),o.a.createElement(C.a,null,o.a.createElement(m.Link,{to:"/blog",className:"nav"},o.a.createElement(y.a,{style:{margin:5},color:"primary",variant:"outlined"},"Blog"))));return o.a.createElement("div",{className:t.root},o.a.createElement(h.a,{position:"static"},o.a.createElement(g.a,{style:q},o.a.createElement(b.a,{variant:"h5",color:"inherit",className:t.title},"{JJ_Clements}"),o.a.createElement("div",{className:t.grow}),o.a.createElement("div",{className:t.sectionDesktop},o.a.createElement(m.Link,{to:"/",className:"nav"},o.a.createElement(y.a,{style:{margin:5},className:t.grow,color:"primary",variant:"outlined"},"Home")),o.a.createElement(m.Link,{to:"/about",className:"nav"},o.a.createElement(y.a,{className:t.grow,style:{margin:5},color:"primary",variant:"outlined"},"About")),o.a.createElement(m.Link,{to:"/blog",className:"nav"},o.a.createElement(y.a,{style:{margin:5},color:"primary",variant:"outlined"},"Blog")),o.a.createElement(y.a,{style:{margin:5,marginLeft:20},disabled:!0,variant:"outlined",color:"inherit",onClick:function(){return e.setState({isShown:!0})}},"Dashboard")),o.a.createElement("div",{className:t.sectionMobile},o.a.createElement(x.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},o.a.createElement(S.a,null))))),i)},t}(l.Component),j=Object(d.withStyles)(function(e){var t,n,a;return{root:{flexGrow:1,width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:(t={display:"block",fontFamily:"Heletica",fontSize:".7rem"},t[e.breakpoints.up("sm")]={display:"block",fontSize:"1.5rem"},t),sectionDesktop:(n={display:"none"},n[e.breakpoints.up("md")]={display:"flex"},n),sectionMobile:(a={display:"flex"},a[e.breakpoints.up("md")]={display:"none"},a)}})(L);n(167);n.d(t,"a",function(){return J});var J=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.color,a={backgroundColor:n};return o.a.createElement("div",{style:a},o.a.createElement(u.a,{title:"Internet Home of JJ",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"}),o.a.createElement("style",null,"body { background-color: "+n+"; }")),o.a.createElement(j,this.props),t)},t}(l.Component);J.propTypes={children:c.a.node.isRequired}},164:function(e,t,n){"use strict";n.r(t);n(36);var a=n(0),r=n.n(a),l=n(4),o=n.n(l),i=n(51),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},165:function(e,t,n){},166:function(e,t,n){},167:function(e,t){(function(t){e.exports={siteMetadata:{title:"Internet Home of JJ Clements",description:"Landing Page for JJ Clements",siteUrl:"https://www.clementsjj.com",author:"clementsjj",twitter:"clementsjj",adsense:""},plugins:["gatsby-plugin-react-helmet",{resolve:"gatsby-plugin-manifest",options:{name:"gatsby-starter-default",short_name:"starter",start_url:"/",background_color:"#663399",theme_color:"#663399",display:"minimal-ui",icon:"src/images/icons/dancer.svg"}},"gatsby-plugin-offline","gatsby-transformer-remark",{resolve:"gatsby-source-filesystem",options:{name:"src",path:t+"/src/"}}]}}).call(this,"/")}}]);
//# sourceMappingURL=component---src-pages-markdown-files-js-4e0fe5570a2e84b30865.js.map
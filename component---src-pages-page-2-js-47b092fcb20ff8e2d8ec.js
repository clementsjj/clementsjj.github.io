(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(155),l=n(163);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(o.Link,{to:"/"},"Go back to the homepage"))}},155:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),o=n(4),l=n.n(o),i=n(147),s=n.n(i);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var c=n(157),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var m=n(34);n.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),d=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},157:function(e,t,n){var a;e.exports=(a=n(164))&&a.default||a},163:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),l=n.n(o),i=n(4),s=n.n(i),c=n(179),u=n.n(c),m=n(155),p=(n(165),n(176)),d=n(183),h=n.n(d),f=n(184),g=n.n(f),y=n(182),b=n.n(y),v=n(174),E=n.n(v),w=n(180),k=n.n(w),M=n(181),C=n.n(M),N=n(175),S=n.n(N),L=n(185),x=n.n(L),q=(n(166),{backgroundColor:"#00008b"}),j=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={isShown:!1,selectedIndex:0,anchorEl:null,mobileMoreAnchorEl:null},t.handleMenuClose=function(){t.setState({anchorEl:null}),t.handleMobileMenuClose()},t.handleMobileMenuOpen=function(e){t.setState({mobileMoreAnchorEl:e.currentTarget})},t.handleMobileMenuClose=function(){t.setState({mobileMoreAnchorEl:null})},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){console.log("Navbar Props: ",this.props),console.log("Navbar Location: ",this.props.location)},n.render=function(){var e=this,t=this.props.classes,n=(this.props.location,this.state),a=(n.anchorEl,n.mobileMoreAnchorEl),r=Boolean(a),o=l.a.createElement(k.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:r,onClose:this.handleMobileMenuClose},l.a.createElement(C.a,null,l.a.createElement(m.Link,{to:"/",className:"nav"},l.a.createElement(b.a,{style:{margin:5},className:t.grow,color:"primary",variant:"outlined"},"Home"))),l.a.createElement(C.a,null,l.a.createElement(m.Link,{to:"/about",className:"nav"},l.a.createElement(b.a,{className:t.grow,style:{margin:5},color:"primary",variant:"outlined"},"About"))),l.a.createElement(C.a,null,l.a.createElement(m.Link,{to:"/blog",className:"nav"},l.a.createElement(b.a,{style:{margin:5},color:"primary",variant:"outlined"},"Blog"))));return l.a.createElement("div",{className:t.root},l.a.createElement(h.a,{position:"static"},l.a.createElement(g.a,{style:q},l.a.createElement(E.a,{variant:"h5",color:"inherit",className:t.title},"{JJ_Clements}"),l.a.createElement("div",{className:t.grow}),l.a.createElement("div",{className:t.sectionDesktop},l.a.createElement(m.Link,{to:"/",className:"nav"},l.a.createElement(b.a,{style:{margin:5},className:t.grow,color:"primary",variant:"/"===this.props.location.pathname?"contained":"outlined"},"Home")),l.a.createElement(m.Link,{to:"/about",className:"nav"},l.a.createElement(b.a,{className:t.grow,style:{margin:5},color:"primary",variant:"outlined"},"About")),l.a.createElement(m.Link,{to:"/blog",className:"nav"},l.a.createElement(b.a,{style:{margin:5},color:"primary",variant:"outlined"},"Blog")),l.a.createElement(b.a,{style:{margin:5,marginLeft:20},disabled:!0,variant:"outlined",color:"inherit",onClick:function(){return e.setState({isShown:!0})}},"Dashboard")),l.a.createElement("div",{className:t.sectionMobile},l.a.createElement(S.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},l.a.createElement(x.a,null))))),o)},t}(o.Component),J=Object(p.withStyles)(function(e){var t,n,a;return{root:{flexGrow:1,width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:(t={display:"block",fontFamily:"Heletica",fontSize:".7rem"},t[e.breakpoints.up("sm")]={display:"block",fontSize:"1.5rem"},t),sectionDesktop:(n={display:"none"},n[e.breakpoints.up("md")]={display:"flex"},n),sectionMobile:(a={display:"flex"},a[e.breakpoints.up("md")]={display:"none"},a)}})(j);n(167);n.d(t,"a",function(){return R});var R=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.color,a={backgroundColor:n};return l.a.createElement("div",{style:a},l.a.createElement(u.a,{title:"Internet Home of JJ",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},l.a.createElement("html",{lang:"en"}),l.a.createElement("style",null,"body { background-color: "+n+"; }")),l.a.createElement(J,this.props),t)},t}(o.Component);R.propTypes={children:s.a.node.isRequired}},164:function(e,t,n){"use strict";n.r(t);n(36);var a=n(0),r=n.n(a),o=n(4),l=n.n(o),i=n(51),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},165:function(e,t,n){},166:function(e,t,n){},167:function(e,t){(function(t){e.exports={siteMetadata:{title:"Internet Home of JJ Clements",description:"Landing Page for JJ Clements",siteUrl:"https://www.clementsjj.com",author:"clementsjj",twitter:"clementsjj",adsense:""},plugins:["gatsby-plugin-react-helmet",{resolve:"gatsby-plugin-manifest",options:{name:"gatsby-starter-default",short_name:"starter",start_url:"/",background_color:"#663399",theme_color:"#663399",display:"minimal-ui",icon:"src/images/icons/dancer.svg"}},"gatsby-plugin-offline","gatsby-transformer-remark",{resolve:"gatsby-source-filesystem",options:{name:"src",path:t+"/src/"}}]}}).call(this,"/")}}]);
//# sourceMappingURL=component---src-pages-page-2-js-47b092fcb20ff8e2d8ec.js.map
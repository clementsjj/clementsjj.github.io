(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{138:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(167);t.default=function(){return o.a.createElement(r.a,null,o.a.createElement("h1",null,"NOT FOUND"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},159:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),o=n.n(a),r=n(4),i=n.n(r),l=n(152),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(160),u=n.n(c);n.d(t,"PageRenderer",function(){return u.a});var m=n(34);n.d(t,"parsePath",function(){return m.a});var d=o.a.createContext({}),p=function(e){return o.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},160:function(e,t,n){var a;e.exports=(a=n(163))&&a.default||a},163:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),o=n.n(a),r=n(4),i=n.n(r),l=n(51),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},164:function(e,t,n){},165:function(e,t,n){},166:function(e,t){(function(t){e.exports={siteMetadata:{title:"Internet Home of JJ Clements",description:"Landing Page for JJ Clements",siteUrl:"https://www.clementsjj.com",author:"clementsjj",twitter:"https://twitter.com/clementsjj",github:"https://github.com/clementsjj",linkedin:"https://www.linkedin.com/in/john-clements-084a1811a/",instagram:"https://www.instagram.com/jj4bucky/",adsense:""},plugins:["gatsby-plugin-react-helmet",{resolve:"gatsby-plugin-manifest",options:{name:"gatsby-starter-default",short_name:"starter",start_url:"/",background_color:"#663399",theme_color:"#663399",display:"minimal-ui",icon:"src/images/icons/dancer.svg"}},"gatsby-plugin-offline","gatsby-transformer-remark",{resolve:"gatsby-source-filesystem",options:{name:"src",path:t+"/src/"}}]}}).call(this,"/")},167:function(e,t,n){"use strict";var a=n(7),o=n.n(a),r=n(0),i=n.n(r),l=n(4),s=n.n(l),c=n(177),u=n.n(c),m=n(159),d=(n(164),n(174)),p=n(181),h=n.n(p),f=n(182),g=n.n(f),y=n(180),w=n.n(y),b=n(173),v=n.n(b),E=n(178),k=n.n(E),N=n(179),j=n.n(N),C=n(175),M=n.n(C),L=n(183),S=n.n(L),x=(n(165),{backgroundColor:"#00008b"}),q=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleMenuClose=function(){n.setState({anchorEl:null}),n.handleMobileMenuClose()},n.handleMobileMenuOpen=function(e){n.setState({mobileMoreAnchorEl:e.currentTarget})},n.handleMobileMenuClose=function(){n.setState({mobileMoreAnchorEl:null})},n.state={isShown:!1,selectedIndex:0,anchorEl:null,mobileMoreAnchorEl:null,path:"/"},n}o()(t,e);var n=t.prototype;return n.handlePageNavigation=function(){},n.componentDidMount=function(){console.log("Window.location.pathname: ",window.location)},n.render=function(){var e=this,t=this.props.classes,n=(this.props.location,this.state),a=(n.anchorEl,n.mobileMoreAnchorEl),o=Boolean(a),r=i.a.createElement(k.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:this.handleMobileMenuClose},i.a.createElement(j.a,null,i.a.createElement(m.Link,{to:"/",className:"nav"},i.a.createElement(w.a,{style:{margin:5},className:t.grow,color:"primary",variant:"outlined"},"Home"))),i.a.createElement(j.a,null,i.a.createElement(m.Link,{to:"/about",className:"nav"},i.a.createElement(w.a,{className:t.grow,style:{margin:5},color:"primary",variant:"outlined"},"About"))),i.a.createElement(j.a,null,i.a.createElement(m.Link,{to:"/blog",className:"nav"},i.a.createElement(w.a,{style:{margin:5},color:"primary",variant:"outlined"},"Blog"))));return i.a.createElement("div",{className:t.root},i.a.createElement(h.a,{position:"static"},i.a.createElement(g.a,{style:x},i.a.createElement(v.a,{variant:"h5",color:"inherit",className:t.title},"{JJ_Clements}"),i.a.createElement("div",{className:t.grow}),i.a.createElement("div",{className:t.sectionDesktop},i.a.createElement(m.Link,{to:"/",className:"nav"},i.a.createElement(w.a,{style:{margin:5},className:t.grow,color:"primary",variant:"undefined"!=typeof window&&"/"==window.location.pathname?"contained":"outlined",onClick:this.handlePageNavigation},"Home")),i.a.createElement(m.Link,{to:"/about",className:"nav"},i.a.createElement(w.a,{className:t.grow,style:{margin:5},color:"primary",variant:"undefined"!=typeof window&&"/about"==window.location.pathname?"contained":"outlined",onClick:this.handlePageNavigation},"About")),i.a.createElement(m.Link,{to:"/blog",className:"nav"},i.a.createElement(w.a,{style:{margin:5},color:"primary",variant:"undefined"!=typeof window&&"/blog"==window.location.pathname?"contained":"outlined"},"Blog")),i.a.createElement(m.Link,{to:"/projects",className:"nav"},i.a.createElement(w.a,{style:{margin:5},color:"primary",variant:"undefined"!=typeof window&&"/projects"==window.location.pathname?"contained":"outlined"},"Projects")),i.a.createElement(m.Link,{to:"/gists",className:"nav"},i.a.createElement(w.a,{style:{margin:5},color:"primary",variant:"undefined"!=typeof window&&"/gists"==window.location.pathname?"contained":"outlined"},"Gists")),i.a.createElement(w.a,{style:{margin:5,marginLeft:20},disabled:!0,variant:"outlined",color:"inherit",onClick:function(){return e.setState({isShown:!0})}},"Dashboard")),i.a.createElement("div",{className:t.sectionMobile},i.a.createElement(M.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},i.a.createElement(S.a,null))))),r)},t}(r.Component),J=Object(d.withStyles)(function(e){var t,n,a;return{root:{flexGrow:1,width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:(t={display:"block",fontFamily:"Lato",fontSize:".7rem"},t[e.breakpoints.up("sm")]={display:"block",fontSize:"1.5rem"},t),sectionDesktop:(n={display:"none"},n[e.breakpoints.up("md")]={display:"flex"},n),sectionMobile:(a={display:"flex"},a[e.breakpoints.up("md")]={display:"none"},a)}})(q);n(166);n.d(t,"a",function(){return P});var P=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.color,a={backgroundColor:n};return i.a.createElement("div",{style:a},i.a.createElement(u.a,{title:"Internet Home of JJ",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"}),i.a.createElement("style",null,"body { background-color: "+n+"; }")),i.a.createElement(J,this.props),t)},t}(r.Component);P.propTypes={children:s.a.node.isRequired}}}]);
//# sourceMappingURL=component---src-pages-404-js-a598c165ed3005a61592.js.map
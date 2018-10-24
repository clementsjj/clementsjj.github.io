import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import './layout.css'
import Navbar from './Navbar/Navbar'
import { siteMetadata } from '../../gatsby-config'

export default class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Helmet
          title={'Internet Home of JJ'}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Navbar {...this.props} />
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        {/* <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div> */}
        {children}
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Helmet
//           title={'Internet Home of JJ'}
//           meta={[
//             { name: 'description', content: 'Sample' },
//             { name: 'keywords', content: 'sample, something' },
//           ]}
//         >
//           <html lang="en" />
//         </Helmet>
//         <Navbar {...this.props} />
//         {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
//         {/* <div
//           style={{
//             margin: '0 auto',
//             maxWidth: 960,
//             padding: '0px 1.0875rem 1.45rem',
//             paddingTop: 0,
//           }}
//         >
//           {children}
//         </div> */}
//         {children}
//       </>
//     )}
//   />
// )

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout

import React from 'react'
import { Link } from 'gatsby'
import { Pane } from 'evergreen-ui'

const style = {
  display: 'flex',
  flexDirection: 'row',
  jusitifyContent: 'space-around',
}
const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#00008b',
      //marginBottom: '1.45rem',
    }}
  >
    {/* <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
    {/* <Pane style={style}>Hey</Pane> */}
  </div>
)

export default Header

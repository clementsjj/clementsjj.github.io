import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Homebody from '../components/Homebody/Homebody'

const AboutPage = ({ location }) => (
  <Layout location={location}>
    <Homebody />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default AboutPage

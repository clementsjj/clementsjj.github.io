import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Homebody from '../components/Homebody/Homebody'

const AboutPage = ({ location }) => (
  <Layout location={location}>
    <Homebody />
    <Link to="/about-this-site/">About This Page...</Link>
  </Layout>
)

export default AboutPage

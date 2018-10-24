import React from 'react'
import { Link } from 'gatsby'
import Hero from '../components/Hero/Hero';
import Layout from '../components/layout'
import Homebody from '../components/Homebody/Homebody';

const IndexPage = () => (
  <Layout>
    <Hero/>
    <Homebody />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

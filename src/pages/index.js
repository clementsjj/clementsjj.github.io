import React from 'react'
//import { Link } from 'gatsby'
import Hero from '../components/Hero/Hero'
import Layout from '../components/layout'
import Homebody from '../components/Homebody/Homebody'
import HomebodyTwo from '../components/Homebody/HomebodyTwo'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Hero />
    <Homebody />
    <HomebodyTwo />
  </Layout>
)

export default IndexPage

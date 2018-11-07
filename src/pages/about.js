import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Aboutaccordion from '../components/Aboutbody/Aboutaccordion'
import Aboutaccordion2 from '../components/Aboutbody/Aboutaccordion2'
import Aboutaccordion3 from '../components/Aboutbody/Aboutaccordion3'

const AboutPage = ({ location }) => (
  <Layout location={location}>
    <Aboutaccordion />
    {/* <Aboutaccordion2 />
    <Aboutaccordion3 /> */}
    <Link to="/about-this-site/">About This Page...</Link>
  </Layout>
)

export default AboutPage

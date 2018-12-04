import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Butter from 'buttercms'
const butter = Butter('5e4558fe4e0400477fda1dfed305974d4c5aff01')

butter.post.list({ page: 1, page_size: 10 }).then(function(response) {
  console.log(response)
})

const Gists = ({ location }) => (
  <Layout location={location} color={'#f0f8ff'}>
    Placeholder
  </Layout>
)

export default Gists

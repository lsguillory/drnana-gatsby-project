import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'

const blog = () => { //arrow means going to create page
 return (
  <Layout>
   hello from the blog page <Link to="/">back Home</Link>
  </Layout>
 )
}

export default blog

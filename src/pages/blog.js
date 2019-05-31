import React from "react"
// import {Link} from 'gatsby'
import Layout from '../components/layout'
import StyledHero from "../components/styledHero"
import { graphql } from 'gatsby'

const Blog = ({data}) => { //arrow means going to create page
 
 return (

  <Layout>
  <StyledHero img={data.blogBcg.childImageSharp.fluid} />
  </Layout>
 )
}

export const query = graphql`
    query {
  blogBcg:file(relativePath:{ eq:"blogBcg.jpeg" }){
    childImageSharp {
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
    
}
 `


export default Blog

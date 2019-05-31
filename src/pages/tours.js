import React, { Component } from 'react'
import Layout from '../components/layout'
import StyledHero from "../components/styledHero"
import { graphql } from 'gatsby'




export default class tours extends Component {
 render() {
  return ( 
  
  <Layout> 
  <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />

   </Layout>
  )
 }
}

export const query = graphql`
    query {
  defaultBcg:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp {
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
    
}
 `

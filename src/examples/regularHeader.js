import React from 'react'
import { StaticQuery,graphql} from 'gatsby'

const getSiteData = graphql`
 query {
  site {
    siteMetadata {
      title
      description
      author
      data {
        name
        age
      }
    }
  }
}

`
const regularHeader = () => {
 return ( 
 <StaticQuery query={getSiteData} render={data => {
  console.log(data)

   return ( 
   <div> 
   <h1>title : {data.site.siteMetadata.title}</h1>

  
   </div>
   )
 }} 

 />
 )
 }
  

export default regularHeader


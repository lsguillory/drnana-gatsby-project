import React from 'react'
import Tour from '../tours/tour'
import { useStaticQuery, graphql } from 'gatsby'
import Title from '../title'
import styles from '../../css/items.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const getTours = graphql`
query {
  featuredTours:allContentfulTours(filter:{featured:{eq:true}}){
    edges {
      node {
        name
        price
        slug
        country
        contentful_id
        days
        images {
          fluid {
            # src **--replace with fragment
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}

`

const FeaturedTours = () => {
 const response = useStaticQuery(getTours)
 //console.log(response);
 const tours = response.featuredTours.edges
// console.log(tours);

 return (
  <section className={styles.tours}> 
  <Title title='featured' subtitle='tours' />
  <div className={styles.center}>
       {tours.map(({ node }) => { //getting all single tour (nodes) from tour.js 
       return <Tour key={node.contentful_id} tour={node} />
     })}
    </div>
   <AniLink fade to='/tours' className='btn-primary'>
    all tours
   </AniLink>
   </section>
 
 )
}

export default FeaturedTours

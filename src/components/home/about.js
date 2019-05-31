import React from 'react'
import Title from '../title'
import styles from '../../css/about.module.css'
// import img from '../../images/defaultBcg.jpeg' --basic way to do
import {useStaticQuery, graphql} from 'gatsby' // gatsby image STEP 1
//import toindex page as part of HOME page
import Img from 'gatsby-image'
const getAbout = graphql`   # gatsby image STEP 2 - test in graphql first and bring over


query aboutImage {
  aboutImage: file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp {
      fluid(maxWidth:600){
        # src  --replace with below
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
    
}
`

const About = () => {
  const {aboutImage} = useStaticQuery(getAbout);     // gatsby image STEP 3--name(aboutImage) matches query name above 
 return (
  <section className={styles.about}>
   
   <Title title='about' subtitle='us' />
   <div className={styles.aboutCenter}> 
    <article className={styles.aboutImg}>
    <div className={styles.imgContainer}>
     {/* <img src={img} alt='about company'/> ** Basic way to do**  */}
     <Img fluid={aboutImage.childImageSharp.fluid} alt='awesome landscape' />
    </div>
    </article>
    <article className={styles.aboutInfo}>
    <h4>explore the difference</h4> 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum 
    reiciendis vitae ipsa saepe placeat!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum 
    reiciendis vitae ipsa saepe placeat!</p>
    <button type='button' className='btn-primary'>read more</button>
    
    </article>
   </div>
   </section>
 )
}

export default About

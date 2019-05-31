import React from 'react'
import styled from 'styled-components'
import BackgrounImage from 'gatsby-background-image' //image plug in to optimize background image


const StyledHero = ({ img, className, children, home }) => {  
 // render all below --**home** because pages will treat background img differently
 return (

  <div>
   <BackgrounImage className={className} fluid={img} home= {home}> 
      {children}
   </BackgrounImage>
  </div>
 )
 }

export default styled(StyledHero)`
  min-height: ${props => (props.home ? 'calc(100vh - 62px)':'50vh')};
  background: ${props => props.home ? 
   'linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))'
   :'none'}; 
  background-position: center;
  background-size: cover;
  opacity: 1!important; 
  display: flex;
  justify-content: center;
  align-items: center;

`

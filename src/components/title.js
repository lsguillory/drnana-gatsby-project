import React from 'react'
import styled from 'styled-components'

const Title = ({ title, subtitle }) => {
 return (
  
  <TitleWrapper>
  <h4>
  <span className='title'>{title}</span>
  <span>{subtitle}</span>
  </h4>
  </TitleWrapper>
 )
}
//can do here because of styled-components plugin
//can nest out of the box, style tight away

const TitleWrapper = styled.div`
text-transform: uppercase;
font-size: 2.3rem;
margin-bottom: 1rem;
margin-top: 1rem;

h4 {
 text-align: center;
 letter-spacing: 7px;
 color: var(--primaryColor);
}

.title {
 color: var(--mainBlack);
}

/* span {
 display: block;
} */

@media (min-width: 576px) {
 span {
  display: inline-bloxk;
  margin: 0 0.35rem;
 }
}

`

export default Title

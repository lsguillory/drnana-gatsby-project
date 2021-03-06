import React from 'react'
import Layout from '../components/layout'
import styles from '../css/error.module.css'
//import {Link} from 'gatsby'  replaced with AniLink
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Banner from '../components/banner' //use banner background - title


export default function error() {
 return ( 

  <Layout>
  <header className={styles.error}>
  <Banner title="oops it's a dead end">
  <AniLink fade to='/' className='btn-white'>back to home page</AniLink>

  </Banner>
  </header>
  </Layout>
 )
}

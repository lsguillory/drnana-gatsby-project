import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SimpleHero from "../components/simpleHero"
import Banner from '../components/banner'
import About from '../components/home/about'
import Services from '../components/home/services'


export default () => (
  <Layout>

    <SimpleHero>
     <Banner title='continue exploring' info='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptate?'>
     <Link to="/tours" className='btn-white'>explore tours</Link>
     </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
)

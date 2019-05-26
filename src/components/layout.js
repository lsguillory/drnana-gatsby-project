import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import "./layout.css"
//import 'bootstrap/dist/css/bootstrap.min.css'



const Layout = ({children}) => { //need chidren PROP content wrapped in Layout 
   return (
  
  <main>
  <Navbar />
  {children}
  <Footer />
   </main>
 )
}

export default Layout

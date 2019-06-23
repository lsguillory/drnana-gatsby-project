/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
/* Your site config here */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
//see .env.development file and gitignore

module.exports = {

  siteMetadata: {
    title: 'Backroads',
    description: 'Explore awesome worldwide tours & discover what makes eacho of them unique. Forget your daily routine & say yes to adventure.',
    author: '@janedoe',
    data: {
      name: 'name example',
      age: 24,
    },
  },

  plugins: [

  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
    },
  },

  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  },

  `gatsby-transformer-sharp`, 
  `gatsby-plugin-sharp`,
   `gatsby-plugin-sass`, 
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-transition-link`,
  `gatsby-plugin-playground`,
    
  ],

}


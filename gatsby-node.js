
const path = require('path')

exports.createPages =async({graphql, actions}) => {
 const {createPage} = actions 

 const {data} = await graphql(`
 query {
  allTours:allContentfulTour {
    edges{
       node {
        slug
      }
    }
  }
} 
 `)
//console.log(data) ---no errors and object listed after restart in terminal
  
data.allTours.edges.forEach(({node}) => {
   createPage({
     path: `tours/${node.slug}`,
   component: path.resolve('./src/templates/tour-template.js'),
     context: {
       slug: node.slug, //variable slug will be pushed for single tour
     },
   })
  })
 }
 
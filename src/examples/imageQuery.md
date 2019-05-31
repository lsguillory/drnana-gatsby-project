{
  fixed:file(relativePath:{eq:"defaultBcg.jpeg"}){
    childImageSharp{
      fixed(width:300, height:400){
        src
      }
    }
   
    }
    
   fluid:file(relativePath:{eq:"blogBcg.jpeg"}){
     childImageSharp{
      fluid{
        src
      }
    }
  }
}
**************************************
3 images side by side see examples/images.js


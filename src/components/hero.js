import React from "react"
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image"

function Hero () {
    return (
        <StaticQuery 
            query={heroQuery}
            render={data => {
                return (
                    <div>
                        <Image 
                            alt="hero"
                            fluid={data.Image.childImageSharp.fluid}
                        />
                        <small>Thailand 2018</small>
                        <p style={{marginTop: '10px'}}>Marco Totte Perera. 26 y/o fullstack C# .Net developer who loves traveling. Back in Sweden after 6 months
                        traveling solo in South East Asia and Europe while working at the same time. Send me a message on my <a href="https://www.linkedin.com/in/totte-perera-9a907b112/">Linkedin</a> if you have any questions.  
                        </p>
                    </div>
                )
            }}
        />
    )
}

export default Hero

const heroQuery = graphql`
  query HeroQuery {
    Image: file(absolutePath: { regex: "/hero.jpg/" }) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
        }
    }
  }
`

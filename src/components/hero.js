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
                        <p style={{marginTop: '10px'}}>Marco Totte Perera. 27 y/o C# .Net developer with about four years long experience.
                        Running my own business as a freelancer. Send me a message on my <a href="https://www.linkedin.com/in/totte-perera-9a907b112/">Linkedin</a> if you are interested in a collaboration.
                        Have a look at my <a href="/cv">CV</a> if you want to know more about my qualities. 
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

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
                        <p style={{marginTop: '10px'}}>Welcome to my page! My name is Totte Perera, some people know me as Marco Perera.
                            I'm using my page to gather
                            information about myself but also to explore some front end techniques. Once in a while I'll write a
                            blog post. Have a look around and hit me up on any
                            social media if you have any questions or just want to talk.
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

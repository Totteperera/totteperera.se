import React from 'react'
import { Link } from "gatsby"
import styled from "./header.module.scss"

const ListLink = props => (
    <li style={{ display: 'inline-block', marginRight: '1rem'}}>
        <Link to={props.to}>{props.children}</Link>
    </li>
  )
  
  const ListLinkExternal = props => (
    <li style={{ display: 'inline-block', marginRight: '1rem'}}>
      <a href={props.to}>{props.children}</a>
    </li>
  )

class Header extends React.Component {

    componentDidMount() {
        window.addEventListener('scroll', event => {
            const position = window.scrollY

            if(position > 50) {
                document.getElementById('header').classList.add(styled.compact)
                // this.containerRef.current.classList.add('compact')
            } else {
                document.getElementById('header').classList.remove(styled.compact)

                // this.containerRef.current.classList.remove('compact')
            }
        })
    }

    render() {
        return (
            <div id="header" className={styled.header}>
                <div className={styled.inner}>
                    <h1 className={styled.logo}>
                        <Link
                            style={{
                            boxShadow: `none`,
                            textDecoration: `none`,
                            color: `inherit`,
                            backgroundImage: 'none',
                            }}
                            to={`/`}
                        >
                            <span>T<span className={styled.spanCompact}>OTTE</span>P<span className={styled.spanCompact}>ERERA</span></span>
                        </Link>
                    </h1>

                    <ul className={styled.mainNavigation}>
                        <ListLink to="/blog/">Blog</ListLink>
                        <ListLinkExternal to="https://www.instagram.com/totteperera/">Instagram</ListLinkExternal>
                        <ListLinkExternal to="https://github.com/Totteperera">Github</ListLinkExternal>
                        <ListLinkExternal to="https://www.linkedin.com/in/totte-perera-9a907b112/">Linkedin</ListLinkExternal>
                    </ul>
                </div>
            </div>
        )
    }
}


export default Header
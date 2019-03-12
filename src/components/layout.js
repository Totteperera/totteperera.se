import React from "react"
import styled from "./layout.module.scss"
import Header from "../components/header"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    
    return (
      <div>
        <Header/>
        <main className={styled.content}>{children}</main>
      </div>

    )
  }
}

export default Layout

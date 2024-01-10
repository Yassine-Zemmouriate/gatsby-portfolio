import * as React from "react"
import {HeadFC, Link, PageProps} from "gatsby"
import Header from "../components/Header";

const pageStyles = {
  color: "#232129",
  padding: 0,
  margin: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <Header />
      <Link to={'/404'}>404</Link>
    </main>
  )
}

export default IndexPage

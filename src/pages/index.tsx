import * as React from "react"
import {Link, PageProps} from "gatsby"
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const pageStyles = {
  color: "#232129",
  padding: 0,
  margin: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#F0F0F6",
  width: "100%",
  height: "100%"
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div style={pageStyles}>
        <SideBar />
      <Link to={'/404'}>404</Link>
    </div>
  )
}

export default IndexPage

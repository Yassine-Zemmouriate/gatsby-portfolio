import * as React from "react"
import {Link, PageProps} from "gatsby"
import Header from "../components/Header";
import LeftColumn from "../components/LeftColumn";
import MiddleColumn from "../components/MiddleColumn";
import RightColumn from "../components/RightColumn";

const pageStyles = {
  display : "flex",
  gap : "2%",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor : "#E5E5E5"
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div style={pageStyles}>
        <LeftColumn width="21%" />
        <MiddleColumn width="67%" />
        <RightColumn width="8%" />
    </div>
  )
}

export default IndexPage

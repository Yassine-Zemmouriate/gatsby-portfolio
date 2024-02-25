import * as React from "react"
import {PageProps} from "gatsby"
import LeftColumn from "../components/columns/LeftColumn";
import MiddleColumn from "../components/columns/MiddleColumn";
import RightColumn from "../components/columns/RightColumn";

const pageStyles = {
    display: "flex",
    gap: "2%",
    fontFamily: "Inter, Roboto, sans-serif, serif",
    backgroundColor: "#F0F0F6"
}

const IndexPage: React.FC<PageProps> = () => {
    return (
        <div style={pageStyles}>
            <LeftColumn width="21%"/>
            <MiddleColumn width="67%"/>
            <RightColumn width="8%"/>
        </div>
    )
}

export default IndexPage

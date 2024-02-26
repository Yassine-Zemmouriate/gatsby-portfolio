import * as React from "react"
import {PageProps} from "gatsby"
import LeftColumn from "../components/columns/LeftColumn";
import MiddleColumn from "../components/columns/MiddleColumn";
import RightColumn from "../components/columns/RightColumn";
import {createContext, useContext, useEffect, useState, ReactNode} from "react";

// interface ThemeContextType {
//     dark : boolean;
//     toggleDark : () => void;
// }

const pageStyles = {
    display: "flex",
    gap: "2%",
    fontFamily: "Inter, Roboto, sans-serif, serif",
    backgroundColor: "#F0F0F6"
}
//
// const defaultState : ThemeContextType = {
//     dark: false,
//     toggleDark: () => {},
// }
//
// const ThemeContext = createContext<ThemeContextType>(defaultState);
//
// export const useTheme = () => useContext(ThemeContext);
//
// interface ThemeProviderProps {
//     children : ReactNode;
// }
//
// export const ThemeProvider : React.FC<ThemeProviderProps> = ({ children }) => {
//     const [dark, setDark] = useState<boolean>(false);
//
//     useEffect(() => {
//         const lsDark = localStorage.getItem('dark');
//         if (lsDark) {
//             setDark(JSON.parse(lsDark));
//         }
//     }, []);
//
//     const toggleDark = () => {
//         const isDark = !dark;
//         setDark(isDark);
//         localStorage.setItem('dark', JSON.stringify(isDark));
//     };
//
//     return(
//          <ThemeContext.Provider value={{ dark, toggleDark }}>
//              {children}
//          </ThemeContext.Provider>
//     )
// }

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

import storage from "local-storage-fallback";
import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import { useStaticQuery, Link, graphql } from "gatsby";
import ReactDOM from "react-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import style from "styled-theming";
import useTheme from "./useTheme";
import ToggleMode from "./ToggleMode";
import { FiMoon } from "react-icons/fi";
import { rhythm } from "../utils/typography";
const getBackground = style("mode", {
  light: "#EEE",
  dark: "#111",
});

const getForeground = style("mode", {
  light: "#111",
  dark: "#EEE",
});
const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${getBackground};
  color: ${getForeground};
    
    }
    
  }`;

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div
          css={css`
            margin: 0 auto;
            max-width: 700px;
            padding: ${rhythm(2)};
            padding-top: ${rhythm(1.5)};
          `}
        >
          <ToggleMode />

          <Link to={`/`}>
            <h3
              css={css`
                margin-bottom: ${rhythm(2)};
                display: inline-block;
                font-style: normal;
              `}
            >
              {data.site.siteMetadata.title}
            </h3>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
            <Link
              to={`/about/`}
              css={css`
                text-indent: 50px;
                float: right;
              `}
            >
              About
            </Link>
            <Link
              to={`/skills/`}
              css={css`
                text-indent: 50px;
                float: right;
              `}
            >
              Skills
            </Link>
            {children}
          </ul>
        </div>
      </>
    </ThemeProvider>
  );
}

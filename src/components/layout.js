import React, { useContext } from "react";
import { Global, css } from "@emotion/core";
import { useTheme } from "emotion-theming";
import Context from "../pages/store/context";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { useStaticQuery, Link, graphql } from "gatsby";

import { rhythm } from "../utils/typography";
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

  const { state, dispatch } = useContext(Context);

  const theme = useTheme();
  return (
    <div
      css={css`
        h1,
        h2,
        h3,
        p {
          color: ${state.isDark ? theme.dark.font : theme.light.font};
        }
      `}
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            background-color: ${state.isDark
              ? theme.dark.background
              : theme.light.background};
          }
        `}
      />
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
            color: ${state.isDark ? theme.dark.font : theme.light.font};
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <button
        css={css`
          text-align: center;
          position: absolute;
          top: 40px;
          right: 20px;
        `}
        onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
      >
        {" "}
        {<FiMoon />}
      </button>
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
  );
}

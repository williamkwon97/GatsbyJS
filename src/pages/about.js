import React, { useContext } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { css } from "@emotion/core";
import { useTheme } from "emotion-theming";
import Context from "../pages/store/context";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";

export default function About({ data }) {
  const { state, dispatch } = useContext(Context);
  const theme = useTheme();

  return (
    <Layout>
      <div
        css={css`
          h1,
          h2,
          h3,
          p {
            color: ${state.isDark ? theme.dark.font : theme.light.font};
          }
        `}
      >
        <h1>About me</h1>
        <p>
          I studied Applied Mathematics and computer Science and recent graduate
          from the UT Austin. I am looking forward to working within developer
          teams where I can utilize my programming skills and knowledge of
          technology to contribute to the technology industry.
        </p>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

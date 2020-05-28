import React, { useContext } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { css } from "@emotion/core";
export default function About({ data }) {
  const { state, dispatch } = useContext(Context);
  const theme = useTheme();

  return (
    <Layout>
      <h1
        css={css`
          color: #c0c0c0;
        `}
      >
        About me
      </h1>
      <p>
        I studied Applied Mathematics and computer Science and recent graduate
        from the UT Austin. I am looking forward to working within developer
        teams where I can utilize my programming skills and knowledge of
        technology to contribute to the technology industry.
      </p>
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

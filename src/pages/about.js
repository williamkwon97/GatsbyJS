import React, { useContext } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { css } from "@emotion/core";
export default function About({ data }) {
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
        I am a recent graduate from the University of Texas at Austin with an
        Applied Mathematics major and a minor in Computer Science. I am looking
        forward to working within developer teams where I can utilize my
        programming skills and knowledge of technology to contribute to the tech
        industry.
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

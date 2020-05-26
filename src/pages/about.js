import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function About({ data }) {
  return (
    <Layout>
      <h1>About me</h1>
      <p>
        I graudated at UT Austin and studied applied math and computer science
        Looking forward to working in developer teams that I could use my
        programming skill and technology knowledges to contribute in technology
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

import React, { useContext } from "react";
import { graphql } from "gatsby";
//theme
import { css } from "@emotion/core";

import { rhythm } from "../utils/typography";
import Layout from "../components/layout";
import Footer from "../components/footer";
//import icons
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";

export default function Home({ data }) {
  console.log(data);

  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
            color: #808080;
          `}
        >
          Coding Projects
        </h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
                color: #808080;
              `}
            >
              {node.frontmatter.title}
              <span
                css={css`
                  color: #808080;
                `}
              >
                — {node.frontmatter.language}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <a href="https://www.linkedin.com/in/william-kwon-4a5846137/">
          <li>
            <FaLinkedin />
          </li>
        </a>
        <a href="https://github.com/williamkwon97">
          <li>
            <FaGithub />
          </li>
        </a>
        <a href="mailto:uk669@utexas.edu">
          <li>
            <MdEmail />
          </li>
        </a>
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            language
          }
          excerpt
        }
      }
    }
  }
`;

import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";
import Footer from "../components/footer";

//import icons
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home({ data }) {
  console.log(data);

  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Coding Projects
        </h1>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #bbb;
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
        <a href="mailto:williamkwon97@gmail.com?">
          <li>
            <MdEmail />
          </li>
        </a>
      </ul>

      <Footer />
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

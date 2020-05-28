import React, { useContext } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Global, css } from "@emotion/core";

export default function Skills({ data }) {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            color: #c0c0c0;
          `}
        >
          Skills{" "}
        </h1>
        <p>
          <ul>
            <li>
              Programming Languages: Python, Swift, JavaScript, C#, R, Java, ,
              Unix/Linux, HTML/CSS, SQL
            </li>
            <li>
              {" "}
              Development Tools: XCode, R studio, Terminal ,Android, Studio,
              JSON, Eclipse, Sublime, Pycharm, Atom , Flask&Django, Cocoapod,
              REST API, XML{" "}
            </li>
            <li> CI/CD: AWS, Heroku, and Travis CI</li>
            <li>Source Control: Git</li>
            <li>Documentation: Confluence, Testrail</li>
          </ul>
        </p>
      </div>
    </Layout>
  );
}

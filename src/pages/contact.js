import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function Skills({ data }) {
  return (
    <Layout>
      <h1>Skills </h1>
      <p>
        <ul>
          <li>
            Programming Languages: Python, Swift, R, C++, Java,
            JavaScript,Unix,/Linux, HTML/CSS, SQL
          </li>
          <li>
            {" "}
            Development Tools: XCode, R studio, Terminal,Android, Studio, JSON,
            Eclipse, Sublime, Pycharm, Atom , Flask&Django,Cocoapod{" "}
          </li>
          <li>Source Control: Git</li>
          <li>Documentation: Confluence, Testrail</li>
        </ul>
      </p>
    </Layout>
  );
}

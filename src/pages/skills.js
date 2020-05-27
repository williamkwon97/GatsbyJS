import React, { useContext } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { css } from "@emotion/core";
import { useTheme } from "emotion-theming";
import Context from "../pages/store/context";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
export default function Skills({ data }) {
  const { state, dispatch } = useContext(Context);
  const theme = useTheme();
  return (
    <Layout>
      <div
        css={css`
          h1,
          ul,
          li,
          p {
            color: ${state.isDark ? theme.dark.font : theme.light.font};
          }
        `}
      >
        <h1>Skills </h1>
        <p>
          <ul>
            <li>
              Programming Languages: Python, Swift, JavaScript, C#, R, Java, ,
              Unix/Linux, HTML/CSS, SQL
            </li>
            <li>
              {" "}
              Development Tools: XCode, R studio, Terminal ,Android, Studio,
              JSON, Eclipse, Sublime, Pycharm, Atom , Flask&Django, Cocoapod{" "}
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

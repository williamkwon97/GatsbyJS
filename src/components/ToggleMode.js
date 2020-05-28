import React from "react";
import { ThemeConsumer } from "styled-components";
import Button from "./Button";
import { FiMoon } from "react-icons/fi";
import { css } from "@emotion/core";
export default function ToggleMode() {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Button
          css={css`
            text-align: center;
            position: absolute;
            right: 550px;
          `}
          variant="primary"
          onClick={(e) =>
            theme.setTheme(
              theme.mode === "dark"
                ? { ...theme, mode: "light" }
                : { ...theme, mode: "dark" }
            )
          }
        >
          <FiMoon />
        </Button>
      )}
    </ThemeConsumer>
  );
}

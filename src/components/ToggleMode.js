import React from "react";
import { ThemeConsumer } from "styled-components";
import Button from "./Button";
import { FiMoon } from "react-icons/fi";
export default function ToggleMode() {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Button
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

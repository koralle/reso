import { sva } from "../../../styled-system/css";
import { createStyleContext } from "../../../styled-system/jsx";

const card = sva({
  slots: ["root", "header", "icon", "body", "footer"],
  base: {
    root: {
      display: "grid",
      padding: 8,
      rounded: "8px",
      gap: 2,
      backgroundColor: "oklch(0.9757 0.0017 247.84)",
      border: "1px solid oklch(0.9276 0.0058 264.53)",
    },
    header: {
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      fontSize: "0.875rem",
      fontWeight: "bold",
      gap: 3,
    },
    body: {
      fontSize: "3rem",
      fontWeight: "bold",
    },
    footer: {
      color: "oklch(87.2% 0.01 258.338)",
      fontSize: "0.875rem",
      fontWeight: "bold",
    },
  },
});

const { withProvider, withContext } = createStyleContext(card);

const Root = withProvider("article", "root");
const Header = withContext("header", "header");
const Body = withContext("div", "body");
const Footer = withContext("footer", "footer");

export const Card = {
  Root,
  Header,
  Body,
  Footer,
};

import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "../index.css";
import { Link } from "@tanstack/react-router";
import { css } from "../../styled-system/css";
import { flex, grid } from "../../styled-system/patterns";
import { Body } from "../components/layout/body";
import { Footer } from "../components/layout/footer";
import { Header } from "../components/layout/header";

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundComponent,
});

function RootLayout() {
  return (
    <>
      <div className={flex({ flexDir: "column", minInlineSize: "320px", minBlockSize: "100svb" })}>
        <a
          href="#main"
          className={css({
            position: "absolute",
            insetInlineStart: "-9999px",
            inlineSize: "1px",
            blockSize: "1px",
            overflow: "hidden",
            _focus: {
              position: "fixed",
              insetBlockStart: "8px",
              insetInlineStart: "8px",
              inlineSize: "auto",
              blockSize: "auto",
              overflow: "visible",
              padding: "12px 24px",
              backgroundColor: "oklch(21% 0.034 264.665)",
              color: "white",
              fontWeight: "bold",
              rounded: "8px",
              zIndex: 9999,
            },
          })}
        >
          メインコンテンツへスキップ
        </a>
        <Header />
        <Body>
          <Outlet />
        </Body>
        <Footer />
      </div>
      <TanStackRouterDevtools />
    </>
  );
}

function NotFoundComponent() {
  return (
    <div className={grid({ placeContent: "center", gap: 6 })}>
      <h1 className={css({ fontSize: "3rem", fontWeight: "bold" })}>404 Not Found</h1>

      <Link to="/" className={css({ textAlign: "center", textDecoration: "underline" })}>
        Back to the top
      </Link>
    </div>
  );
}

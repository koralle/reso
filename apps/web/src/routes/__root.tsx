import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "../index.css";
import { flex } from "../../styled-system/patterns";
import { Body } from "../components/layout/body";
import { Footer } from "../components/layout/footer";
import { Header } from "../components/layout/header";

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
  return (
    <>
      <div className={flex({ flexDir: "column", minInlineSize: "320px", minBlockSize: "100svb" })}>
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

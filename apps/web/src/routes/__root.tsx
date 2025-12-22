import { Flex } from "@reso/ui";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Body } from "../components/layout/body";
import { Footer } from "../components/layout/footer";
import { Header } from "../components/layout/header";

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
  return (
    <Flex
      bg={["#f6f7f8", "#101922"]}
      alignItems="center"
      flexDirection="column"
      minBlockSize="100svb"
    >
      <Header />
      <Body>
        <Outlet />
      </Body>
      <Footer />
      <TanStackRouterDevtools />
    </Flex>
  );
}

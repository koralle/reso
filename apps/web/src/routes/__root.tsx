import { Flex } from "@reso/ui";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Body } from "../components/layouts/body";
import { Header } from "../components/layouts/header";

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
  return (
    <Flex alignItems="center" flexDirection="column" minBlockSize="100svb">
      <Header />
      <Body>
        <Outlet />
      </Body>
      <TanStackRouterDevtools />
    </Flex>
  );
}

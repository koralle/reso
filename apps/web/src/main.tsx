import { theme } from "@reso/theme";
import { UIProvider } from "@reso/ui";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./router.ts";

const rootElement = document.getElementById("root");

if (rootElement !== null) {
  createRoot(rootElement).render(
    <StrictMode>
      <UIProvider theme={theme}>
        <RouterProvider router={router} />
      </UIProvider>
    </StrictMode>,
  );
}

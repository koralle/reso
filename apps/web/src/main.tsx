import { UIProvider } from "@reso/ui";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./router.ts";

const rootElement = document.getElementById("root");

if (rootElement !== null) {
  createRoot(rootElement).render(
    <StrictMode>
      <UIProvider>
        <RouterProvider router={router} />
      </UIProvider>
    </StrictMode>,
  );
}

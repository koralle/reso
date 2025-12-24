import { createFileRoute } from "@tanstack/react-router";
import { css } from "../../styled-system/css";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <h1 className={css({ color: "red.300" })}>む</h1>;
}

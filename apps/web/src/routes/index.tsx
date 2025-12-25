import { createFileRoute } from "@tanstack/react-router";
import { Monitor, Palette, Pointer, Scan } from "lucide-react";
import type { HTMLProps, ReactNode } from "react";
import { css } from "../../styled-system/css";
import { Card } from "../components/card/card.recipe";
import { useDevicePixelRatio } from "../hooks/use-device-pixel-ratio";
import { useScreenOrientation } from "../hooks/use-screen-orientation";
import { useScreenSize } from "../hooks/use-screen-size";
import { useViewportSize } from "../hooks/use-viewport-size";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const devicePixelRatio = useDevicePixelRatio();
  const viewport = useViewportSize();
  const { inlineSize: screenInlineSize, blockSize: screenBlockSize } = useScreenSize();
  const screenOrientation = useScreenOrientation();

  return (
    <div
      className={css({
        display: "block flex",
        flexDirection: "column",
        inlineSize: "full",
        px: "16px",
        gap: "32px",
      })}
    >
      <MainContentContainer>
        <Card.Root>
          <Card.Header>PIXEL RATIO</Card.Header>
          <Card.Body>{devicePixelRatio}</Card.Body>
          <Card.Footer>devicePixelRatio</Card.Footer>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Scan strokeWidth={2.25} />
            VIEWPORT
          </Card.Header>
          <Card.Body>
            {viewport.inlineSize} x {viewport.blockSize}
          </Card.Body>
          <Card.Footer>innerWidth x innerHeight</Card.Footer>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Monitor strokeWidth={2.25} />
            SCREEN RESOLUTION
          </Card.Header>
          <Card.Body>
            {screenInlineSize} x {screenBlockSize}
          </Card.Body>
          <Card.Footer>screen.width x screen.height</Card.Footer>
        </Card.Root>
      </MainContentContainer>

      <SubContentContainer>
        <Card.Root>
          <Card.Header>
            <Palette strokeWidth={2.25} />
            COLOR DEPTH
          </Card.Header>
          <Card.Body>
            <span className={css({ fontSize: "1rem" })}>{window.devicePixelRatio}</span>
          </Card.Body>
          <Card.Footer>screen.colorDepth</Card.Footer>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Scan strokeWidth={2.25} />
            ORIENTATION
          </Card.Header>
          <Card.Body>
            <span className={css({ fontSize: "1rem" })}>{screenOrientation}</span>
          </Card.Body>
          <Card.Footer>screen.orientation.type</Card.Footer>
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Pointer strokeWidth={2.25} />
            TOUCH POINTS
          </Card.Header>
          <Card.Body>
            <span className={css({ fontSize: "1rem" })}>{navigator.maxTouchPoints}</span>
          </Card.Body>
          <Card.Footer>navigator.maxTouchPoints</Card.Footer>
        </Card.Root>
      </SubContentContainer>
    </div>
  );
}

interface MainContentContainerProps extends HTMLProps<"div"> {
  children: ReactNode;
}

function MainContentContainer({ children }: Readonly<MainContentContainerProps>) {
  return (
    <div
      className={css({
        "--_gap": "1.5rem",
        "--_column-count": "3",
        "--_column-min-inline-size": "15rem",
        "--_column-inline-size-calculated":
          "calc((100% - var(--_gap) * (var(--_column-max-count)-1)) / var(--_column-max-count)",
        "--_breakpoint":
          "calc((100% / var(--_column-count)) - var(--_gap) * (var(--_column-count) - 1))",
        display: "block grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(max(var(--_column-min-inline-size), sign(100% - var(--_breakpoint)) * -100%), 1fr))",
        gap: "var(--_gap)",
      })}
    >
      {children}
    </div>
  );
}

function SubContentContainer({ children }: Readonly<MainContentContainerProps>) {
  return (
    <div
      className={css({
        "--_gap": "1.5rem",
        "--_column-count": "4",
        "--_column-min-inline-size": "12rem",
        "--_column-inline-size-calculated":
          "calc((100% - var(--_gap) * (var(--_column-max-count)-1)) / var(--_column-max-count)",
        "--_breakpoint":
          "calc((100% / var(--_column-count)) - var(--_gap) * (var(--_column-count) - 1))",
        display: "block grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(max(var(--_column-min-inline-size), sign(100% - var(--_breakpoint)) * -100%), 1fr))",
        gap: "var(--_gap)",
      })}
    >
      {children}
    </div>
  );
}

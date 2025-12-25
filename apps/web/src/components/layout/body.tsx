import type { HTMLProps, ReactNode } from "react";
import { css } from "../../../styled-system/css";
import { center } from "../../../styled-system/patterns";

interface BodyProps extends HTMLProps<"div"> {
  children: ReactNode;
}

export function Body({ children }: Readonly<BodyProps>) {
  return (
    <main id="main" className={center({ flex: "1", inlineSize: "full" })}>
      <div className={css({ inlineSize: "min(960px, 100%)", py: 10 })}>{children}</div>
    </main>
  );
}

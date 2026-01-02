import { Github, MonitorSmartphone } from "lucide-react";
import { css } from "../../../styled-system/css";
import { center, hstack } from "../../../styled-system/patterns";

export function Header() {
  return (
    <header
      className={center({
        inlineSize: "full",
        backgroundColor: "oklch(0.9757 0.0017 247.84)",
        border: "1px solid oklch(0.9276 0.0058 264.53)",
      })}
    >
      <div
        className={hstack({
          px: "16px",
          py: "16px",
          inlineSize: "min(960px, 100%)",
          justifyContent: "space-between",
        })}
      >
        <div className={hstack({ gap: "8px" })}>
          <MonitorSmartphone strokeWidth={2.25} aria-hidden="true" />
          <span className={css({ fontWeight: "bold", fontSize: "1.5rem" })}>Reso</span>
        </div>

        <div className={hstack({})}>
          <a
            href="https://github.com/koralle/reso"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub リポジトリを開く"
            className={css({
              display: "inline flex",
              justifyContent: "center",
              alignItems: "center",
              inlineSize: "40px",
              blockSize: "40px",
              rounded: "8px",
              color: "white",
              backgroundColor: "oklch(21% 0.034 264.665)",
              _hover: {
                backgroundColor: "oklch(27.8% 0.033 256.848)",
              },
            })}
          >
            <Github aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}

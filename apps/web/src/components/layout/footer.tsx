import { css } from "../../../styled-system/css";
import { center } from "../../../styled-system/patterns";

export function Footer() {
  return (
    <footer
      className={center({
        inlineSize: "full",
        backgroundColor: "oklch(0.9757 0.0017 247.84)",
        border: "1px solid oklch(0.9276 0.0058 264.53)",
      })}
    >
      <div
        className={center({
          px: "16px",
          py: "32px",
          inlineSize: "min(960px, 100%)",
        })}
      >
        <p className={css({ textStyle: "footer" })}>&copy; 2025 koralle. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

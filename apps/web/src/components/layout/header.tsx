import { css } from "../../../styled-system/css";
import { center, hstack } from "../../../styled-system/patterns";

export function Header() {
  return (
    <header
      className={center({ inlineSize: "full", backgroundColor: "oklch(0.9757 0.0017 247.84)" })}
    >
      <div className={hstack({ px: "16px", py: "16px", inlineSize: "min(960px, 100%)" })}>
        <div className={hstack({})}>
          <span className={css({ fontWeight: "bold", fontSize: "1.5rem" })}>Reso</span>
        </div>

        <div className={hstack({})}></div>
      </div>
    </header>
  );
}

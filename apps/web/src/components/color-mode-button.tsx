import type { ButtonProps } from "@reso/ui";
import { IconButton, MoonIcon, SunIcon, useColorMode } from "@reso/ui";

export interface ColorModeButtonProps extends ButtonProps {}

export function ColorModeButton({ ...rest }: ColorModeButtonProps) {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      color="fg.emphasized"
      icon={
        <>
          <SunIcon display={["inline", "none"]} />
          <MoonIcon display={["none", "inline"]} />
        </>
      }
      suppressHydrationWarning
      onClick={toggleColorMode}
      {...rest}
    />
  );
}

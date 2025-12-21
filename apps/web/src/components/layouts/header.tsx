import { ButtonGroup, GithubIcon, HStack, IconButton, Spacer, Text } from "@reso/ui";
import { ColorModeButton } from "../color-mode-button";

export function Header() {
  return (
    <HStack inlineSize="stretch" maxInlineSize="8xl" px="md" py="md">
      <Text fontWeight="bold" fontSize="xl">
        Reso
      </Text>

      <Spacer />
      <ButtonGroup.Root>
        <IconButton icon={<GithubIcon />} />
        <ColorModeButton />
      </ButtonGroup.Root>
    </HStack>
  );
}

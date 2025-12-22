import {
  ButtonGroup,
  Center,
  GithubIcon,
  HStack,
  type HStackProps,
  IconButton,
  MonitorSmartphoneIcon,
  Spacer,
  Text,
} from "@reso/ui";
import { ColorModeButton } from "../color-mode-button";

interface HeaderProps extends Omit<HStackProps, "children"> {}

export function Header(_: Readonly<HeaderProps>) {
  return (
    <Center bg={["#ffffff", "#1a2632"]} inlineSize="stretch">
      <HStack inlineSize="stretch" maxInlineSize="8xl" px="md" py="md">
        <HStack gap="sm">
          <MonitorSmartphoneIcon />

          <Text fontWeight="bold" fontSize="xl">
            Reso
          </Text>
        </HStack>

        <Spacer />

        <ButtonGroup.Root>
          <IconButton fullRounded>
            <GithubIcon />
          </IconButton>
          <ColorModeButton fullRounded />
        </ButtonGroup.Root>
      </HStack>
    </Center>
  );
}

import { Flex, type FlexProps } from "@reso/ui";

interface BodyProps extends FlexProps {}

export function Body({ children }: Readonly<BodyProps>) {
  return (
    <Flex as="main" flex="1" flexDirection="column" w="stretch" maxInlineSize="8xl" px="md">
      {children}
    </Flex>
  );
}

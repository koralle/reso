import { Flex, type FlexProps } from "@reso/ui";

interface BodyProps extends FlexProps {}

export function Body({ children }: Readonly<BodyProps>) {
  return (
    <Flex
      alignItems="center"
      flex="1"
      flexDirection="column"
      maxInlineSize="8xl"
      inlineSize="stretch"
      px="md"
      py="lg"
    >
      {children}
    </Flex>
  );
}

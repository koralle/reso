import { Box, Center, Text } from "@reso/ui";

export function Footer() {
  return (
    <Center bg={["#ffffff", "#1a2632"]} inlineSize="stretch">
      <Box
        display="grid"
        placeContent="center"
        inlineSize="stretch"
        maxInlineSize="8xl"
        px="md"
        py="md"
      >
        <Text>&copy; 2025 koralle. All Rights Reserved.</Text>
      </Box>
    </Center>
  );
}

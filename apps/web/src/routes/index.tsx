import { Center, Text, VStack } from "@reso/ui";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <VStack>
      <Center>
        <VStack>
          <Text>デバイスピクセル比: {window.devicePixelRatio}</Text>
          <Text>{window.screen.width}</Text>
          <Text>{window.screen.height}</Text>
          <Text>{window.innerWidth}</Text>
          <Text>{window.innerHeight}</Text>
        </VStack>
      </Center>
    </VStack>
  );
}

import { Text, VStack } from "@reso/ui";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <VStack>
      <Text>Reso</Text>
    </VStack>
  );
}

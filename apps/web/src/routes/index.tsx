import { Box, Card, Text, VStack } from "@reso/ui";
import { createFileRoute } from "@tanstack/react-router";
import { useColorDepth } from "../hooks/use-color-depth";
import { useDevicePixelRatio } from "../hooks/use-device-pixel-ratio";
import { useScreenOrientation } from "../hooks/use-screen-orientation";
import { useScreenSize } from "../hooks/use-screen-size";
import { useUserAgent } from "../hooks/use-user-agent";
import { useViewportSize } from "../hooks/use-viewport";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const devicePixelRatio = useDevicePixelRatio();
  const { inlineSize, blockSize } = useScreenSize();
  const { inlineSize: viewportInlineSize, blockSize: viewportBlockSize } = useViewportSize();
  const screenOrientation = useScreenOrientation();
  const userAgent = useUserAgent();
  const colorDepth = useColorDepth();

  return (
    <VStack>
      <Box>
        <Card.Root>
          <Card.Header>
            <Text>PIXEL RATIO</Text>
          </Card.Header>
          <Card.Body>{devicePixelRatio}</Card.Body>
          <Card.Footer />
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Text>VIEWPORT</Text>
          </Card.Header>
          <Card.Body>
            {viewportInlineSize} x {viewportBlockSize}
          </Card.Body>
          <Card.Footer />
        </Card.Root>

        <Card.Root>
          <Card.Header>
            <Text>SCREEN RESOLUTION</Text>
          </Card.Header>
          <Card.Body>
            {inlineSize} x {blockSize}
          </Card.Body>
          <Card.Footer />
        </Card.Root>
      </Box>

      <Box>
        <VStack>
          <Text>COLOR DEPTH</Text>
          <Text>{colorDepth}</Text>
        </VStack>
        <VStack>
          <Text>ORIENTATION</Text>
          <Text>{screenOrientation}</Text>
        </VStack>
        <VStack>
          <Text>TOUCH POINTS</Text>
        </VStack>
        <VStack>
          <Text>USER AGENT</Text>
          <Text>{userAgent}</Text>
        </VStack>
      </Box>
    </VStack>
  );
}

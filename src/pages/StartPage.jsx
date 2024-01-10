import {
  Container,
  Card,
  CardBody,
  Stack,
  Text,
  Button,
  VStack,
  HStack,
  Image,
  Box,
} from "@chakra-ui/react";

import htmlIcon from "../assets/images/icon-html.svg";
import cssIcon from "../assets/images/icon-css.svg";
import javascriptIcon from "../assets/images/icon-js.svg";
import accessibilityIcon from "../assets/images/icon-accessibility.svg";

import ToggleColorMode from "../components/ToggleColorMode";

export default function StartPage() {
  return (
    <>
      <ToggleColorMode />
      <Stack
        direction={["column", "row"]}
        align="center"
        justify="center"
        spacing="44px"
        p="10"
      >
        <Container maxW="lg">
          <Text fontSize="5xl">Welcome to the Frontend Quiz!</Text>
          <Text fontSize="md">Pick a subject to get started</Text>
        </Container>
        <Container maxW="lg">
          <VStack>
            <Card width="lg" rounded="3xl">
              <CardBody>
                <HStack spacing="4">
                  <Box bg="#FFF1E9" p={2} borderRadius="lg">
                    <Image src={htmlIcon} alt="icon-html" />
                  </Box>
                  <Text fontSize="lg" as="b">
                    HTML
                  </Text>
                </HStack>
              </CardBody>
            </Card>
            <Card width="lg" rounded="3xl">
              <CardBody>
                <HStack spacing="4">
                  <Box bg="#E0FDEF" p={2} borderRadius="lg">
                    <Image src={cssIcon} alt="icon-html" />
                  </Box>
                  <Text fontSize="lg" as="b">
                    CSS
                  </Text>
                </HStack>
              </CardBody>
            </Card>
            <Card width="lg" rounded="3xl">
              <CardBody>
                <HStack spacing="4">
                  <Box bg="#EBF0FF" p={2} borderRadius="lg">
                    <Image src={javascriptIcon} alt="icon-html" />
                  </Box>
                  <Text fontSize="lg" as="b">
                    Javascript
                  </Text>
                </HStack>
              </CardBody>
            </Card>
            <Card width="lg" rounded="3xl">
              <CardBody>
                <HStack spacing="4">
                  <Box bg="#F6E7FF" p={2} borderRadius="lg">
                    <Image src={accessibilityIcon} alt="icon-html" />
                  </Box>
                  <Text fontSize="lg" as="b">
                    Accessibility
                  </Text>
                </HStack>
              </CardBody>
            </Card>
          </VStack>
        </Container>
      </Stack>
    </>
  );
}

import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        align="center"
      >
        <Text>© 2023 Implemented by Jamille Ni. All rights reserved</Text>
        <Text>Built on template shared by <u><a href="https://github.com/eldoraboo" target="_blank " rel="noreferrer">Eldora Boo</a></u></Text>
      </Container>
    </Box>
  );
}

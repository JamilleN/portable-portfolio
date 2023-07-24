import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Heading,
  Center,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ProfileArray from "./ProfileArray";

export default function Contact({ color }) {
  const profile = ProfileArray();
  const linkedin = () => {
    window.open(`${profile.linkedin}`, "_blank", "noreferrer,noopener");
  };
  const github = () => {
    window.open(`${profile.github}`, "_blank", "noreferrer,noopener");
  };
  const email = () => {
    window.open(`mailto:${profile.email}`, "_blank", "noreferrer,noopener");
  };
  return (
    <>
      <Container maxW={"3xl"} id="contact">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                03
              </Text>
              <Text fontWeight={800}>Contact</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"}>Let's stay in touch!</Heading>
            <Center>
              <HStack pt={4} spacing={4}>
                <button><FaLinkedin onClick={linkedin} size={36} /></button>
                <button><FaGithub onClick={github} size={36} /></button>
                <button><FaEnvelope onClick={email} size={36} /></button>
              </HStack>
            </Center>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}


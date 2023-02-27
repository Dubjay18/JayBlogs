import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  SlideFade,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
    setTimeout(() => {
      setIsVisible2(true);
    }, 700);
  }, []);
  return (
    <Box marginY={"10"} paddingY='16'>
      <Box marginX={"auto"}>
        <Container maxW={"890px"}>
          <SlideFade in={isVisible} offsetY='20px'>
            <Text
              fontSize={{
                base: "2xl",
                md: "4xl",
                lg: "6xl",
              }}
              fontWeight='bold'
              textAlign='center'>
              Discover a world of ideas, inspiration, and
              insights.
            </Text>
          </SlideFade>
        </Container>
        <Container maxW={"890px"}>
          <SlideFade in={isVisible2} offsetY='20px'>
            <Text
              fontSize={"xl"}
              color={"grey"}
              textAlign='center'>
              Welcome to JayBlogs, where every post is an
              adventure
            </Text>
          </SlideFade>
        </Container>
        <br />
        <Container maxW={"890px"}>
          <Flex
            align='center'
            justify={"center"}
            marginX='20'>
            <Input
              placeholder='medium size'
              size='lg'
              bg={"white"}
              borderRightRadius={"0"}
              value={searchText}
              onChange={(e) =>
                setSearchText(e.target.value)
              }
            />
            <Button
              borderLeftRadius={"0"}
              background={"skyblue"}
              paddingY='6'
              onClick={() =>
                router.push(`/search/${searchText}`)
              }>
              Search
            </Button>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

export default Hero;

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Logo from "../assets/logo.png";
function Navbar() {
  return (
    <Flex
      align='center'
      justify='space-between'
      paddingX={"2"}>
      <Box
        display={"flex"}
        alignItems='center'
        justifyContent={"center"}
        height='100px'
        width={"100px"}>
        <Image src={Logo} alt='logo' />
      </Box>
      <Flex
        align='center'
        justify={"space-evenly"}
        paddingY='2'>
        <Button
          marginX={"2"}
          border='1px'
          borderColor={"gray.200"}
          fontFamily='cursive'>
          Login
        </Button>
        <Box>|</Box>
        <Button
          marginX={"2"}
          border='1px'
          borderColor={"gray.200"}
          fontFamily='cursive'>
          Signup
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;

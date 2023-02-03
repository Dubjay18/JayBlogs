import Articles from "@/components/main/Articles";
import Hero from "@/components/main/Hero";
import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";
import svgBg from "@/assets/prism.png";
import { Box } from "@chakra-ui/react";
function main() {
  return (
    <DefaultLayout>
      <Box className='cusbg' paddingY='20'>
        <Hero />
      </Box>
      <Articles />
    </DefaultLayout>
  );
}

export default main;

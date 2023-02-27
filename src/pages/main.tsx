import Articles from "@/components/main/Articles";
import Hero from "@/components/main/Hero";
import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";
import svgBg from "@/assets/prism.png";
import { Box, Heading } from "@chakra-ui/react";
import { useArticlesQuery } from "@/utils/api";

function Main() {
  const { data, isLoading, error } = useArticlesQuery();
  return (
    <DefaultLayout>
      <Box className='cusbg' paddingY='20'>
        <Hero />
      </Box>
      <Heading
        display={"flex"}
        alignItems='center'
        justifyContent={"center"}
        mt={6}>
        HeadLines
      </Heading>
      <Articles
        data={data}
        isLoading={isLoading}
        error={error}
      />
    </DefaultLayout>
  );
}

export default Main;

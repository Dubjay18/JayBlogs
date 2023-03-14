import Articles from "@/components/main/Articles";
import Hero from "@/components/main/Hero";
import DefaultLayout from "@/layouts/DefaultLayout";
import React from "react";
import svgBg from "@/assets/prism.png";
import { Box, Heading } from "@chakra-ui/react";
import {
  IArticles,
  IData,
  useArticlesQuery,
} from "@/utils/api";

function Main({ dataReal }: { dataReal: any }) {
  const { data, isLoading, error } = useArticlesQuery();
  console.log(dataReal, "stuff");
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
        data={dataReal}
        isLoading={isLoading}
        error={error}
      />
    </DefaultLayout>
  );
}

export const getServerSideProps = async () => {
  const apiResponse = await fetch(
    `http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_KEY}&sources=cnn,-bbc`
  );
  const data = await apiResponse.json();
  return {
    props: {
      dataReal: data,
    },
  };
};
export default Main;

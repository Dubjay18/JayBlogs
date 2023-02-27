import {
  IArticles,
  IData,
  useArticlesQuery,
} from "@/utils/api";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Spinner,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

function Articles({
  data,
  isLoading,
  error,
}: {
  data: IData | undefined;
  isLoading: boolean;
  error: any;
}) {
  useEffect(() => {
    if (error) {
      console.log(error);
    }
    console.log(data);
  }, [data, error]);

  return (
    <Box marginX='5' paddingY={20}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}>
        {data?.articles && !isLoading ? (
          data?.articles.map((e: any, i) => (
            <ArticleCard
              key={i}
              title={e.title}
              content={e.content}
              image={e.image}
              description={e.description}
            />
          ))
        ) : (
          <GridItem
            colSpan={{
              base: 1,
              md: 2,
              lg: 4,
            }}>
            <Flex
              align={"center"}
              justify='center'
              paddingY={"20"}>
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
              />
            </Flex>
          </GridItem>
        )}
      </Grid>
      {error && (
        <Flex alignItems={"center"} justifyContent='center'>
          Something went wrong
        </Flex>
      )}
    </Box>
  );
}

export default Articles;

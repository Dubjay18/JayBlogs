import { IArticles, useArticlesQuery } from "@/utils/api";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Spinner,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

function Articles() {
  const { data, isLoading, error } = useArticlesQuery();
  const [alteredData, setAlteredData] = useState<
    IArticles[] | null
  >(null);

  useEffect(() => {
    if (data) {
      const result: IArticles[] | null = Object.keys(
        data as { [key: string]: any }
      ).map((key) => (data as { [key: string]: any })[key]);
      setAlteredData(result);
    }
    if (error) {
      console.log(error);
    }
  }, [data, error]);

  return (
    <Box marginX='5'>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}>
        {alteredData && !isLoading ? (
          alteredData.map((e: IArticles, i) => (
            <ArticleCard
              key={i}
              title={e.title}
              source={e.source}
              image={e.image}
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
    </Box>
  );
}

export default Articles;

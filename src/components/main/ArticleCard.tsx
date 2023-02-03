import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import { IArticles } from "@/utils/api";
import { ArrowForwardIcon } from "@chakra-ui/icons";
const ArticleCard = ({
  title = "Living room Sofa",
  url,
  source,
  image = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
}: IArticles) => {
  return (
    <Card cursor={"pointer"}>
      <CardBody>
        <Image
          src={image}
          alt='Green double couch with wooden legs'
          borderRadius='md'
          filter='auto'
          _hover={{ blur: "0px" }}
          blur='2px'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='sm'>{title}</Heading>
          <Box
            display='flex'
            alignItems={"center"}
            _hover={{ textDecor: "underline" }}
            transition='all'
            transitionDuration={".5"}>
            <Text>View</Text>
            <ArrowForwardIcon className='cus-arrow' />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ArticleCard;

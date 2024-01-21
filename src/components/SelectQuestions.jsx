import {
  Card,
  CardBody,
  Text,
  HStack,
  Image,
  Box,
  VStack,
} from "@chakra-ui/react";
import accessibilityIcon from "../assets/images/icon-accessibility.svg";

import PropTypes from "prop-types";

const SelectQuestions = ({ data }) => {
  return (
    <VStack>
      {data.map((item, index) => (
        <>
          <Card width="lg" rounded="3xl" key={index}>
            <CardBody>
              <HStack spacing="4">
                <Box bg="#F6E7FF" p={2} borderRadius="lg">
                  <Image src={accessibilityIcon} alt="icon-html" />
                </Box>
                <Text fontSize="lg" as="b">
                  {item.title}
                </Text>
              </HStack>
            </CardBody>
          </Card>
        </>
      ))}
    </VStack>
  );
};

SelectQuestions.propTypes = {
  data: PropTypes.string,
};

export default SelectQuestions;

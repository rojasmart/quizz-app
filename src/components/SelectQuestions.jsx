import { Stack, Button, Image } from "@chakra-ui/react";

import PropTypes from "prop-types";

const SelectQuestions = ({ data, getCategory }) => {
  const handleSubmit = (e) => {
    getCategory(e.target.value);
  };

  return (
    <Stack spacing={4} direction="column">
      {data.map((item, index) => (
        <>
          <Button
            type="submit"
            leftIcon={
              <Image
                src={item.icon}
                p="8px"
                borderRadius={"9px"}
                backgroundColor={"white"}
              />
            }
            key={index}
            onClick={handleSubmit}
            value={item.title}
            pt="40px"
            pb="40px"
            sx={{
              display: "flex",
              justifyContent: "start",
              gap: "6",
              borderRadius: "20px",
              fontSize: "18",
            }}
          >
            {item.title}
          </Button>
        </>
      ))}
    </Stack>
  );
};

SelectQuestions.propTypes = {
  data: PropTypes.string,
  getCategory: PropTypes.string,
};

export default SelectQuestions;

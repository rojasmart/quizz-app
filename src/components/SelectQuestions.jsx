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
            leftIcon={<Image src={item.icon} />}
            key={index}
            onClick={handleSubmit}
            value={item.title}
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

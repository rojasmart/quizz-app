import { Stack, Button, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";

const SelectQuestions = ({ data, getCategory, setIcon }) => {
  const handleSubmit = (item) => {
    getCategory(item.title);
    setIcon(item.icon);
  };

  return (
    <Stack spacing={4} direction="column">
      {data.map((item, index) => (
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
          onClick={() => handleSubmit(item)}
          value={item.title}
          pt="40px"
          pb="40px"
          _hover={{ backgroundColor: "var(--pure-white) " }}
          sx={{
            display: "flex",
            justifyContent: "start",
            gap: "6",
            borderRadius: "20px",
            fontSize: "18",
            backgroundColor: "var(--pure-white)",
            color: "var(--dark-navy)",
          }}
        >
          {item.title}
        </Button>
      ))}
    </Stack>
  );
};

SelectQuestions.propTypes = {
  data: PropTypes.string,
  getCategory: PropTypes.string,
  setIcon: PropTypes.string,
};

export default SelectQuestions;

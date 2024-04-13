import React, { useState } from "react";
import { Box, styled } from "@mui/system";
import { Image } from "@chakra-ui/react";

const NewCard = ({ height, backgroundColor, image, image2 }) => {
  const imageHeight = parseInt(height.replace("px", "")) - 50;
  const [isShown, setIsShown] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: height,
        backgroundColor: backgroundColor,
        width: "100%",
        my: "8px",
        borderRadius: "25px",
        "&:hover": {
          transform: "scale(1.1)",
          transitionDuration: "0.5s",
        },
      }}
    >
      <Image
        sx={{ height: `${imageHeight}px`, width: "auto" }}
        src={!isShown ? image : image2}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        fallbackSrc='https://via.placeholder.com/150'
        alt='tshirt'
      />
    </Box>
  );
};

export default NewCard;

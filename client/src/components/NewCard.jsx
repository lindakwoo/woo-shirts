import React from "react";
import { Box, Stack, styled } from "@mui/system";

const NewCard = ({ height, backgroundColor }) => {
  return (
    <Box
      sx={{ height: { height }, backgroundColor: { backgroundColor }, width: "100%", my: "8px", borderRadius: "25px" }}
    >
      NewCard
    </Box>
  );
};

export default NewCard;

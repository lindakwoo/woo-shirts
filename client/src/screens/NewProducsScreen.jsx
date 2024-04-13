import React from "react";
import { Box, Stack, styled } from "@mui/system";
import NewCard from "../components/NewCard";

const NewProducsScreen = () => {
  return (
    <Stack alignItems='center' justifyContent='center'>
      <Stack direction='row' gap={2} sx={{ flexWrap: "wrap" }}>
        <Stack direction='column' sx={{ width: "250px", height: "100%" }}>
          {" "}
          <NewCard height='200px' backgroundColor='red' />
          <NewCard height='350px' backgroundColor='blue' />
          <NewCard height='175px' backgroundColor='yellow' />
          <NewCard height='200px' backgroundColor='blue' />
        </Stack>
        <Stack direction='column' sx={{ width: "250px", height: "100%" }}>
          {" "}
          <NewCard height='175px' backgroundColor='green' />
          <NewCard height='250px' backgroundColor='yellow' />
          <NewCard height='200px' backgroundColor='orange' />
          <NewCard height='150px' backgroundColor='grey' />
          <NewCard height='175px' backgroundColor='aqua' />
        </Stack>
        <Stack direction='column' sx={{ width: "250px", height: "100%" }}>
          {" "}
          <NewCard height='200px' backgroundColor='aqua' />
          <NewCard height='250px' backgroundColor='purple' />
          <NewCard height='175px' backgroundColor='lime' />
          <NewCard height='300px' backgroundColor='pink' />
        </Stack>
        <Stack direction='column' sx={{ width: "250px", height: "100%" }}>
          {" "}
          <NewCard height='300px' backgroundColor='orange' />
          <NewCard height='175px' backgroundColor='pink' />
          <NewCard height='175px' backgroundColor='yellow' />
          <NewCard height='250px' backgroundColor='blue' />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NewProducsScreen;

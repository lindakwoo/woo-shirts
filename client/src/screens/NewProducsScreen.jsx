import React from "react";
import { Box, Stack, styled } from "@mui/system";
import NewCard from "../components/NewCard";

const NewProducsScreen = () => {
  return (
    <Stack sx={{ mt: "24px" }} alignItems='center' justifyContent='center'>
      <Stack direction='row' gap={2} sx={{ flexWrap: "wrap" }}>
        <Stack direction='column' sx={{ width: "250px", height: "100%" }}>
          {" "}
          <NewCard
            height='200px'
            backgroundColor='red'
            image='/images/rabbits.png'
            image2='/images/yellow_rabbits.png'
          />
          <NewCard
            height='350px'
            backgroundColor='blue'
            image='/images/rabbits.png'
            image2='/images/yellow_rabbits.png'
          />
          <NewCard
            height='175px'
            backgroundColor='yellow'
            image='/images/rabbits.png'
            image2='/images/yellow_rabbits.png'
          />
          <NewCard
            height='200px'
            backgroundColor='blue'
            image='/images/rabbits.png'
            image2='/images/yellow_rabbits.png'
          />
        </Stack>
        <Stack direction='column' sx={{ width: "250px", height: "100%" }}>
          {" "}
          <NewCard
            height='175px'
            backgroundColor='green'
            image='/images/rabbits.png'
            image2='/images/yellow_rabbits.png'
          />
          <NewCard
            height='250px'
            backgroundColor='yellow'
            image='/images/rabbits.png'
            image2='/images/yellow_rabbits.png'
          />
          <NewCard
            height='200px'
            backgroundColor='orange'
            image='/images/rabbits.png'
            image2='/images/yellow_rabbits.png'
          />
          <NewCard
            height='150px'
            backgroundColor='grey'
            image='/images/rabbits.png'
            image2='/images/yellow_rabbits.png'
          />
          <NewCard
            height='175px'
            backgroundColor='aqua'
            image='/images/rabbits.png'
            image2='/images/yellow_rabbits.png'
          />
        </Stack>
        <Stack direction='column' sx={{ width: "250px", height: "100%" }}>
          {" "}
          <NewCard
            height='200px'
            backgroundColor='aqua'
            image='/images/rabbits.png'
            image2='/images/yellow_rabbits.png'
          />
          <NewCard
            height='250px'
            backgroundColor='purple'
            image='/images/rabbits.png'
            image2='/images/yellow_rabbits.png'
          />
          <NewCard
            height='175px'
            backgroundColor='lime'
            image='/images/rabbits.png'
            image2='/images/yellow_rabbits.png'
          />
          <NewCard
            height='300px'
            backgroundColor='pink'
            image='/images/rabbits.png'
            image2='/images/yellow_rabbits.png'
          />
        </Stack>
        <Stack direction='column' sx={{ width: "250px", height: "100%" }}>
          {" "}
          <NewCard
            height='300px'
            backgroundColor='orange'
            image='/images/rabbits.png'
            image2='/images/yellow_rabbits.png'
          />
          <NewCard
            height='175px'
            backgroundColor='pink'
            image='/images/rabbits.png'
            image2='/images/yellow_rabbits.png'
          />
          <NewCard
            height='175px'
            backgroundColor='yellow'
            image='/images/rabbits.png'
            image2='/images/yellow_rabbits.png'
          />
          <NewCard
            height='250px'
            backgroundColor='blue'
            image='/images/rabbits.png'
            image2='/images/yellow_rabbits.png'
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NewProducsScreen;

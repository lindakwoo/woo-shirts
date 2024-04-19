import React, { useState, useEffect } from "react";
import { styled, Stack, Box } from "@mui/system";

const Input = styled("input")({});
const Button = styled("button")({});
const ReviewerName = ({ setUser }) => {
  const [userName, setUserName] = useState(JSON.parse(localStorage.getItem("userName")) || null);
  const [userText, setUserText] = useState("");

  const handleKeyDown = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      setUserName(userText);
      setUser(userText);
    }
  };

  const changeUserName = () => {
    setUserText("");
    setUserName(null);
  };
  useEffect(() => {
    localStorage.setItem("userName", JSON.stringify(userName));
  }, [userName]);

  return (
    <>
      {!userName && (
        <>
          <label>Please enter your first and last names:</label>
          <Input
            sx={{ border: "1px solid grey", ml: "5px", p: "5px" }}
            type='text'
            value={userText}
            placeholder='first and last name'
            onChange={(e) => {
              setUserText(e.target.value);
            }}
            onKeyDown={handleKeyDown}
            onBlur={() => setUserName(userText)}
          />
        </>
      )}
      {userName && (
        <Stack justifyContent='space-between' direction='row'>
          <Box sx={{ fontSize: "32px" }}>Reviewer name: {userName}</Box>
          <Button sx={{ backgroundColor: "yellow", p: "10px" }} onClick={changeUserName}>
            Change reviewer name
          </Button>
        </Stack>
      )}
    </>
  );
};

export default ReviewerName;

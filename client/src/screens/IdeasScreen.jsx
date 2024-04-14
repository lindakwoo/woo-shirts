import { Alert, AlertTitle, AlertIcon, AlertDescription, Box, Center, Wrap, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled, Stack } from "@mui/system";
import IdeaCard from "../components/IdeaCard";
import { getProducts } from "../redux/actions/productActions";
import { getIdeas } from "../redux/actions/ideaActions";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { IoMdAlert } from "react-icons/io";

const Input = styled("input")({});
const Button = styled("button")({});

const IdeasScreen = () => {
  const [userName, setUserName] = useState(JSON.parse(localStorage.getItem("userName")) || null);
  const [userText, setUserText] = useState("");
  const dispatch = useDispatch();
  const { loading, error, ideas, pagination } = useSelector((state) => state.idea);

  useEffect(() => {
    dispatch(getIdeas(1));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("userName", JSON.stringify(userName));
  }, [userName]);

  const changeUserName = () => {
    setUserText("");
    setUserName(null);
  };

  const handleKeyDown = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      setUserName(userText);
    }
  };

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
      {ideas.length >= 1 && (
        <Box>
          <Wrap spacing='30px' justify='center' minHeight='80vh' mx={{ base: "12", md: "20", lg: "32" }}>
            {error ? (
              <Alert sx={{ backgroundColor: "yellow" }} status='error'>
                <IoMdAlert />
                <AlertTitle>We are sorry!</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            ) : (
              ideas.map((idea) => (
                <WrapItem key={idea._id}>
                  <Center w='250px' h='450px'>
                    <IdeaCard idea={idea} loading={loading} />
                  </Center>
                </WrapItem>
              ))
            )}
          </Wrap>
        </Box>
      )}
    </>
  );
};

export default IdeasScreen;

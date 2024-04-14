import { styled, Stack, Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getIdea } from "../redux/actions/ideaActions";

const Input = styled("textArea")({});
const Button = styled("button")({});
const Image = styled("img")({});

const IdeaScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { idea } = useSelector((state) => state.idea);

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);

  useEffect(() => {
    dispatch(getIdea(id));
  }, [dispatch, id]);

  const userName = JSON.parse(localStorage.getItem("userName"));
  console.log(userName);

  const submitReview = () => {
    // if (cartItems.some((cartItem) => cartItem.id === id)) {
    //   const existingItem = cartItems.find((cartItem) => cartItem.id === id);
    //   dispatch(addCartItem(id, amount + Number(existingItem.qty, sizes[size])));
    // } else {
    //   dispatch(addCartItem(id, amount, sizes[size]));
    // }
    // toast({
    //   description: "Item has been added.",
    //   status: "success",
    //   isClosable: true,
    // });
  };

  return (
    <Stack>
      {idea && (
        <Stack sx={{ mx: "96px" }}>
          <Box sx={{ fontSize: "32px", mb: "48px" }}>Reviewer name: {userName}</Box>
          <Stack justifyContent='space-around' direction='row'>
            <Stack gap={5}>
              <Box sx={{ fontSize: "32px" }}>T-Shirt that is being reviewed: {idea.name}</Box>
              <Stack direction='column' gap={5}>
                <Stack>
                  <Box fontWeight='bold'>Rating</Box>

                  <select
                    maxW='68px'
                    value={rating}
                    onChange={(e) => {
                      setRating(e.target.value);
                    }}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </Stack>

                <Stack>
                  <Box fontWeight='bold'>Comment</Box>

                  <Input
                    // sx={{ height: "200px", padding: "0 5px 180px", whiteSpace: "normal" }}
                    type='text'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </Stack>

                <Button sx={{ backgroundColor: "yellow", p: "10px" }} onClick={() => submitReview()}>
                  Submit review
                </Button>
              </Stack>
            </Stack>
            <Stack>
              <Image
                sx={{ width: "400px" }}
                mb='30px'
                src={idea.images[0]}
                alt={idea.name}
                fallbackSrc='https://via.placeholder.com/250'
              />
              <Image
                sx={{ width: "400px" }}
                mb='30px'
                src={idea.images[1]}
                alt={idea.name}
                fallbackSrc='https://via.placeholder.com/250'
              />
            </Stack>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default IdeaScreen;

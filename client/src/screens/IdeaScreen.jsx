import { styled, Stack, Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getIdea, createIdeaReview } from "../redux/actions/ideaActions";
import { useToast } from "@chakra-ui/react";

const Input = styled("textArea")({});
const Button = styled("button")({});
const Image = styled("img")({});
const Table = styled("table")({ textAlign: "left" });

const IdeaScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { idea } = useSelector((state) => state.idea);
  const toast = useToast();
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);
  const [showReviews, setShowReviews] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [alreadyReviewed, setAlreadyReviewed] = useState(false);
  const userName = JSON.parse(localStorage.getItem("userName"));

  useEffect(() => {
    dispatch(getIdea(id));
  }, [dispatch, id, showReviews]);

  useEffect(() => {
    if (idea && idea.reviews) {
      setReviews(idea.reviews);
      setRating(1);
      setComment("");
      const hasReviewed = idea.reviews.some((review) => {
        return review.name === userName;
      });
      setAlreadyReviewed(hasReviewed);
    }
  }, [idea, userName]);

  console.log("already", alreadyReviewed);

  useEffect(() => {
    console.log("State after reset:", { comment, rating });
  }, [comment, rating]);

  const submitReview = async () => {
    await dispatch(createIdeaReview(id, comment, rating, userName));
    await dispatch(getIdea(id)); // Fetch latest idea data including the new review

    toast({
      description: "Review has been added.",
      status: "success",
      isClosable: true,
    });
  };

  return (
    <>
      {idea && (
        <>
          <Stack sx={{ mx: "124px" }}>
            <Box sx={{ fontSize: "32px", mb: "48px" }}>Reviewer name: {userName}</Box>
            <Stack justifyContent='center' direction='row' gap={20}>
              <Stack gap={5} alignItems='start'>
                <Box sx={{ fontSize: "32px" }}>T-Shirt: {idea.name}</Box>
                {!alreadyReviewed && (
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
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option> value={4}4</option>
                        <option value={5}>5</option>
                      </select>
                    </Stack>

                    <Stack>
                      <Box fontWeight='bold'>Comment</Box>

                      <Input
                        sx={{ height: "200px", padding: "0 5px 180px", whiteSpace: "normal" }}
                        type='text'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                    </Stack>

                    <Button sx={{ backgroundColor: "yellow", p: "10px" }} onClick={() => submitReview()}>
                      Submit review
                    </Button>
                  </Stack>
                )}{" "}
                {alreadyReviewed && <Box>{userName}, you have already reviewed this idea.</Box>}
              </Stack>

              <Stack>
                <Image
                  sx={{ width: "400px" }}
                  mb='30px'
                  src={idea.images[0]}
                  alt={idea.name}
                  fallbackSrc='https://via.placeholder.com/250'
                />
                {/* <Image
                sx={{ width: "400px" }}
                mb='30px'
                src={idea.images[1]}
                alt={idea.name}
                fallbackSrc='https://via.placeholder.com/250'
              /> */}
              </Stack>
            </Stack>
            <Stack justifyContent='end' alignItems='end'>
              <Button
                onClick={() => {
                  setShowReviews(!showReviews);
                }}
                sx={{ backgroundColor: "black", color: "white", p: "10px", width: "200px", mb: "24px" }}
              >
                {showReviews ? "Close reviews" : "See all reviews"}
              </Button>
            </Stack>
          </Stack>

          {showReviews && (
            <Stack sx={{ backgroundColor: "beige" }}>
              <Box sx={{ fontSize: "24px" }}>Reviews</Box>
              <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Review</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews?.map((review, index) => (
                    <tr key={index}>
                      <td>{review.name}</td>
                      <td>{review.rating}</td>
                      <td>{review.comment}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Stack>
          )}
        </>
      )}
    </>
  );
};

export default IdeaScreen;

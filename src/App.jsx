import { useCallback, useState } from "react";
import { CircularProgress, Container, Typography } from "@mui/material";
import axios from "axios";
import Images from "./components/Images";
import SearchField from "./components/SearchField";

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGE_PER_PAGE = 30;

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (text) => {
    try {
      if (text.trim().length > 0) {
        if (
          text.includes("script") ||
          text.includes("<") ||
          text.includes(">")
        ) {
          throw new Error("Invalid input passed, Please try again!");
        }
        setError(null);
        setIsLoading(true);
        const { data } = await axios.get(
          `${API_URL}?query=${text}&page=1&per_page=${IMAGE_PER_PAGE}&client_id=${
            import.meta.env.VITE_API_KEY
          }`
        );
        setIsLoading(false);
        setImages(data.results);
      }
    } catch (error) {
      setIsLoading(false);
      setError(
        error.message || "Something went wrong!, Please try again later"
      );
    }
  }, []);

  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
      }}
    >
      <SearchField sendRequest={sendRequest} />
      {isLoading && (
        <CircularProgress
          sx={{
            margin: "3rem auto",
          }}
        />
      )}
      {!isLoading && error && (
        <Typography variant="h5" textAlign={"center"} mt={3}>
          {error}
        </Typography>
      )}
      {!isLoading && !error && <Images images={images} />}
    </Container>
  );
}

export default App;

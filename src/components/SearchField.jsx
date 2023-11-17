import React from "react";
import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

function SearchField({ sendRequest }) {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleButtonClick = (event) => {
    setSearchText(event.target.value);
    sendRequest(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    sendRequest(searchText);
  };

  return (
    <Stack direction={"column"} alignItems={"center"} gap={2} mt={2}>
      <Typography variant="h5" textAlign={"center"}>
        Image Search
      </Typography>
      <form noValidate onSubmit={handleFormSubmit} autoComplete="off">
        <FormControl
          sx={{
            width: { xs: "80vw", md: "400px" },
            m: "1rem 0rem",
          }}
          variant="outlined"
        >
          <InputLabel htmlFor="search">Search...</InputLabel>
          <OutlinedInput
            id="search"
            type="text"
            label="search..."
            value={searchText}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton type="submit">
                  <Search />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
      <Box display={"flex"} gap={2} flexWrap={"wrap"} justifyContent={"center"}>
        <Button variant="contained" value="Birds" onClick={handleButtonClick}>
          Birds
        </Button>
        <Button
          variant="contained"
          value="Aeroplane"
          onClick={handleButtonClick}
        >
          Aeroplane
        </Button>
        <Button variant="contained" value="Trees" onClick={handleButtonClick}>
          Trees
        </Button>
        <Button variant="contained" value="Nature" onClick={handleButtonClick}>
          Nature
        </Button>
        <Button variant="contained" value="Train" onClick={handleButtonClick}>
          Train
        </Button>
      </Box>
    </Stack>
  );
}

export default React.memo(SearchField);

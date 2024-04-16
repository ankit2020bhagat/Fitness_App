import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import { options, fetchData } from "../utils/fetchData";
import HorizontalBar from "./HorizontalBar";
const SearchExercise = ({ setExercise, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [searchedExercises, setSearchedExercises] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        options
      );
      setBodyPart(["all", ...bodyPartsData]);
    };
    fetchExerciseData();
  }, [fetchData, options]); // Make sure to include fetchData and options in the dependency array

  const handleSearch = async () => {
    console.log(search);
    if (search.trim() !== "") {
      // Check if search input is not empty or just spaces
      const exerciseData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${search}`, // Use the selected body part here
        options
      );
      console.log("fetch exercise Data", exerciseData);
      const searchedExercises = exerciseData.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) || // Use toLowerCase for case-insensitive search
          item.target.toLowerCase().includes(search.toLowerCase()) ||
          item.equipment.toLowerCase().includes(search.toLowerCase()) ||
          item.bodyPart.toLowerCase().includes(search.toLowerCase())
      );
      console.log("searched ", searchedExercises);
      setExercise(searchedExercises); // Update searchedExercises state
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "35px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Excerises You <br />
        should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "1000px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: 0,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        {/* <HorizontalBar
          data={bodyPart}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        /> */}
      </Box>
    </Stack>
  );
};

export default SearchExercise;
<box></box>;

import React, { useState, useEffect } from "react";
import ExerciseCards from "./ExerciseCards";
import { Box, Stack, Typography } from "@mui/material";

const Exercises = ({ exercises, setExercises, bodyParts }) => {
  console.log("exercises", exercises);
  return (
    <Box id="exercise" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="45px">
        Show Result
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.map((exercise, index) => (
          <ExerciseCards key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;

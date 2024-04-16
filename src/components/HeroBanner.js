import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import HeroImage from "../asset/heroImage.jpg";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "250px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      posotion="relative"
      p="30px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitnes Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23"
        mt="20"
      >
        Sweat,Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#FF2625" }}
      >
        Explore Excerises
      </Button>
      <img src={HeroImage} alt="banner" className="hero-banner-img"></img>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
    </Box>
  );
};

export default HeroBanner;

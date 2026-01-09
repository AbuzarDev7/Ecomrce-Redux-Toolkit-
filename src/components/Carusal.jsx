import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Typography,
  MobileStepper,
} from "@mui/material";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    title: "Walk Better",
    desc: "Wailking Shoes",
  },
  {
    img: "https://sm.pcmag.com/pcmag_au/photo/m/msi-titan-/msi-titan-18-hx_r2s9.jpg",
    title: "Gaming",
    desc: "Gaming Laptop",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Microsoft-Xbox-One-Console-Set-wKinect.jpg/2560px-Microsoft-Xbox-One-Console-Set-wKinect.jpg",
    title: "Xbox",
    desc: "Xbox",
  },
];

export default function Carousel() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = slides.length;

  // autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % maxSteps);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1400px",
        mx: "auto",
        position: "relative",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 6,
        height:"450px"
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={slides[activeStep].img}
        sx={{
          width: "100%",
          height: { xs: 260, md: 420 },
          objectFit: "cover",
          transition: "0.5s ease",
           height:"450px"
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.4)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pl: { xs: 2, md: 6 },
          color: "white",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          {slides[activeStep].title}
        </Typography>
        <Typography sx={{ mt: 1, maxWidth: 400 }}>
          {slides[activeStep].desc}
        </Typography>
      </Box>

      {/* Arrows */}
      <IconButton
        onClick={() =>
          setActiveStep(activeStep === 0 ? maxSteps - 1 : activeStep - 1)
        }
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          color: "white",
          bgcolor: "rgba(0,0,0,0.4)",
          "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>

      <IconButton
        onClick={() => setActiveStep((activeStep + 1) % maxSteps)}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          color: "white",
          bgcolor: "rgba(0,0,0,0.4)",
          "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
        }}
      >
        <KeyboardArrowRight />
      </IconButton>

      {/* Dots */}
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          bgcolor: "transparent",
          position: "absolute",
          bottom: 10,
          width: "100%",
          justifyContent: "center",
        }}
      />
    </Box>
  );
}

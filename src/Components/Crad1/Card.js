import React from "react";
import "../Crad1/Card.css";
import { Box, Button, Paper, Typography } from "@mui/material";
import doct1 from "../../Assets/Image/dct1.jpg";
import doct2 from "../../Assets/Image/dct2.jpg";
import doct3 from "../../Assets/Image/dct3.jpg";

const Card = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "center",
          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            width: 280,
            height: 390,
          },
        }}
      >
        <Paper elevation={3} sx={{ border: "1px solid gray" }}>
          <Box>
            <img src={doct1} />
            <Typography sx={{ marginTop: "4px" }}>
              Jaimee Ussery – Nurse Practitioner
            </Typography>
            <Typography sx={{ fontSize: 12, marginTop: "8px" }}>
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </Typography>
            <Button sx={{ marginTop: "8px" }} variant="text">
              Book Now
            </Button>
          </Box>
        </Paper>

        <Paper elevation={3} sx={{ border: "1px solid gray" }}>
          <Box>
            <img src={doct2} />
            <Typography sx={{ marginTop: "4px" }}>
              Sandrine Ndetah – Nurse Practitioner
            </Typography>
            <Typography sx={{ fontSize: 12, marginTop: "8px" }}>
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </Typography>
            <Button sx={{ marginTop: "8px" }} variant="text">
              Book Now
            </Button>
          </Box>
        </Paper>
        <Paper elevation={3} sx={{ border: "1px solid gray" }}>
          <Box>
            <img src={doct3} />
            <Typography sx={{ marginTop: "4px" }}>
              Dawn Coston – Nurse Practitioner
            </Typography>
            <Typography sx={{ fontSize: 12, marginTop: "8px" }}>
              I'm a paragraph. Click here to add your own text and edit me. Let
              your users get to know you.
            </Typography>
            <Button sx={{ marginTop: "8px" }} variant="text">
              Book Now
            </Button>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default Card;

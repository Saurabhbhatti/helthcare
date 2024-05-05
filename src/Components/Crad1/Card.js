import React from "react";
import "../Crad1/Card.css";
import { Box, Button, Paper, Typography } from "@mui/material";
import doct1 from "../../Assets/Image/img2.jpg";
import doct2 from "../../Assets/Image/img3.jpg";
import doct3 from "../../Assets/Image/img4.jpg";
import AppointmentRequestWidget from "../Appoinments/Appoinment";

const Card = () => {
  return (
    <div style={{backgroundColor:'rgb(251, 251, 243)', paddingTop:'50px'}}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          fontFamily: "rozha one, serif",
          alignContent: "center",
          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            width: 280,
            height: 400,
          },
        }}
      >
        <Paper elevation={3} sx={{ border: "1px solid gray"  }}>
          <Box>
            <img src={doct1} height='260px' width='100%' />
            <Typography sx={{ marginTop: "4px",  marginBottom :'10px', fontSize:'16px' , fontFamily: 'rozha one, serif' }}>
            Jaimee Ussery<br/>Nurse Practitioner <br/>Serves patients in Iowa
            </Typography>
            <AppointmentRequestWidget
                    initialScopeId='7c019d46-6fb2-4a42-9d25-253151e62ac2'
                    initialScopeUrl='jaimee-ussery5125'
                    initialApplicationId="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
                />
          </Box>
        </Paper>

        <Paper elevation={3} sx={{ border: "1px solid gray" }}>
          <Box>
            <img src={doct2} height='260px' width='100%'/>
            <Typography sx={{ marginTop: "4px" , marginBottom :'10px', fontSize:'16px' , fontFamily: 'rozha one, serif' }}>
            Sandy Ndetah <br/> Nurse Practioner<br/> Serves patients in New Mexico    
            </Typography>
            <AppointmentRequestWidget
                    initialScopeId='b343f131-5bbc-4bb1-bfa4-15530b7fa1fe'
                    initialScopeUrl='sandy-ndetah'
                    initialApplicationId="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
                />
          </Box>
        </Paper>
        <Paper elevation={3} sx={{ border: "1px solid gray" }}>
          <Box>
            <img src={doct3} height='260px' width='100%' />
            <Typography sx={{ marginTop: "4px", marginBottom :'10px', fontSize:'16px' , fontFamily: 'rozha one, serif'}}>
            Dawn Coston<br/>Nurse Practioner<br/>Serves patients in Colorado  
            </Typography>
            <AppointmentRequestWidget
                    initialScopeId='153bd7d5-bb4a-4a78-871f-e888c7d3da14'
                    initialScopeUrl='dawn-coston6627'
                    initialApplicationId="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
                />
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default Card;

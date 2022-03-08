import React, { useState } from "react";
import { ImageList, ImageListItem, Box, ImageListItemBar } from "@mui/material";
import athletes from "../data/athletes.json";
// import { makeStyles } from "@mui/styles";
// import IconButton from "@mui/material/IconButton";
// import InfoIcon from "@mui/icons-material/Info";
import ProfileModal from "./ProfileModal.js";

// const useStyles = makeStyles({
//   inactive: {
//     opacity: ".5",
//     color: "white",
//     height: "164px",
//     width: "164px",
//     zIndex: "10",
//     position: "absolute",
//   },
//   active: {
//     opacity: "0",
//   },
// });

const Profiles = () => {
  // const classes = useStyles();
  const [showModal, setShowModal] = useState(false);
  const [selectAthlete, setSelectAthlete] = useState({});

  const handleClick = (e) => {
    const athlete = athletes.filter((athlete) => athlete.name === e.target.alt);
    setSelectAthlete(athlete[0]);
    setShowModal(true);
  };
  return (
    <Box
      sx={{
        dislpay: "flex",
        justifyContent: "center",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <ImageList sx={{ width: 820, margin: "auto" }} cols={5} rowHeight={164}>
        {athletes.map((athlete) => (
          <ImageListItem key={athlete.name} onClick={handleClick}>
            <img
              src={athlete.img}
              srcSet={athlete.img}
              alt={athlete.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={athlete.name}
              subtitle={!athlete.active ? "inactive" : "2022"}
              // actionIcon={
              //   <IconButton
              //     sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              //     aria-label={`info about ${athlete.name}`}
              //   >
              //     <InfoIcon />
              //   </IconButton>
              // }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <ProfileModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectAthlete={selectAthlete}
      />
    </Box>
  );
};

export default Profiles;

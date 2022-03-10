import React, { useEffect, useState } from "react";
import { ImageList, ImageListItem, Box, ImageListItemBar } from "@mui/material";
import athletes from "../data/athletes.json";
// import { makeStyles } from "@mui/styles";
import ProfileModal from "./ProfileModal.js";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

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
  const history = useHistory();
  const { athlete } = useParams();

  useEffect(() => {
    if (athlete) {
      const selectedAthlete = athletes.filter(
        (anAthlete) => anAthlete.name === athlete.split("-").join(" ")
      );
      setSelectAthlete(selectedAthlete[0]);
      setShowModal(true);
    }
  }, [athlete]);

  const handleClick = (athlete) => {
    const urlName = athlete.name.split(" ").join("-");
    let hash = `/profiles/${athlete.sport}/${urlName}`;
    if (hash !== history.location.pathname) history.push(hash);
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
        {athletes.map((athlete) =>
          athlete.active ? (
            <ImageListItem
              key={athlete.name}
              onClick={() => handleClick(athlete)}
            >
              <img
                src={athlete.img}
                srcSet={athlete.img}
                alt={athlete.name}
                loading="lazy"
                id={athlete.name}
              />
              <ImageListItemBar
                // subtitle={athlete.sport.split("-").join(" ")}
                title={athlete.name}
              />
            </ImageListItem>
          ) : (
            ""
          )
        )}
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

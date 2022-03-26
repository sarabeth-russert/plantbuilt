import React, { useEffect, useState } from "react";
import { ImageList, ImageListItem, Box, ImageListItemBar } from "@mui/material";
import athletesData from "../data/athletes.json";
// import { makeStyles } from "@mui/styles";
import ProfileModal from "./ProfileModal.js";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useWindowDimensions from "../windowDimensions";

const Profiles = () => {
  // const classes = useStyles();
  const [showModal, setShowModal] = useState(false);
  const [selectAthlete, setSelectAthlete] = useState({});
  const [athletes, setAthletes] = useState(athletesData);
  // const [header, setHeader] = useState('')
  const history = useHistory();
  const { sport, athlete } = useParams();
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (!sport) {
      const filteredAthletes = athletesData.filter((athlete) => athlete.active);
      setAthletes(filteredAthletes);
      return;
    }
    if (sport !== "former-team") {
      const filteredAthletes = athletesData.filter((athlete) => {
        return athlete.sport === sport && athlete.active;
      });
      setAthletes(filteredAthletes);
      return;
    }
    const filteredAthletes = athletesData.filter((athlete) => !athlete.active);
    setAthletes(filteredAthletes);
  }, [sport]);

  useEffect(() => {
    if (athlete) {
      const selectedAthlete = athletes.filter(
        (anAthlete) => anAthlete.name === athlete.split("-").join(" ")
      );
      setSelectAthlete(selectedAthlete[0]);
      setShowModal(true);
    }
  }, [athlete, athletes]);

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
        alignItems: "center",
      }}
    >
      <ImageList
        sx={{ width: width * 0.8, margin: "auto" }}
        cols={width > 800 ? 4 : width > 650 ? 3 : 1}
        rowHeight={
          width > 800
            ? (width * 0.8) / 4
            : width > 650
            ? (width * 0.8) / 3
            : width * 0.8
        }
      >
        {athletes.map((athlete) => (
          <ImageListItem
            key={athlete.name}
            onClick={() => handleClick(athlete)}
          >
            <img
              src={`${athlete.img.substring(
                0,
                athlete.img.length - 4
              )}-square.png`}
              srcSet={`${athlete.img.substring(
                0,
                athlete.img.length - 4
              )}-square.png`}
              alt={athlete.name}
              loading="lazy"
              id={athlete.name}
            />
            <ImageListItemBar title={athlete.name} />
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

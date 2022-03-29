import React from "react";
import {
  Modal,
  Typography,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Avatar,
  IconButton,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CloseIcon from "@mui/icons-material/Close";
import SocialMediaIcons from "./SocialMediaIcons";
import useWindowDimensions from "../windowDimensions";

const style = {
  position: "absolute",
  top: "10%",
  left: "5%",
  width: "90%",
  overflow: "scroll",
  height: "90%",
  display: "block",
};

const styleMobile = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  overflow: "scroll",
  // pt: 2,
  // px: 4,
  // pb: 3,
};

const ProfileModal = ({ setShowModal, showModal, selectAthlete }) => {
  const history = useHistory();
  const { width } = useWindowDimensions();

  const handleCloseModal = () => {
    history.goBack();
    // let hash = `/profiles/${selectAthlete.sport}`;
    // if (hash !== history.location.pathname) history.push(hash);
    setShowModal(false);
  };

  const renderAthleteSocial = () => {
    if (selectAthlete.social) {
      return (
        <>
          {/* <Typography variant="body1">Social Media</Typography> */}
          <div style={{ display: "flex" }}>
            {selectAthlete.social.map((element, elemIdx) => (
              <SocialMediaIcons key={elemIdx} socialLink={element} />
            ))}
          </div>
        </>
      );
    }
    return "";
  };

  const renderAthleteBio = () => {
    if (selectAthlete.bio) {
      const bio = selectAthlete.bio.map((question) => {
        if (question.key === "Competition history") {
          return (
            <>
              <Typography variant="body1" key={question.key}>
                <b>{question.key}</b>:
              </Typography>
              <ul>
                {question.value.map((event, eventIdx) => (
                  <li key={eventIdx}>{event}</li>
                ))}
              </ul>
            </>
          );
        } else {
          return (
            <Typography key={question.key} paragraph variant="body1">
              <b>{question.key}: </b>
              {question.value}
            </Typography>
          );
        }
      });
      return bio;
    }
    return "Bio coming soon!";
  };

  return (
    <Modal
      open={showModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={width > 800 ? style : styleMobile}
    >
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#709425" }} aria-label="recipe">
              <FitnessCenterIcon />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={handleCloseModal}>
              <CloseIcon />
            </IconButton>
          }
          title={selectAthlete.name}
          subheader={selectAthlete.sport}
        />
        <div
          style={{
            display: "flex",
            flexDirection: width > 1000 ? "row" : "column",
          }}
        >
          <div>
            <CardMedia
              component="img"
              sx={{ width: "450px", marginLeft: "15px" }}
              image={selectAthlete.img}
              alt={selectAthlete.name}
            />
            <CardContent>{renderAthleteSocial()}</CardContent>
          </div>
          <div>
            <CardContent sx={{ paddingTop: "0px" }}>
              {renderAthleteBio()}
            </CardContent>
          </div>
        </div>
        {/* </Collapse> */}
      </Card>
    </Modal>
  );
};

export default ProfileModal;

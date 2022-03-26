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

const style = {
  position: "absolute",
  top: "10%",
  left: "5%",
  width: "90%",
  overflow: "scroll",
  height: "90%",
  display: "block",
};

const ProfileModal = ({ setShowModal, showModal, selectAthlete }) => {
  const history = useHistory();

  const handleCloseModal = () => {
    let hash = `/profiles`;
    if (hash !== history.location.pathname) history.push(hash);
    setShowModal(false);
  };

  const renderAthleteSocial = () => {
    if (selectAthlete.social) {
      return (
        <>
          <Typography variant="body1">Social Media</Typography>
          <ul>
            {selectAthlete.social.map((element, elemIdx) => (
              <li key={elemIdx}>
                {element.key}: {element.value}
              </li>
            ))}
          </ul>
        </>
      );
    }
    return "";
  };

  const renderAthleteBio = () => {
    if (selectAthlete.bio) {
      const bio = selectAthlete.bio.map((question) => {
        console.log(question);
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
            <Typography paragraph variant="body1">
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
      sx={style}
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
        <div style={{ display: "flex" }}>
          <div>
            <CardMedia
              component="img"
              sx={{ width: "450px", marginLeft: "15px" }}
              image={selectAthlete.img}
              alt={selectAthlete.name}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {renderAthleteSocial()}
              </Typography>
            </CardContent>
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

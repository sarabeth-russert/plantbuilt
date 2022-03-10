import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProfileModal = ({ setShowModal, showModal, selectAthlete }) => {
  const history = useHistory();

  const handleCloseModal = () => {
    let hash = `/profiles`;
    if (hash !== history.location.pathname) history.push(hash);
    setShowModal(false);
  };
  return (
    <Modal
      open={showModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {selectAthlete.name}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {selectAthlete.name}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ProfileModal;

import React, { useState } from "react";
import { TextField, Paper, Button, Typography, Alert } from "@mui/material";
import emailjs from "@emailjs/browser";
// init("GFZVqGbWgJb1R4rJ4");

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [alertStatus, setAlertStatus] = useState("success");
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState("");

  const handleForm = (e) => {
    if (e.target.id === "name") setName(e.target.value);
    // come back later to add validation here
    if (e.target.id === "email") setEmail(e.target.value);
    if (e.target.id === "note") setNote(e.target.value);
  };

  const handleSubmit = () => {
    emailjs
      .send(
        "service_ewb73mo",
        "contact_form",
        { name, email, note },
        "GFZVqGbWgJb1R4rJ4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setAlertStatus("success");
          setShowAlert(true);
          setAlertText("Your message has been sent");
        },
        (error) => {
          console.log(error.text);
          setAlertStatus("error");
          setShowAlert(true);
          setAlertText("There was a problem sending your message");
        }
      );
  };

  return (
    <>
      {showAlert && (
        <Alert
          onClose={() => {
            setShowAlert(false);
          }}
          severity={alertStatus}
        >
          {alertText}
        </Alert>
      )}
      <Paper
        sx={{
          width: "80%",
          margin: "20px auto 20px auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ marginBottom: "20px" }}>
          Contact us
        </Typography>
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <TextField
            sx={{ marginRight: "20px" }}
            color="success"
            id="name"
            label="Name"
            value={name}
            onChange={handleForm}
          />
          <TextField
            id="email"
            required
            label="Email"
            value={email}
            color="success"
            onChange={handleForm}
          />
        </div>
        <TextField
          sx={{ marginBottom: "20px" }}
          id="note"
          label="Comments"
          multiline
          maxRows={4}
          value={note}
          required
          onChange={handleForm}
          color="success"
        />
        <Button
          disabled={email && note ? false : true}
          onClick={handleSubmit}
          color="success"
        >
          Submit
        </Button>
      </Paper>
    </>
  );
};

export default Contact;

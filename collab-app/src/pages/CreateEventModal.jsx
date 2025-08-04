import Modal from "../reuseable/Modal";
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const CreateEventModal = ({
  setUpcomingEvents,
  open,
  setOpen,
  setMyEvents,
}) => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventOrganizer, setEventOrganizer] = useState("");

  const handleCreateEventClick = () => {
    setOpen(false);
    const newEvent = {
      title: eventTitle,
      date: eventDate,
      description: eventDescription,
      by: eventOrganizer,
    };
    setUpcomingEvents((prev) => [...prev, newEvent]);
    setMyEvents((prev) => [...prev, newEvent]);
  };

  return (
    <Modal
      title="Create an Event"
      open={open}
      onClose={() => setOpen(false)}
      actionButtonText="Create Event"
      actionButtonOnClick={handleCreateEventClick}
    >
      <TextField
        label="Enter Your Event Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={eventTitle}
        onChange={(e) => setEventTitle(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "3rem",
          },
        }}
      />
      <TextField
        label="Enter Your Event Description"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "3rem",
          },
        }}
      />
      <TextField
        label="Enter Your Event Date"
        variant="outlined"
        fullWidth
        margin="normal"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "3rem",
          },
        }}
      />
      <TextField
        label="Who is organizing this event?"
        variant="outlined"
        fullWidth
        margin="normal"
        value={eventOrganizer}
        onChange={(e) => setEventOrganizer(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "3rem",
          },
        }}
      />
    </Modal>
  );
};

export default CreateEventModal;

import React, { useState } from "react";
import {
  Typography,
  TextField,
  FormControl,
  Button,
  Stack,
} from "@mui/material";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleClear = () => {
    setEmail("");
    setName("");
    setUniversityName("");
    setMessage("");
    setSubject("");
  };

  return (
    <FormControl>
      <Typography variant="h4">Contact Us</Typography>
      <Typography variant="body1">
        We would love to hear from you! If you have any questions, suggestions,
        or feedback, please feel free to reach out to us.
      </Typography>

      <TextField
        label="Enter Your Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "3rem",
          },
        }}
      />

      <TextField
        label="Enter Your Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "3rem",
          },
        }}
      />

      <TextField
        label="Enter Your University Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={universityName}
        onChange={(e) => setUniversityName(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "3rem",
          },
        }}
      />

      <TextField
        label="Enter Your Subject"
        variant="outlined"
        fullWidth
        margin="normal"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "3rem",
          },
        }}
      />

      <TextField
        label="Enter Your Message"
        variant="outlined"
        multiline
        margin="normal"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "3rem",
            width: "350px",
            height: "200px",
          },
        }}
      />
      <Stack direction="row" spacing={2} mt={2} justifyContent={"center"}>
        <Button sx={{ border: "1px solid black", color: "black" }}>
          Submit
        </Button>
        <Button
          onClick={handleClear}
          sx={{ border: "1px solid black", color: "black" }}
        >
          Clear
        </Button>
      </Stack>
    </FormControl>
  );
};

export default ContactUs;

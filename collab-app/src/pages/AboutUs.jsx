import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const AboutUs = () => {
  const contributors = [
    "Ilaun Baldwin: Developer",
    "Nick Onye: Architect",
    "Andrew Ramos: UI/UX Designer",
    "Marcel Bashi: Project Manager",
    "Ivan Bartholomew: Quality Assurance Tester",
  ];
  return (
    <Box>
      <Typography variant="h4" color="black" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" color="black">
        Welcome to Collab, a platform designed to foster collaboration and
        innovation among students and professionals. Our mission is to create an
        inclusive environment where ideas can flourish and projects can come to
        life.
      </Typography>
      <Typography variant="body1" color="black">
        At Collab, we believe in the power of teamwork and the importance of
        diverse perspectives. Whether you're a student looking to connect with
        peers or a professional seeking to mentor the next generation, our
        platform provides the tools you need to succeed.
      </Typography>

      <Typography variant="h4" color="black" mt={3} mb={2}>Contributors</Typography>
      <Stack direction="column" spacing={1}>
        {contributors.map((contributor, index) => (
          <Typography key={index} variant="body1" color="black">
            {contributor}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
};

export default AboutUs;

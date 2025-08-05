import { Box, Typography, Stack } from "@mui/material";
import { FaInstagram } from "react-icons/fa6";
import { RiTiktokLine } from "react-icons/ri";
import { CiYoutube } from "react-icons/ci";

const Footer = () => (
  <Box
    sx={{
      width: "100%",
      py: 2,
      mt: 4,
      background: "linear-gradient(90deg, #0c52ff, #5ce1e6)",
      color: "white",
      textAlign: "center",
      position: "fixed",
      bottom: 0,
      left: 0,
    }}
  >
    <Stack mb={2} alignItems="center">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Follow Us
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <RiTiktokLine size={24} />
            <FaInstagram size={24} />
            <CiYoutube size={24} />
        </Box>
    </Stack>
    <Typography variant="body2">
      &copy; {new Date().getFullYear()} Collab Inc. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
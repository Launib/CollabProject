import React from "react";
import {
  Typography,
  Button,
  Box,
  AppBar,
  Container,
  Toolbar,
  Stack,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  const pages = [
    { name: "Events", path: "/events" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <AppBar sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            color="black"
            mr={12}
            component={RouterLink}
            to="/"
            sx={{
              color: "black",
              textDecoration: "none",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "transparent",
                color: "black",
              },
            }}
          >
            Collab
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={RouterLink}
                to={page.path}
                color="inherit"
                sx={{
                  color: "black",
                  "&:hover": {
                    border: "1px solid black",
                    backgroundColor: "transparent",
                    color: "black",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Stack direction="row" spacing={2} ml="auto">
            <Button
              sx={{
                color: "black",
                "&:hover": {
                  border: "1px solid black",
                  backgroundColor: "transparent",
                  color: "black",
                },
              }}
            >
              Login
            </Button>
            <Button
              sx={{
                color: "black",
                border: "1px solid black",
                backgroundColor: "#ADD8E6",
                borderRadius: "3rem",
                "&:hover": {
                  border: "1px solid black",
                  backgroundColor: "transparent",
                  color: "black",
                },
              }}
            >
              Create an Account
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;

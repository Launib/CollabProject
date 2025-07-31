import { useState } from "react";
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
import SignUpLoginModal from "./SignUpLoginModal";
import collabLogo from "../assets/collab.logo-1REAL.png";

const NavBar = () => {
  const pages = [
    { name: "Events", path: "/events" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
  ];
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [openSignUpLoginModal, setOpenSignUpLoginModal] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLoginClick = () => {
    setLogin(true);
    setOpenSignUpLoginModal(true);
    setSignUp(false);
  };

  const handleSignUpClick = () => {
    setSignUp(true);
    setOpenSignUpLoginModal(true);
    setLogin(false);
  };

  return (
    <AppBar sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <Container>
        <Toolbar disableGutters>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              mr: 12,
              textDecoration: "none",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <img 
              src={collabLogo} 
              alt="Collab Logo" 
              style={{ 
                height: '40px', 
                width: 'auto',
                display: 'block'
              }} 
            />
          </Box>
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
            {loggedInUser ? (
              <>
                <Typography
                  sx={{ color: "black", fontWeight: 600, alignSelf: "center" }}
                >
                  {loggedInUser.userName || loggedInUser.organizationName}
                </Typography>
                <Button
                  onClick={() => setLoggedInUser(null)}
                  sx={{
                    color: "black",
                    border: "1px solid black",
                    backgroundColor: "#FFD6D6",
                    borderRadius: "3rem",
                    ml: 1,
                    "&:hover": {
                      border: "1px solid black",
                      backgroundColor: "#FFB6B6",
                      color: "black",
                    },
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={handleLoginClick}
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
                  onClick={handleSignUpClick}
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
              </>
            )}
          </Stack>
        </Toolbar>
      </Container>
      <SignUpLoginModal
        open={openSignUpLoginModal}
        onClose={() => setOpenSignUpLoginModal(false)}
        login={login}
        signUp={signUp}
        setLogin={setLogin}
        setSignUp={setSignUp}
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />
    </AppBar>
  );
};

export default NavBar;

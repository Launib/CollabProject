import Modal from "../reuseable/Modal";
import { useState } from "react";
import { Button, TextField, Typography, Stack, Box } from "@mui/material";

const SignUpLoginModal = ({
  open,
  onClose,
  signUp,
  setSignUp,
  setLogin,
  login,
  setLoggedInUser,
}) => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [error, setError] = useState("");
  const [creatorAccount, setCreatorAccount] = useState(false);
  const [studentAccount, setStudentAccount] = useState(false);

  const studentExampleAccount = {
    userName: "Student",
    email: "student@example.com",
    password: "student123",
  };

  const creatorExampleAccount = {
    organizationName: "Beta Phi",
    email: "creator@example.com",
    password: "creator123",
  };

  const handleLoginClick = () => {
    if (
      email === studentExampleAccount.email &&
      password === studentExampleAccount.password
    ) {
      setLoggedInUser(studentExampleAccount);
      setEmail("");
      setPassword("");
      setOrganizationName("");
      setUniversityName("");
      setError("");
      setCreatorAccount(false);
      setStudentAccount(false);
      setSignUp(false);
      setLogin(false);
      onClose();
    } else if (
      email === creatorExampleAccount.email &&
      password === creatorExampleAccount.password
    ) {
      setLoggedInUser(creatorExampleAccount);
      setEmail("");
      setPassword("");
      setOrganizationName("");
      setUniversityName("");
      setError("");
      setCreatorAccount(false);
      setStudentAccount(false);
      setSignUp(false);
      setLogin(false);
      onClose();
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Modal
      title={signUp ? "Create An Account" : "Log Into Your Account"}
      actionButtonText={signUp ? "Create" : "Login"}
      open={open}
      onClose={() => {
        setEmail("");
        setPassword("");
        setOrganizationName("");
        setUniversityName("");
        setError("");
        setCreatorAccount(false);
        setStudentAccount(false);
        setSignUp(false);
        setLogin(false);
        setLoggedInUser && setLoggedInUser(null);
        if (onClose) onClose();
      }}
      disabled={signUp && !(creatorAccount || studentAccount)}
      actionButtonOnClick={handleLoginClick}
    >
      {login && (
        <>
          <Stack direction="column" spacing={1} justifyContent={"center"}>
            <Box>
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
            </Box>
            <Box>
              <TextField
                label="Enter Your Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "3rem",
                  },
                }}
              />
            </Box>
            {error && (
              <Typography color="error" sx={{ fontSize: "0.9rem" }}>
                {error}
              </Typography>
            )}
            <Typography sx={{ fontSize: "0.9rem" }}>
              Don't Have An Account?{" "}
              <Button
                onClick={() => {
                  setSignUp(true);
                  setLogin(false);
                }}
              >
                Create One
              </Button>
            </Typography>
          </Stack>
        </>
      )}
      {signUp && (
        <>
          {!(creatorAccount || studentAccount) && (
            <>
              <Typography fontWeight={600}>
                What Kind of Account Would You Like to Create?
              </Typography>

              <Stack direction="column" spacing={1.5} mt={1}>
                <Box
                  sx={{
                    p: "2px",
                    borderRadius: "3rem",
                    background: "linear-gradient(90deg, #0c52ff, #5ce1e6)",
                    display: "inline-block",
                    mb: 1,
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "3rem",
                      color: "black",
                      border: "none",
                      width: "100%",
                      height: "100%",
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "#ADD8E6",
                        color: "black",
                      },
                    }}
                    onClick={() => setCreatorAccount(true)}
                  >
                    Creator Account
                  </Button>
                </Box>
                <Box
                  sx={{
                    p: "2px",
                    borderRadius: "3rem",
                    background: "linear-gradient(90deg, #0c52ff, #5ce1e6)",
                    display: "inline-block",
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "3rem",
                      color: "black",
                      border: "none",
                      width: "100%",
                      height: "100%",
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "#ADD8E6",
                        color: "black",
                      },
                    }}
                    onClick={() => {
                      setStudentAccount(true);
                      setCreatorAccount(false);
                    }}
                  >
                    Student Account
                  </Button>
                </Box>
              </Stack>
            </>
          )}
        </>
      )}
      {creatorAccount && (
        <>
          <Typography fontWeight={600} fontSize={"0.9rem"} mt={1}>
            Welcome! Please fill out the following information to create your
            account...
          </Typography>
          <Stack direction="column" spacing={1.2} mt={1} alignItems="center">
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
              label="Create A Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "3rem",
                },
              }}
            />

            <TextField
              label="Enter Your Organization Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
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
            <Typography sx={{ fontSize: "0.9rem" }}>
              {" "}
              Already Have An Account? <Button onClick={() => {
                setSignUp(false);
                setLogin(true);
                setCreatorAccount(false);
                setStudentAccount(false);
              }}> Sign In</Button>
            </Typography>
          </Stack>
        </>
      )}
      {studentAccount && (
        <>
          <Typography
            fontWeight={600}
            fontSize={"0.9rem"}
            mt={1}
            alignItems="center"
          >
            Welcome! Please fill out the following information to create your
            account...
          </Typography>
          <Stack direction="column" spacing={1.2} mt={1} alignItems="center">
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
              label="Enter Your Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "3rem",
                },
              }}
            />

            <TextField
              label="Create A Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

            <Typography sx={{ fontSize: "0.9rem" }}>
              {" "}
              Already Have An Account? <Button onClick={() => {
                setSignUp(false);
                setLogin(true);
                setCreatorAccount(false);
                setStudentAccount(false);
              }}> Sign In</Button>
            </Typography>
          </Stack>
        </>
      )}
    </Modal>
  );
};
export default SignUpLoginModal;

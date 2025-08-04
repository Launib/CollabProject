import React from "react";
import {
  Typography,
  Box,
  Tabs,
  Tab,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CreateEventModal from "./CreateEventModal";

const Events = (loggedInUser) => {
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState(null);
  const [reminderDate, setReminderDate] = React.useState(null);
  const eventTabs = loggedInUser
    ? [
        { label: "Past Events", value: "past" },
        { label: "Upcoming Events", value: "upcoming" },
        { label: "My Events", value: "mine" },
      ]
    : [{ label: "Upcoming Events", value: "upcoming" }];

  const [upcomingEvents, setUpcomingEvents] = React.useState([
    {
      title: "Hackathon 2025",
      date: "2025-09-15",
      description: "A 24-hour coding marathon.",
      by: "Collab Team",
    },
    {
      title: "Tech Talk",
      date: "2025-10-01",
      description: "A discussion on the latest in tech.",
      by: "The Tech Org",
    },
    {
      title: "Networking Event",
      date: "2025-10-20",
      description: "Connect with industry professionals.",
      by: "Collab Team",
    },
    {
      title: "Workshop: AI Basics",
      date: "2025-11-05",
      description: "Learn the fundamentals of AI.",
      by: "Collab Team",
    },
    {
      title: "Org Mixer",
      date: "2025-08-20",
      description: "A way for organizations to connect with one another",
      by: "Beta Phi",
    },
  ]);

  const [myEvents, setMyEvents] = React.useState([]);

  const pastEvets = [
    {
      title: "Webinar on Collaboration Tools",
      date: "2025-08-01",
      description: "An online session discussing various collaboration tools.",
      by: "Collab Team",
    },
    {
      title: "Project Showcase",
      date: "2025-07-15",
      description: "A showcase of projects developed by our community.",
      by: "AWE",
    },
    {
      title: "Summer Coding Bootcamp",
      date: "2025-06-10",
      description: "A bootcamp to enhance coding skills.",
      by: "Key to The Kingdom",
    },
    {
      title: "Design Thinking Workshop",
      date: "2025-05-05",
      description: "A workshop on design thinking methodologies.",
      by: "Collab Team",
    },
  ];

  const [selectedTab, setSelectedTab] = React.useState(eventTabs[0].value);

  return (
    <Box>
      <Typography variant="h4" color="black" gutterBottom>
        Events
      </Typography>
      <Tabs
        value={selectedTab}
        onChange={(e, newValue) => setSelectedTab(newValue)}
        textColor="primary"
        indicatorColor="primary"
      >
        {eventTabs.map((tab) => (
          <Tab
            key={tab.value}
            label={tab.label}
            value={tab.value}
            sx={{
              fontWeight: "bold",
              "&:hover": { textDecoration: "underline" },
              "&:active": { textDecoration: "underline", border: "none" },
            }}
          />
        ))}
      </Tabs>

      {/* Tab Content */}
      {selectedTab === "upcoming" && (
        <Box mt={3}>
          {upcomingEvents.map((event, idx) => (
            <Button
              key={idx}
              onClick={() => {
                setSelectedEvent(event);
                setModalOpen(true);
              }}
              sx={{
                width: "100%",
                textAlign: "left",
                mb: 2,
                p: 2,
                border: "1px solid #ff66c4",
                borderRadius: 2,
                color: "black",
                backgroundColor: "transparent",
                boxShadow: 1,
                "&:hover": {
                  backgroundColor: "#ffe6f2",
                  borderColor: "#ff66c4",
                },
                display: "block",
              }}
            >
              <Typography fontWeight={600} color="#ff66c4">
                {event.title}
              </Typography>
              <Typography variant="body2">Date: {event.date}</Typography>
              <Typography variant="body2">{event.description}</Typography>
              <Typography variant="caption">By: {event.by}</Typography>
            </Button>
          ))}
        </Box>
      )}
      {/* Event Registration Modal */}
      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        maxWidth="sm"
        fullWidth
        sx={{
          "& .MuiDialog-paper": {
            p: 2,
            borderRadius: "3rem",
            background: "radial-gradient(at right, #fff7ad, #ffa9f9)",
          },
        }}
      >
        <DialogTitle>Event Registration</DialogTitle>
        <DialogContent>
          {selectedEvent && (
            <Stack direction="column" spacing={2}>
              <Typography fontWeight={600} mb={1}>
                {selectedEvent.title}
              </Typography>
              <Typography variant="body2" mb={1}>
                Date: {selectedEvent.date}
              </Typography>
              <Typography variant="body2" mb={1}>
                {selectedEvent.description}
              </Typography>
              <Typography variant="caption" mb={2}>
                By: {selectedEvent.by}
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Select a date to be reminded"
                  value={reminderDate}
                  onChange={(newValue) => setReminderDate(newValue)}
                  renderInput={(params) => (
                    <TextField {...params} fullWidth sx={{ mt: 2 }} />
                  )}
                />
              </LocalizationProvider>
            </Stack>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setModalOpen(false);
              setReminderDate(null);
            }}
            variant="contained"
            color="primary"
            disabled={!reminderDate}
          >
            Register & Set Reminder
          </Button>
          <Button onClick={() => setModalOpen(false)} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      {loggedInUser && selectedTab === "past" && (
        <Box mt={3}>
          {pastEvets.map((event, idx) => (
            <Box
              key={idx}
              mb={2}
              p={2}
              border={1}
              borderRadius={2}
              borderColor="#8c52ff"
            >
              <Typography fontWeight={600} color="#8c52ff">
                {event.title}
              </Typography>
              <Typography variant="body2">Date: {event.date}</Typography>
              <Typography variant="body2">{event.description}</Typography>
              <Typography variant="caption">By: {event.by}</Typography>
            </Box>
          ))}
        </Box>
      )}
      {loggedInUser && selectedTab === "mine" ? (
        loggedInUser.email === "student@example.com" ? (
          <Box mt={3}>
            <Typography variant="h6" gutterBottom>
              My Events
            </Typography>
            {myEvents.length === 0 && (
              <Typography variant="body2">
                You have not registered for any events yet.
              </Typography>
            )}
            {myEvents.map((event, idx) => (
              <Button
                key={idx}
                onClick={() => {
                  setSelectedEvent(event);
                  setModalOpen(true);
                }}
                sx={{
                  width: "100%",
                  textAlign: "left",
                  mb: 2,
                  p: 2,
                  border: "1px solid #66faffff",
                  borderRadius: 2,
                  color: "black",
                  backgroundColor: "transparent",
                  boxShadow: 1,
                  "&:hover": {
                    backgroundColor: "#41b1c0ff",
                    borderColor: "#66faffff",
                  },
                  display: "block",
                }}
              >
                <Typography fontWeight={600} color="#66faffff">
                  {event.title}
                </Typography>
                <Typography variant="body2">Date: {event.date}</Typography>
                <Typography variant="body2">{event.description}</Typography>
                <Typography variant="caption">By: {event.by}</Typography>
              </Button>
            ))}
          </Box>
        ) : (
          <Stack direction="column" mt={3} spacing={2}>
            <Typography variant="h6" gutterBottom>
              My Events
            </Typography>
            {myEvents.length === 0 && (
              <Typography variant="body2">
                You have not created or registered for any events yet.
              </Typography>
            )}

            {myEvents.map((event, idx) => (
              <Button
                key={idx}
                onClick={() => {
                  setSelectedEvent(event);
                  setModalOpen(true);
                }}
                sx={{
                  width: "100%",
                  textAlign: "left",
                  mb: 2,
                  p: 2,
                  border: "1px solid #66faffff",
                  borderRadius: 2,
                  color: "black",
                  backgroundColor: "transparent",
                  boxShadow: 1,
                  "&:hover": {
                    backgroundColor: "#41b1c0ff",
                    borderColor: "#66faffff",
                  },
                  display: "block",
                }}
              >
                <Typography fontWeight={600} color="#66faffff">
                  {event.title}
                </Typography>
                <Typography variant="body2">Date: {event.date}</Typography>
                <Typography variant="body2">{event.description}</Typography>
                <Typography variant="caption">By: {event.by}</Typography>
              </Button>
            ))}
            <Button
              mt={2}
              sx={{
                borderRadius: "3rem",
                border: "1px solid black",
                color: "black",
              }}
              onClick={() => setOpen(true)}
            >
              Create an Event
            </Button>
          </Stack>
        )
      ) : null}
  <CreateEventModal
    open={open}
    setOpen={setOpen}
    upcomingEvents={upcomingEvents}
    setUpcomingEvents={setUpcomingEvents}
    myEvents={myEvents}
    setMyEvents={setMyEvents}
  />
      {!loggedInUser && eventTabs.length === 1 && (
        <Box mt={3}>
          <Typography color="error" fontWeight={600}>
            Please log in to view more event tabs.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Events;

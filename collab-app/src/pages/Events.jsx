import React from "react";
import { Typography, Box, Tabs, Tab, Button } from "@mui/material";

const Events = (loggedInUser) => {
  const eventTabs = loggedInUser
    ? [
        { label: "Past Events", value: "past" },
        { label: "Upcoming Events", value: "upcoming" },
        { label: "My Events", value: "mine" },
      ]
    : [{ label: "Upcoming Events", value: "upcoming" }];

  const upcomingEvents = [
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
  ];

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
      <Typography variant="h4" gutterBottom>
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
            <Box
              key={idx}
              mb={2}
              p={2}
              border={1}
              borderRadius={2}
              borderColor="#ff66c4"
            >
              <Typography fontWeight={600} color="#ff66c4">
                {event.title}
              </Typography>
              <Typography variant="body2">Date: {event.date}</Typography>
              <Typography variant="body2">{event.description}</Typography>
              <Typography variant="caption">By: {event.by}</Typography>
            </Box>
          ))}
        </Box>
      )}
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
            <Typography variant="body2">
              You have not registered for any events yet.
            </Typography>
          </Box>
        ) : (
          <Box mt={3}>
            <Typography variant="h6" gutterBottom>
              My Events
            </Typography>
            <Typography variant="body2">
              You have not created or registered for any events yet.
            </Typography>
            <Button sx={{borderRadius:"3rem", border: "1px solid black" }}>Create an Event</Button>
          </Box>
        )
      ) : null}
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

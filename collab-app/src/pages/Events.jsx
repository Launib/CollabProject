import React from "react";
import { Typography, Box, Tabs, Button } from "@mui/material";

const Events = () => {
  const eventTabs = [
    { label: "Past Events", value: "past" },
    { label: "Upcoming Events", value: "upcoming" },
    { label: "My Events", value: "mine" },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Events
      </Typography>
      <Tabs>
        {eventTabs.map((tab) => (
          <Box key={tab.value}>
            <Button
              variant="h6"
              sx={{
                fontWeight: "bold",
                "&:hover": { textDecoration: "underline" },
                "&:active": { textDecoration: "underline" },
              }}
            >
              {tab.label}
            </Button>
          </Box>
        ))}
      </Tabs>
    </Box>
  );
};

export default Events;

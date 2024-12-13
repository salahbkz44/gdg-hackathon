import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ScheduleContainer = styled.section`
  padding: 50px 20px;
  background: linear-gradient(to bottom right, #00bcd4, #1e90ff);
  color: white;
  text-align: center;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
`;

const EventBox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 600px;
`;

export const Schedule = () => {
  const events = [
    { time: "9:00 AM", description: "Check-in and Breakfast" },
    { time: "10:00 AM", description: "Opening Ceremony" },
    { time: "11:00 AM", description: "Workshops Begin" },
    { time: "2:00 PM", description: "Lunch Break" },
    { time: "3:00 PM", description: "Hackathon Starts" },
    { time: "6:00 PM", description: "Networking and Snacks" },
  ];

  return (
    <ScheduleContainer id="schedule">
      <h2>Event Schedule</h2>
      <Timeline>
        {events.map((event, index) => (
          <EventBox
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{event.time}</h3>
            <p>{event.description}</p>
          </EventBox>
        ))}
      </Timeline>
    </ScheduleContainer>
  );
};

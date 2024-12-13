import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  font-family: "Poppins", sans-serif;
  background: linear-gradient(180deg, #ffffff, #f9f9f9);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const GDGIcon = styled.div`
  width: 350px;
  height: 400px;
  background: url("https://img.freepik.com/free-vector/hackathon-technology-infographic-with-flat-icons_88138-961.jpg")
    no-repeat center;
  background-size: contain;
  margin-bottom: 10px;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #1e90ff;
  margin: 10px 0;
  line-height: 1.2;
  text-transform: uppercase;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const Button = styled.a`
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  background: #1e90ff;
  box-shadow: 0px 4px 8px rgba(30, 144, 255, 0.3);
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: #00bcd4;
    transform: scale(1.05);
  }
`;

const RegistrationCloseText = styled.h2`
  font-size: 2rem;
  color: #ff4757;
  margin-bottom: 20px;
`;

const CountdownTimer = styled.div`
  font-size: 2.5rem;
  margin: 30px 0;
  font-weight: bold;
  color: #ff4757;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const TimerBox = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 15px;
  border-radius: 10px;
  margin: 0 10px;
  font-size: 2rem;
  color: #333;
  box-shadow: 0px 4px 8px rgba(30, 144, 255, 0.3);
  animation: fadeIn 1s ease-in-out;
  text-align: center;

  &:not(:last-child) {
    margin-right: 20px;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const eventDate = new Date("2024-12-10T00:00:00Z"); // Change this to the event end date
  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <PageContainer>
      <ContentWrapper>
        <GDGIcon />
        <div>
          <Title>GDG Scientist Hackathon</Title>
          <Subtitle>Join us for an exciting journey of innovation and collaboration!</Subtitle>
          <Subtitle>NOV 30th, Dec 1st 2024</Subtitle>
        </div>
      </ContentWrapper>

      <RegistrationCloseText>Registration closes in:</RegistrationCloseText>
      <CountdownTimer>
        <TimerBox>{timeLeft.days}d</TimerBox>
        <TimerBox>{timeLeft.hours}h</TimerBox>
        <TimerBox>{timeLeft.minutes}m</TimerBox>
        <TimerBox>{timeLeft.seconds}s</TimerBox>
      </CountdownTimer>
      <ButtonContainer>
        <Button href="#registration">Register Now</Button>
        <Button href="#schedule" style={{ background: "#ff4757" }}>
          View Schedule
        </Button>
      </ButtonContainer>
    </PageContainer>
  );
};

import React, { useState } from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  font-family: "Poppins", sans-serif;
  background: linear-gradient(180deg, #ffffff, #f5f5f5);
  color: #333;
  padding: 0;
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GDGIcon = styled.div`
  width: 120px;
  height: 120px;
  background: url("https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/events/GDG%20Setif_JXH6dDT.png") no-repeat center;
  background-size: contain;
  margin: 40px auto;
`;

const Hero = styled.section`
  text-align: center;
  margin: 20px auto;
  max-width: 800px;
`;

const HeroHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 10px 0;
  line-height: 1.2;
  color: #1e90ff;
`;

const HeroSubheading = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #555;
`;

const RegisterButton = styled.a`
  padding: 15px 25px;
  font-size: 1rem;
  color: white;
  background: #1e90ff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #00bcd4;
  }
`;

const RegistrationContainer = styled.section`
  padding: 50px 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 40px auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.3s ease;

  &:focus {
    border-color: #1e90ff;
    box-shadow: 0 0 5px rgba(30, 144, 255, 0.3);
  }
`;

const Button = styled.button`
  padding: 15px;
  font-size: 16px;
  background: #1e90ff;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #00bcd4;
  }
`;

const Footer = styled.footer`
  margin-top: auto;
  padding: 20px;
  text-align: center;
  background: #1e90ff;
  color: white;
  font-size: 0.9rem;
`;

export const HackathonPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    alert("Thank you for registering!");
  };

  return (
    <PageContainer>
      <Hero>
        <HeroHeading>GDG Scientist Hackathon</HeroHeading>
        <HeroSubheading>Join us for an unforgettable hackathon experience!</HeroSubheading>
        <RegisterButton href="#registration">Register Now</RegisterButton>
      </Hero>

      <RegistrationContainer id="registration">
        <h2>Register for the Event</h2>
        <p>Fill out the form below to secure your spot in the hackathon!</p>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <Button type="submit">Submit</Button>
        </Form>
      </RegistrationContainer>

      <Footer>
        © {new Date().getFullYear()} GDG Scientist Hackathon. All Rights Reserved.
      </Footer>
    </PageContainer>
  );
};

import React, { useState } from "react";
import styled from "styled-components";

const FAQContainer = styled.section`
  padding: 60px 20px;
  background: linear-gradient(to bottom right, #1e90ff, #00bcd4);
  color: white;
  border-radius: 10px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const AccordionItem = styled.div`
  margin: 15px 0;
`;

const Question = styled.div`
  background: rgba(255, 255, 255, 0.15);
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Answer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  font-size: 1rem;
`;

const ContactForm = styled.div`
  margin-top: 40px;
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  input, textarea {
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
  }

  button {
    background: #1e90ff;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s;

    &:hover {
      background: #00bcd4;
    }
  }
`;

export const FAQContact = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  const faqs = [
    { question: "What is a hackathon?", answer: "A hackathon is a coding event..." },
    { question: "How can I participate?", answer: "Register on the registration form above." },
    { question: "Do I need a team?", answer: "You can participate solo or with a team." },
  ];

  return (
    <FAQContainer id="faq">
      <h2>FAQ & Contact</h2>
      {faqs.map((faq, index) => (
        <AccordionItem key={index}>
          <Question onClick={() => toggle(index)}>{faq.question}</Question>
          <Answer isOpen={openIndex === index}>{faq.answer}</Answer>
        </AccordionItem>
      ))}
      <ContactForm>
        <h3>Contact Us</h3>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </ContactForm>
    </FAQContainer>
  );
};

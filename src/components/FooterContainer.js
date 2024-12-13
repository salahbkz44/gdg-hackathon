import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  text-align: center;
  padding: 20px;
`;

export const Footer = () => (
  <FooterContainer>
    <p>© 2024 GDG Scientist Hackathon. All rights reserved.</p>
  </FooterContainer>
);

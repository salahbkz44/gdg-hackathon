import React from "react";
import styled from "styled-components";

const SponsorsContainer = styled.section`
  padding: 60px 20px;
  background: #f4f4f4;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const SponsorCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h3 {
    margin-top: 15px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
  }
`;

export const Sponsors = () => {
  const sponsors = [
    { name: "TechCorp", logo: "https://via.placeholder.com/200" },
    { name: "Innovate Ltd.", logo: "https://via.placeholder.com/200" },
    { name: "Creative Minds", logo: "https://via.placeholder.com/200" },
  ];

  return (
    <SponsorsContainer id="sponsors">
      <h2>Our Sponsors</h2>
      <Grid>
        {sponsors.map((sponsor, index) => (
          <SponsorCard key={index}>
            <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
            <h3>{sponsor.name}</h3>
          </SponsorCard>
        ))}
      </Grid>
    </SponsorsContainer>
  );
};

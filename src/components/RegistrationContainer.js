import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";
import timerBg from "../assets/images/timer_bg_black.png";

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121212;
  background-image: url(${timerBg});
  background-size: 100%;
`;

const Container = styled.div`
  max-width: 700px;
  margin: ${({ memberCount }) =>
    memberCount > 2 ? "50px auto 20px" : "50px auto"};
  padding: 15px;
  background: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  color: #fff;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #efece6;
  margin-bottom: 1.5rem;

  span {
    background: linear-gradient(180deg, #08f6f6, #017373);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
`;

const Navbar = styled.div`
  display: flex;
  border-bottom: 2px solid #444;
  margin-bottom: 20px;
  justify-content: center;
`;

const NavItem = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: ${(props) => (props.active ? "#08f6f6" : "#777")};
  border-bottom: ${(props) => (props.active ? "2px solid #08f6f6" : "none")};
  transition:
    color 0.3s,
    border-bottom 0.3s;

  &:hover {
    color: #08f6f6;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 5px;
  background: #2c2c2c;
  color: #fff;
  font-size: 1rem;
  box-sizing: border-box;

  &:focus {
    outline: 2px solid #08f6f6;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 5px;
  background: #2c2c2c;
  color: #fff;
  font-size: 1rem;
  box-sizing: border-box;

  &:focus {
    outline: 2px solid #08f6f6;
  }
`;

const Button = styled.button`
  background: #08f6f6;
  color: #121212;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #017373;
  }
`;

const SmallButton = styled.button`
  background: #ff4d4d;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #ff1a1a;
  }
`;

const SuccessMessage = styled.p`
  text-align: center;
  color: #08f6f6;
  font-size: 1.2rem;
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;

const RoleSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #2c2c2c;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: 2px solid #08f6f6;
  }
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  input {
    width: 20px;
    height: 20px;
    accent-color: #08f6f6;
    cursor: pointer;
  }
`;

const ErrorMessage = styled.p`
  color: #ff4d4d;
  font-size: 1rem;
  text-align: center;
`;

const RegistrationForm = () => {
  const [isTeam, setIsTeam] = useState(true);
  const [teamName, setTeamName] = useState("");
  const [leaderPhone, setLeaderPhone] = useState("");
  const [members, setMembers] = useState([
    { name: "", email: "", role: "" },
    { name: "", email: "", role: "" },
  ]);
  const [success, setSuccess] = useState(false);
  const [requestAddMember, setRequestAddMember] = useState(false);
  const [error, setError] = useState("");
  const [ideaDescription, setIdeaDescription] = useState("");
  const [competence, setCompetence] = useState("");
  const [isMobile, setIsMobile] = useState(null);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Avoid rendering until isMobile has been determined
  if (isMobile === null) {
    return <div>Loading...</div>;
  }

  const toggleRegistrationType = (type) => {
    setIsTeam(type === "team");
    setMembers([{ name: "", email: "", role: "" }]); // Reset to one member for individual
    setTeamName("");
    setLeaderPhone("");
    setSuccess(false);
    setRequestAddMember(false);
    setError("");
    setIdeaDescription("");
    setCompetence("");
  };

  const handleAddMember = () => {
    if (members.length < 4) {
      setMembers([...members, { name: "", email: "", role: "" }]);
    }
  };

  const handleRemoveMember = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const validateRoles = () => {
    const hasMedical = members.some(
      (member) => member.role.toLowerCase() === "medical"
    );
    const hasIT = members.some((member) => member.role.toLowerCase() === "it");
    return hasMedical && hasIT;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isTeam) {
      if (requestAddMember) {
        // Verify team size when the checkbox is checked
        if (members.length < 2 || members.length > 3) {
          setError(
            "Teams requesting additional members must have 2 or 3 members."
          );
          return;
        }
      } else {
        // Verify roles when the checkbox is not checked
        if (!validateRoles()) {
          setError(
            "Your team must have at least one member with an IT role and one with a Medical role."
          );
          return;
        }
        // Ensure team has exactly 4 members
        if (members.length !== 4) {
          setError("Your team must have exactly 4 members.");
          return;
        }
      }
    }

    setError("");
    setSuccess(true);

    // Simulate redirection after 2 seconds
    setTimeout(() => {
      window.location.href = "/"; // Redirect to homepage or another page
    }, 2000);
  };

  return (
    <AppContainer>
      <Container memberCount={members.length}>
        <Title>
          Hackathon <span>Registration</span>
        </Title>

        <Navbar>
          <NavItem
            active={isTeam}
            onClick={() => toggleRegistrationType("team")}
          >
            Team Registration
          </NavItem>
          <NavItem
            active={!isTeam}
            onClick={() => toggleRegistrationType("individual")}
          >
            Individual Registration
          </NavItem>
        </Navbar>

        {success && (
          <SuccessMessage>
            Registration Successful! Redirecting...
          </SuccessMessage>
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Form onSubmit={handleSubmit}>
          {isTeam && (
            <>
              <Input
                type="text"
                placeholder="Team Name"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                required
              />
              <Input
                type="tel"
                placeholder="Leader Phone Number"
                value={leaderPhone}
                onChange={(e) => setLeaderPhone(e.target.value)}
                required
              />
            </>
          )}

          {members
            .slice(0, isTeam ? members.length : 1)
            .map((member, index) => (
              <MemberContainer key={index}>
                {index > 0 && (
                  <>
                    <Input
                      type="text"
                      placeholder={isTeam ? "Name" : "Name"}
                      value={member.name}
                      onChange={(e) =>
                        handleMemberChange(index, "name", e.target.value)
                      }
                      required
                    />
                    <Input
                      type="email"
                      placeholder={isTeam ? "Email" : "Email"}
                      value={member.email}
                      onChange={(e) =>
                        handleMemberChange(index, "email", e.target.value)
                      }
                      required
                    />
                    <RoleSelect
                      value={member.role}
                      onChange={(e) =>
                        handleMemberChange(index, "role", e.target.value)
                      }
                      required
                    >
                      <option value="">Select Role</option>
                      <option value="IT">IT</option>
                      <option value="Medical">Medical</option>
                      <option value="Design">Design</option>
                      <option value="Marketing">Marketing</option>
                    </RoleSelect>
                  </>
                )}
                {index === 0 && (
                  <>
                    <Input
                      type="text"
                      placeholder={isTeam ? "Leader Name" : "Name"}
                      value={member.name}
                      onChange={(e) =>
                        handleMemberChange(index, "name", e.target.value)
                      }
                      required
                    />
                    <Input
                      type="email"
                      placeholder={isTeam ? "Leader Email" : "Email"}
                      value={member.email}
                      onChange={(e) =>
                        handleMemberChange(index, "email", e.target.value)
                      }
                      required
                    />
                    <RoleSelect
                      value={member.role}
                      onChange={(e) =>
                        handleMemberChange(index, "role", e.target.value)
                      }
                      required
                    >
                      <option value="">Select Role</option>
                      <option value="IT">IT</option>
                      <option value="Medical">Medical</option>
                      <option value="Design">Design</option>
                      <option value="Marketing">Marketing</option>
                    </RoleSelect>
                  </>
                )}
                {index > 1 && (
                  <SmallButton
                    type="button"
                    onClick={() => handleRemoveMember(index)}
                  >
                    Remove Member
                  </SmallButton>
                )}
              </MemberContainer>
            ))}

          {isTeam && members.length < 4 && (
            <Button type="button" onClick={handleAddMember}>
              Add Member
            </Button>
          )}

          {!isTeam && (
            <Textarea
              placeholder="What is your competence?"
              value={competence}
              onChange={(e) => setCompetence(e.target.value)}
              required
            />
          )}

          {isTeam && (
            <>
              <Textarea
                placeholder="Idea Description"
                value={ideaDescription}
                onChange={(e) => setIdeaDescription(e.target.value)}
              />
              <CheckboxContainer>
                <input
                  type="checkbox"
                  checked={requestAddMember}
                  onChange={(e) => setRequestAddMember(e.target.checked)}
                />
                Request additional team members
              </CheckboxContainer>
            </>
          )}

          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </AppContainer>
  );
};

export default RegistrationForm;

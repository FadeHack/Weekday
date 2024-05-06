import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Chip, TextField } from '@mui/material';
import styled from '@emotion/styled';

const StyledFormControl = styled(FormControl)`
  margin: 1rem;
  min-width: 120px;
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`;

function Filters() {
    const [role, setRole] = useState([]);
    const [experience, setExperience] = useState([]);
    const [location, setLocation] = useState([]);
    const [remote, setRemote] = useState([]);
    const [techStack, setTechStack] = useState([]);
    const [basePay, setBasePay] = useState([]);
  
    const handleRoleChange = (event) => {
      setRole(event.target.value);
    };
  
    const handleExperienceChange = (event) => {
      setExperience(event.target.value);
    };
  
    const handleLocationChange = (event) => {
      setLocation(event.target.value);
    };
  
    const handleRemoteChange = (event) => {
      setRemote(event.target.value);
    };
  
    const handleTechStackChange = (event) => {
      setTechStack(event.target.value);
    };
  
    const handleBasePayChange = (event) => {
      setBasePay(event.target.value);
    };
  
    const handleDelete = (filterSetter) => (chipToDelete) => (event) => {
      event.stopPropagation(); // Stop event propagation
      filterSetter((chips) => chips.filter((chip) => chip !== chipToDelete));
    };
  
    return (
      <FiltersContainer>
        <StyledFormControl variant="outlined">
          <InputLabel id="role-label">Roles</InputLabel>
          <Select
            labelId="role-label"
            id="role-select"
            multiple
            value={role}
            onChange={handleRoleChange}
            label="Roles"
            renderValue={(selected) => (
              <div>
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onDelete={(event) => handleDelete(setRole)(value)(event)}
                    color="primary"
                  />
                ))}
              </div>
            )}
          >
            <MenuItem value={"Frontend Engineer"}>Frontend Engineer</MenuItem>
            <MenuItem value={"Backend Engineer"}>Backend Engineer</MenuItem>
            <MenuItem value={"Fullstack Engineer"}>Fullstack Engineer</MenuItem>
            <MenuItem value={"iOS Developer"}>iOS Developer</MenuItem>
            <MenuItem value={"Flutter Developer"}>Flutter Developer</MenuItem>
            <MenuItem value={"React Native Developer"}>React Native Developer</MenuItem>
            <MenuItem value={"Android Developer"}>Android Developer</MenuItem>
            <MenuItem value={"Designer"}>Designer</MenuItem>
            <MenuItem value={"Graphic Designer"}>Graphic Designer</MenuItem>
            {/* Add more MenuItems here */}
          </Select>
        </StyledFormControl>

        <StyledFormControl variant="outlined">
          <InputLabel id="experience-label">Experience</InputLabel>
          <Select
            labelId="experience-label"
            id="experience-select"
            multiple
            value={experience}
            onChange={handleExperienceChange}
            label="Experience"
            renderValue={(selected) => (
              <div>
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onDelete={(event) => handleDelete(setExperience)(value)(event)}
                    color="primary"
                  />
                ))}
              </div>
            )}
          >
            <MenuItem value={"0-1 years"}>0-1 years</MenuItem>
            <MenuItem value={"1-3 years"}>1-3 years</MenuItem>
            <MenuItem value={"3-5 years"}>3-5 years</MenuItem>
            <MenuItem value={"5+ years"}>5+ years</MenuItem>
          </Select>
        </StyledFormControl>

        <StyledFormControl variant="outlined">
          <InputLabel id="location-label">Location</InputLabel>
          <Select
            labelId="location-label"
            id="location-select"
            multiple
            value={location}
            onChange={handleLocationChange}
            label="Location"
            renderValue={(selected) => (
              <div>
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onDelete={(event) => handleDelete(setLocation)(value)(event)}
                    color="primary"
                  />
                ))}
              </div>
            )}
          >
            {/* Add MenuItems here */}
            <MenuItem value={"Location 1"}>Location 1</MenuItem>
            <MenuItem value={"Location 2"}>Location 2</MenuItem>
          </Select>
        </StyledFormControl>

        <StyledFormControl variant="outlined">
          <InputLabel id="remote-label">Remote</InputLabel>
          <Select
            labelId="remote-label"
            id="remote-select"
            multiple
            value={remote}
            onChange={handleRemoteChange}
            label="Remote"
            renderValue={(selected) => (
              <div>
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onDelete={(event) => handleDelete(setRemote)(value)(event)}
                    color="primary"
                  />
                ))}
              </div>
            )}
          >
            {/* Add MenuItems here */}
            <MenuItem value={"Remote"}>Remote</MenuItem>
            <MenuItem value={"Hybrid"}>Hybrid</MenuItem>
            <MenuItem value={"In-office"}>In-office</MenuItem>
          </Select>
        </StyledFormControl>

        <StyledFormControl variant="outlined">
          <InputLabel id="tech-stack-label">Tech Stack</InputLabel>
          <Select
            labelId="tech-stack-label"
            id="tech-stack-select"
            multiple
            value={techStack}
            onChange={handleTechStackChange}
            label="Tech Stack"
            renderValue={(selected) => (
              <div>
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onDelete={(event) => handleDelete(setTechStack)(value)(event)}
                    color="primary"
                  />
                ))}
              </div>
            )}
          >
            {/* Add MenuItems here */}
            <MenuItem value={"Tech Stack 1"}>Tech Stack 1</MenuItem>
            <MenuItem value={"Tech Stack 2"}>Tech Stack 2</MenuItem>
          </Select>
        </StyledFormControl>

        <StyledFormControl variant="outlined">
          <InputLabel id="base-pay-label">Base Pay</InputLabel>
          <Select
            labelId="base-pay-label"
            id="base-pay-select"
            multiple
            value={basePay}
            onChange={handleBasePayChange}
            label="Base Pay"
            renderValue={(selected) => (
              <div>
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    onDelete={(event) => handleDelete(setBasePay)(value)(event)}
                    color="primary"
                  />
                ))}
              </div>
            )}
          >
            {/* Add MenuItems here */}
            <MenuItem value={"$50,000"}>$50,000</MenuItem>
            <MenuItem value={"$60,000"}>$60,000</MenuItem>
          </Select>
        </StyledFormControl>

        <StyledFormControl variant="outlined">
          <TextField variant="outlined" label="Search Company Name" />
        </StyledFormControl>
      </FiltersContainer>
    );
}

export default Filters;

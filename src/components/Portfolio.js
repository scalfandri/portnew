import React from "react";
import styled from "styled-components";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const Section = styled.section`
  max-width: 900px;
  margin: 2.5rem auto 2.5rem auto;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.8rem;
  letter-spacing: -0.02em;
  color: var(--fg);
  text-align: left;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 2rem;
`;

export default function Portfolio() {
  return (
    <Section id="portfolio">
      <Title>Selected Work</Title>
      <ProjectsGrid>
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </ProjectsGrid>
    </Section>
  );
}
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  max-width: 500px;
  margin: 3rem auto 2rem auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Email = styled.a`
  display: inline-block;
  font-size: 1.1rem;
  color: var(--accent);
  border-bottom: 1.5px solid var(--accent);
  margin-bottom: 0.8rem;
  letter-spacing: 0.04em;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
`;

const Social = styled.div`
  margin-top: 1.2rem;
  color: #888;
  font-size: 0.96rem;
`;

export default function Contact() {
  return (
    <Section id="contact">
      <Title>Contact</Title>
      <Email href="mailto:alex@rivera.com">alex@rivera.com</Email>
      <Social>
        <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
        {"  ·  "}
        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a>
        {"  ·  "}
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </Social>
    </Section>
  );
}
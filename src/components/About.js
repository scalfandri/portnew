import React from "react";
import styled from "styled-components";

const Section = styled.section`
  max-width: 550px;
  margin: 0 auto 2.5rem auto;
  text-align: center;
`;

const Text = styled.p`
  color: #555;
  margin-bottom: 0.7em;
`;

export default function About() {
  return (
    <Section>
      <Text>
        Hi, I’m Alex — a graphic designer specializing in minimalist branding, editorial layouts, and visual identities. I believe in the power of white space and simplicity to communicate ideas clearly and beautifully.
      </Text>
    </Section>
  );
}
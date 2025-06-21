import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  padding: 3rem 0 1.5rem 0;
  text-align: center;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.03em;
`;

const Tag = styled.div`
  font-size: 1.1rem;
  color: var(--accent);
  margin-top: 0.5rem;
  letter-spacing: 0.08em;
`;

export default function Header() {
  return (
    <Wrapper>
      <Name>Alex Rivera</Name>
      <Tag>Minimalist Graphic Designer</Tag>
    </Wrapper>
  );
}
import React from "react";
import styled from "styled-components";

const Card = styled.a`
  display: block;
  background: #fafbfc;
  border: 1px solid var(--border);
  border-radius: 14px;
  overflow: hidden;
  transition: box-shadow 0.2s, border-color 0.2s;
  text-decoration: none;
  color: inherit;

  &:hover {
    box-shadow: 0 6px 32px rgba(0,0,0,0.10);
    border-color: var(--accent);
  }
`;

const Img = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  background: #eee;
  border-bottom: 1px solid var(--border);
`;

const Content = styled.div`
  padding: 1.3rem 1.1rem 1.1rem 1.1rem;
`;

const Title = styled.h3`
  font-size: 1.12rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Desc = styled.p`
  font-size: 1rem;
  color: #4a4a4a;
`;

export default function ProjectCard({ title, description, image, url }) {
  return (
    <Card href={url} target="_blank" rel="noopener noreferrer">
      <Img src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
      </Content>
    </Card>
  );
}
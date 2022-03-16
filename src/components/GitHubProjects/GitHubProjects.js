import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Boxes, Box, Img, BoxTitle, BoxTxt, BoxLinks, BoxLink, TagList, Tag } from './GitHubProjectsStyles';

import { githubProjects } from '../../constants/constants';

export const GitHubProjects = () => (
  <Section id="github-projects">
    <SectionDivider />
    <SectionTitle main>Github Projects</SectionTitle>
    <Boxes>
      {githubProjects.map(({ id, title, description, image, tags, code }) => (
        <Box key={id}>
          <Img src={image} alt={title} ></Img>
          <BoxTitle>{title}</BoxTitle>
          <BoxTxt>{description}</BoxTxt>
          <TagList>
            {tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </TagList>
          <BoxLinks>
            <BoxLink href={`https://github.com/johanmeci/${code}`} target="_blank">Code</BoxLink>
          </BoxLinks>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default GitHubProjects;
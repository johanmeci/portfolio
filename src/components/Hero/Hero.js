import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = (props) => (
  <Section row nopadding id="sectionTxtHero">
    <LeftSection>
      <SectionTitle main center id="titleHero">
        Hello,<br />
        I'm <span className="titleName">Johan</span>
      </SectionTitle>
      <SectionText>
        I am passionate about the constant knowledge about web and application development, in order to contribute to the improvement of processes for the daily life of people.
      </SectionText>
      <Button onClick={() => window.location = '#projects'}>See More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
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
        Creative web developer, dedicated to developing and optimizing interactive, user-friendly and feature-rich websites. 
      </SectionText>
      <Button onClick={() => window.location = '#projects'}>See More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = (props) => (
  <Section row nopadding id="sectionTxtHero">
    <LeftSection>
      <SectionTitle main center id="titleHero">
        Hi,<br />
        I'm Johan
      </SectionTitle>
      <SectionText>
        Web Developer, my purpose is to help people to take their ideas to the next level and build awesome apps.
      </SectionText>
      <Button onClick={() => window.location = '#projects'}>See More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
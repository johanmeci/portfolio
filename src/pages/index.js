import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import GitHubProjects from '../components/GitHubProjects/GitHubProjects';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section, DivContainer } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid id="sectionHero">
        <DivContainer>
          <Hero />
          <BgAnimation />
        </DivContainer>
        <svg id="svgLine" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0F1624" fill-opacity="1" d="M0,160L120,176C240,192,480,224,720,213.3C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      </Section>
      <Projects/>
      <GitHubProjects/>
      <Technologies />
    </Layout>
  );
};

export default Home;

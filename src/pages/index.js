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
          <div className="containerSVG">
            <img src="/images/HeroImg.svg" alt="" />
          </div>
        </DivContainer>
        <svg id="svgLine" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0F1624" fillOpacity="1" d="M0,160L120,176C240,192,480,224,720,213.3C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      </Section>

      <Section id="sectionProjects" className="sectionContent">
        <DivContainer className="divContainer projects">
          <Projects/>
        </DivContainer>
        <svg id="svgLine" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0d1b2a" fillOpacity="1" d="M0,160L120,176C240,192,480,224,720,213.3C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      </Section>

      <Section id="sectionGithub" className="sectionContent">
        <DivContainer className="divContainer github">
          <GitHubProjects/>
        </DivContainer>
        <svg id="svgLine" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0F1624" fillOpacity="1" d="M0,160L120,176C240,192,480,224,720,213.3C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      </Section>

      <Section id="sectionTech" className="sectionContent">
        <DivContainer className="divContainer tech">
          <Technologies />
        </DivContainer>
      </Section>

    </Layout>
  );
};

export default Home;

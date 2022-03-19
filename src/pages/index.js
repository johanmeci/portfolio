import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import GitHubProjects from '../components/GitHubProjects/GitHubProjects';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid id="sectionHero">
        <Hero />
        <BgAnimation />
      </Section>
      <Projects/>
      <GitHubProjects/>
      <Technologies />
    </Layout>
  );
};

export default Home;

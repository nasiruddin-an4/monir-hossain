import Hero from "./components/Hero";
import About from "./components/About";
import Awards from "./components/Awards";
import Institution from "./components/Institution";
import LogoMarquee from "./components/LogoMarquee";
import SocialContribution from "./components/SocialContribution";
import Entrepreneurship from "./components/Entrepreneurship";
import News from "./components/News";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Awards />
      <Institution />
      <LogoMarquee />
      <SocialContribution />
      <Entrepreneurship />
      <News />
      <BackToTop />
    </>
  );
}

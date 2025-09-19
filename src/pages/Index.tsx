import Hero from "../components/Hero";
import About from "../components/About";
import Focus from "../components/Focus";
import Founders from "../components/Founders";
import GetInvolved from "../components/GetInvolved";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Focus />
      <Founders />
      <GetInvolved />
      <Contact />
    </main>
  );
};

export default Index;

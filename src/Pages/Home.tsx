import { ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import JoinUs from "../components/JoinUs";
import Benefits from "../components/Benefits";
import { benefitOne, benefitTwo } from '../utils/data'
import { Container } from "../components/Container";
const HomePage = () => {
  return (
    <Container className="bg-base-200 flex flex-col gap-6">
      <Navbar />
      <Hero />
      <Companies />
      <JoinUs />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <ScrollRestoration />
    </Container>
  )
}

export default HomePage
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import JoinUs from "../components/JoinUs";
import Benefits from "../components/Benefits";
import Footer from "./Footer";
import { benefitOne, benefitTwo } from '../utils/data'
import { Container } from "../components/Container";
const HomePage = () => {
  // const user = {
  //   name: "kevin",
  //   age: 25
  // }
  const user = null
  return (
    <Contaainer className="bg-base-200 flex flex-col gap-6">
      <Navbar user={user} />
      <Hero />
      <Companies />
      <JoinUs />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Footer />
    </Container>
  )
}

export default HomePage
import { useEffect } from "react";
import CompaniesServed from "../CompaniesServed";
import Hero from "../Hero";
import KeyBenifits from "../KeyBenifits";
import WorkSteps from "../Steps";
import "./index.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="">
      <Hero />
      <KeyBenifits />
      <WorkSteps />
      <CompaniesServed />
    </div>
  );
};

export default Home;

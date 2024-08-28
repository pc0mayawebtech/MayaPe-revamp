import CompaniesServed from "../CompaniesServed";
import Hero from "../Hero";
import KeyBenifits from "../KeyBenifits";
import WorkSteps from "../Steps";
import "./index.css";

const Home = () => {
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

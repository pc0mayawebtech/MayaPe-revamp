import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <section className="w-full py-16 md:py-24 lg:py-24 heroSectionMain min-h-[90vh] sm:max-h-screen px-4 sm:px-8">
        <div className="HomeHeroMain container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <img
            src="/dashboard1.png"
            alt="dashboard"
            className="heroDashboard sm:block absolute right-10 top-10 h-32 sm:h-48 w-auto rounded-md z-[2]"
          />
          <img
            src="/payMobile.svg"
            width="450"
            height="310"
            alt="Features"
            className=" sm:block mx-auto overflow-hidden z-[3] rounded-xl object-cover object-center lg:order-last"
          />
          <div className="space-y-8">
            <div className="space-y-3">
              <h1 className="text-white bg-sky-500 rounded-md w-full sm:w-5/12 px-4 py-1 text-center">
                All Your Shops At One Place
              </h1>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Tranforming The Payment Landscape
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                With MayaPe's B2B payment solution empower your business with
                latest digital payment technology and seamless transactions.
                <br />A trusted network for all your transactions.
              </p>
            </div>
            <Button
              onClick={() => navigate("/contact-us")}
              variant={"ghost"}
              className="text-sky-500 hover:text-sky-600"
            >
              Get Started <MoveRight size={15} className="ml-2" />{" "}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

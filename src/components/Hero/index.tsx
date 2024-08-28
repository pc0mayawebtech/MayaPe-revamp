import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import "./index.css";

const Hero = () => {
  return (
    <div className="">
      <section className="w-full py-24 md:py-24 lg:py-24 heroSectionMain min-h-[90vh] max-h-screen px-4 sm:px-8">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <img
            src="/payMobile.svg"
            width="450"
            height="310"
            alt="Features"
            className="hidden sm:block mx-auto overflow-hidden rounded-xl object-cover object-center lg:order-last"
          />
          <div className="space-y-8">
            <div className="space-y-3">
              <h1 className="text-white bg-sky-500 rounded-md w-full sm:w-5/12 px-4 py-1 text-center">
                B2B Payment Software
              </h1>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                The Business-to-Business Payment Network
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Paystand’s B2B payment solution deletes transaction fees, lets
                you operate your accounts receivable on autopilot, and turns
                your cash cycle into a cash instant.
              </p>
            </div>
            <Button variant={"ghost"} className="text-sky-500 hover:text-sky-600">
              Get Started <MoveRight size={15} className="ml-2" />{" "}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

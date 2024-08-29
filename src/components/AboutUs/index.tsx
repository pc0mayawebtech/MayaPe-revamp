import { CheckIcon, MoveRight } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full">
      <section className="w-full py-20 md:py-24 lg:py-28 bg-[url('/blue-bg-2.png')] bg-no-repeat bg-cover px-4 sm:px-8">
        <div className="container px-4 md:px-6 ">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div>
              <h1 className="text-white bg-sky-500 rounded-md inline-block text-sm px-4 py-1 text-center mb-2">
                About Us
              </h1>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Who We Are
              </h2>
              <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Mayape is an online transactions platform that empowers
                businesses of all sizes to securely accept payments, manage
                their finances, and scale their operations. Our mission is to
                provide a user-friendly, reliable, and feature-rich solution
                that helps our clients focus on growing their business.
              </p>
              <Button
                variant={"ghost"}
                className="text-sky-500 hover:text-sky-600 hover:backdrop-blur-sm hover:bg-[#ffffff69] mt-4"
                onClick={()=> navigate('/contact-us')}
              >
                Get Started <MoveRight size={15} className="ml-2" />{" "}
              </Button>
            </div>
            <img
              src="/kaun.svg"
              width="600"
              height="400"
              alt="About Us"
              className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h1 className="text-white bg-sky-500 rounded-md inline-block text-sm px-4 py-1 text-center mb-3">
                Purpose
              </h1>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Purpose
              </h2>
              <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Mayape, our purpose is to empower businesses of all sizes to
                thrive in the digital economy. We believe that secure and
                efficient financial transactions are the foundation for
                sustainable growth.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-start gap-4 bg-background p-4 rounded-lg shadow-sm">
                <CheckIcon className="h-16 w-16 text-sky-500" />
                <div>
                  <h3 className="text-lg font-semibold">
                    Streamline Operations
                  </h3>
                  <p className="text-muted-foreground">
                    Mayape's intuitive platform helps you manage your finances
                    and operations with ease, freeing up time and resources to
                    focus on your core business.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-background p-4 rounded-lg shadow-sm">
                <CheckIcon className="h-16 w-16 text-sky-500" />
                <div>
                  <h3 className="text-lg font-semibold">Secure Transactions</h3>
                  <p className="text-muted-foreground">
                    Our robust security measures and compliance with industry
                    standards ensure that your financial data and transactions
                    are protected, giving you peace of mind.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-background p-4 rounded-lg shadow-sm">
                <CheckIcon className="h-16 w-16 text-sky-500" />
                <div>
                  <h3 className="text-lg font-semibold">Scalable Growth</h3>
                  <p className="text-muted-foreground">
                    As your business grows, Mayape scales with you, providing
                    the tools and infrastructure to support your evolving
                    financial needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[url('/long-png-img.png')] bg-no-repeat bg-cover ">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-white bg-sky-500 rounded-md inline-block text-sm px-4 py-1 text-center">
                Investing in Success
              </h1>

              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Trusted Partners
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Mayape has been supported by leading investors and companies who
                believe in our vision and are committed to our success.
              </p>
              <div className="grid w-full grid-cols-1 lg:grid-cols-3 items-center justify-center gap-8 lg:gap-12 [&>img]:mx-auto py-8">
                <img
                  src="/indusind.svg"
                  width={200}
                  height={70}
                  alt="Backer Logo"
                  className="aspect-[4/1] sm:aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <img
                  src="/equitas.svg"
                  width={200}
                  height={70}
                  alt="Backer Logo"
                  className="aspect-[3.5/1] sm:aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <img
                  src="/yesBank.png"
                  width={200}
                  height={70}
                  alt="Backer Logo"
                  className="aspect-[2.5/1] sm:aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-12 ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-white bg-sky-500 rounded-md inline-block text-sm px-4 py-1 text-center">
                Empower Your Growth
              </h1>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Supercharge Your Business with Mayape
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Mayape offers a comprehensive suite of features to help your
                business thrive:
              </p>
              <div className="grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex items-start gap-4 bg-background p-4 rounded-lg shadow-sm">
                  <CheckIcon className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">Quick Onboarding</h3>
                    <p className="text-muted-foreground">
                      Get up and running in no time with our easy-to-use
                      platform.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-background p-4 rounded-lg shadow-sm">
                  <CheckIcon className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">
                      Full Product Suite
                    </h3>
                    <p className="text-muted-foreground">
                      Access our complete suite of tools to manage your
                      business.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-background p-4 rounded-lg shadow-sm">
                  <CheckIcon className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">API Access</h3>
                    <p className="text-muted-foreground">
                      Integrate Mayape with your existing systems and workflows.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-background p-4 rounded-lg shadow-sm">
                  <CheckIcon className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">24/7 Support</h3>
                    <p className="text-muted-foreground">
                      Our dedicated support team is available to assist you
                      whenever you need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

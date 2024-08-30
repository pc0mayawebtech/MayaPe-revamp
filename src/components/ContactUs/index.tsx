import { MapPinIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import ContactForm from "../ContactForm";
import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-40 bg-[url('/blue-bg-2.png')] bg-no-repeat bg-cover ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="max-w-[700px] text-gray-600 md:text-xl">
              Have a question or need assistance with your online transactions?
              Get in touch with our team today.
            </p>
            <Button className="inline-flex h-10 items-center justify-center rounded-md bg-sky-400 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-sky-400/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Contact Us Hassle-free
            </Button>
          </div>
        </div>
      </section>

      <ContactForm />

      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Workspace
              </h2>
              <p className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our headquarters are located in the heart of the city, providing
                a modern and collaborative workspace for our team. You can visit
                us at:
              </p>
              <div className="mt-6 flex flex-col gap-2">
                <p className="text-muted-foreground font-semibold">
                  T-04, A-44, near sector-15 Metro Station, <br /> Sector 2,
                  Noida, Uttar Pradesh <br /> 201301
                </p>
                <Link
                  to="https://maps.app.goo.gl/SpDLMcd91Xzaxha1A"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-primary hover:underline mt-2"
                >
                  <MapPinIcon className="w-4 h-4 text-sky-500" />
                  View on Map
                </Link>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169.0724326238418!2d77.31212023395004!3d28.585454016360714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x82bb1073c98eb55b%3A0x8ce0dbaa63119ed7!2sMaya%20Web%20Tech!5e1!3m2!1sen!2sin!4v1724740552341!5m2!1sen!2sin"
              className="sm:mx-auto sm:aspect-[3/2] overflow-hidden rounded-xl object-cover object-center w-full h-[300px] sm:h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

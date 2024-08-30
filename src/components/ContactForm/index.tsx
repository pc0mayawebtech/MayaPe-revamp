import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { collection, addDoc } from "firebase/firestore";
import { mayapeDb } from "../../../Firebase";
import { useToast } from "../ui/use-toast";

const ContactForm = () => {
  const {toast} = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let formIsValid = true;
    const newErrors: any = {};

    if (!formData.name.trim()) {
      formIsValid = false;
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      formIsValid = false;
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      newErrors.email = "Email is invalid.";
    }

    if (!formData.message.trim()) {
      formIsValid = false;
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validateForm()) {
        try {
          await addDoc(collection(mayapeDb, "mayapeDB"), {
            formData,
          });
          toast({
            title: "We got your message!",
            description: "Our team will contact you soon.",
          })
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});
    }
  };
  return (
    <div className="bg-gradient-to-b from-white via-white to-sky-200">
      <section className={`contactUsFormPage w-full py-32`}>
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto space-y-2 sm:space-y-5">
            <h2 className="text-xl font-bold tracking-tighter sm:text-3xl md:text-4xl sm:text-center">
              Contact Form
            </h2>
            <p className="text-muted-foreground text-sm md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed sm:text-center">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="min-h-[100px]"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <p className="text-red-600 text-sm">{errors.message}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-500/90"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;

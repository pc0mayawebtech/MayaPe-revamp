import "./index.css";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../../ui/sheet";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about-us" },
    { name: "Contact Us", to: "contact-us" },
  ];

  return (
    <div>
      <header className="shadow-sm bg-white px-4 lg:px-6 h-14 flex items-center justify-between max-w">
        <Link to="/" className="flex items-center justify-center outline-none">
          <img
            src="/mayapeLogo.png"
            alt=""
            className="aspect-[3/1] h-auto w-28"
          />
        </Link>
        <nav className="hidden md:flex gap-10">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="text-sm font-semibold hover:underline underline-offset-8 hover:text-sky-500"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Button
          variant="outline"
          className="hidden md:inline-flex bg-sky-500 text-white hover:bg-sky-600 hover:text-white"
        >
          Login
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col h-full p-4">
              <div className="flex-grow flex flex-col gap-8">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    className="text-sm font-medium hover:underline underline-offset-8 hover:text-sky-500"
                  >
                    <SheetClose>{item.name}</SheetClose>
                  </Link>
                ))}
              </div>
              <Button
                variant="outline"
                className="mt-auto bg-sky-500 text-white hover:bg-sky-600 hover:text-white"
              >
                <SheetClose>Login</SheetClose>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
};

export default Navbar;

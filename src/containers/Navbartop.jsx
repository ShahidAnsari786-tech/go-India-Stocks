import Image from "next/image";
import { Button, SearchBar, UserProfile } from "@/components";

const Navbar = ({ className }) => {
  return (
    <nav
      className={`flex items-center justify-between gap-10 p-2 px-5 bg-blue-100 ${className}`}
    >
      <h1 className="text-lg">
        <a href="/">
          <Image src="/logo.webp" alt="logo" height={100} width={100} />
        </a>
      </h1>

      <SearchBar className="flex-grow" />

      <UserProfile
        className="w-10 md:hidden"
        src="https://source.unsplash.com/random/100x100?user,man,woman,employee"
      />

      {/* Buttons */}
      <div className="hidden gap-2 md:flex ">
        <Button 
          style={{
            borderRadius: "12px",
            boxShadow: "2px 2px 7px #747c87,-1px -1px 9px #ffffff",
            
          }}
        >
          Contact Us
        </Button>
        <Button
          style={{
            borderRadius: "12px",
            boxShadow: "2px 2px 7px #747c87,-1px -1px 9px #ffffff",
          }}
          variant="outline"
          type="link"
          href="#"
        >
          SIGN UP
        </Button>
        <Button
          style={{
            borderRadius: "12px",
            boxShadow: "2px 2px 7px #747c87,-1px -1px 9px #ffffff",
          }}
          variant="outline"
          type="link"
          href="#"
        >
          SIGN IN
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

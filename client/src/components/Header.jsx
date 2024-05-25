import { Button, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar>
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-bold dark:text-white px-2"
      >
        UseDev
      </Link>
      <form action="">
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className=" lg:hidden" color="dark">
        <AiOutlineSearch className="self-center " />
      </Button>
      <div className="flex justify-center gap-2 md:order-2">
        <Button color="dark" className="hidden sm:inline">
          <FaMoon />
        </Button>
        <Link to={"/signin"}>
          <Button color="dark" className="self-center">
            SignIn
          </Button>
        </Link>
        <Navbar.Toggle/>
      </div>
      <Navbar.Collapse >
        <Navbar.Link active={path === "/"}  as={"div"}>
          <Link to={"/"}>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"}  as={"div"}>
          <Link to={"/about"}>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"}  as={"div"}>
          <Link to={"/projects"}>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

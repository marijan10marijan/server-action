import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full h-[80px] bg-purple-500 text-white">
      <div className="h-full max-w-6xl mx-auto flex items-center justify-between px-4">
        <Link href={"/"} className="text-2xl font-bold">
          Action <span className="italic text-purple-950">Way</span>{" "}
        </Link>
        <ul className="flex items-center gap-4">
          <Link href={"/action"} className="font-semibold uppercase">
            Server Action
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

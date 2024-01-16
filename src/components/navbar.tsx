import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="border border-red-500 flex justify-between items-center mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
      <Link href="/">Home</Link>
    </nav>
  );
};

export default Navbar;

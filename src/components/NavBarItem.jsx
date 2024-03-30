"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavBarItem = ({ title, params }) => {
  const searchParms = useSearchParams();
  const genre = searchParms.get("genre");

  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre === params
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }`}
        href={`/?genre=${params}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavBarItem;

"use client";
// use client is used when we want to use react hooks in our Component
import React, { Component, useEffect, useState } from "react";
import {
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdDarkMode,
} from "react-icons/md";
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
  //get all the details from the theme
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    mounted &&
    (currentTheme === "dark" ? (
      <MdOutlineLightMode
        className="text-xl cursor-pointer hover:text-amber-500"
        onClick={() => setTheme("light")}
      />
    ) : (
      <MdOutlineDarkMode
        className="text-xl cursor-pointer hover:text-amber-500"
        onClick={() => setTheme("dark")}
      />
    ))
  );
};

export default DarkModeToggle;

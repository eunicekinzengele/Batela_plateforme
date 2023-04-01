import React from "react";
import NavBar from "../pages/NavBar.jsx";
import Hero from "../pages/Hero.jsx";
import AfterHero from "../pages/AfterHero.jsx";
import CardOfSomeCommunity from "../pages/CardOfSomeCommunity.jsx";

// import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

export default function Accueil() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <AfterHero/>
      <CardOfSomeCommunity/>
    </div>
  );
}

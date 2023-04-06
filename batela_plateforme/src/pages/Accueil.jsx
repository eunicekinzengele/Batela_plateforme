import React from "react";
import NavBar from "./NavBar.jsx";
import Hero from "./Hero.jsx";
import AfterHero from "./AfterHero.jsx";
import CardOfSomeCommunity from '../pages/CardOfSomeCommunity';
import About from "./About.jsx";
import Beforefooter from './Beforefooter';
import Footer from './Footer';

// import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

export default function Accueil() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <AfterHero/>
      <CardOfSomeCommunity/>
      <About/>
      <Beforefooter/>
      <Footer/>
    </div>
  );
}

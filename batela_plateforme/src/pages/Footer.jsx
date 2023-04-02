import React from "react";
import Image from "next/image";
import logo_batela from "../Images/logo_batela.png";
import { BsArrowRight } from "react-icons/bs";


export default function Footer() {
  return (
    <div className=" bg-gray-800 w-full flex justify-center h-80">
      <div className=" w-2/6 text-center justify-center	">
        <div className=" justify-center flex p-10">
          <Image className=" w-20 h-20" src={logo_batela} />
        </div>
        <p className=" px-12 text-white">
          Nous voulons developper une technologie de pointe pour aider tout
          personnel soignant à réussir à ameliorer les soins de santé
        </p>
      </div>
      <div className=" w-2/6 text-center ">
        <div className=" justify-center flex p-10">
          <p className=" text-white">Liens rapides</p>
        </div>
        <p className=" px-12 text-white flex justify-center"><BsArrowRight className=" mt-1 mr-3"/> A propos de nous  </p>
        <p className=" px-12 text-white flex justify-center"><BsArrowRight className=" mt-1 mr-3"/>Domaine</p>
        <p className=" px-12 text-white flex justify-center"><BsArrowRight className=" mt-1 mr-3"/> FAQ </p>
      </div>
      <div className=" w-2/6 text-center ">
        <div className=" justify-center flex p-10">
            <p className=" text-white">Contact</p>
        </div>
        <p className=" px-12 text-white">
            41 Avenue Longo, <br/>
            Quartier Kauka <br/>
            Commune de Kalamu
        </p>
      </div>
    </div>
  );
}

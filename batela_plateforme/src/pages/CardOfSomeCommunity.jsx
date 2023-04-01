import React from "react";
import { GiStethoscope } from "react-icons/gi";
import { TbNurse } from "react-icons/tb";
import { FaTooth } from "react-icons/fa";
import { BsArrowRightCircleFill } from "react-icons/bs";

export default function CardOfSomeCommunity() {
  return (
    <div className=" w-full h-120 items-center flex flex-col mb-16">
      <h2 className=" text-3xl text-center font-bold text-slate-900 py-10 mb-5  ">
        Rejoignez la communauté et profitez au maximum <br />
        de la plateforme{" "}
      </h2>
      <div className=" h-96 w-full flex justify-center space-x-8 ">
        <div className="border-slate-300 border-solid border-2 h-80 w-64 space-y-4 justify-center flex items-center flex-col">
          <div className=" bg-slate-100 w-20 h-20 rounded-full items-center flex justify-center">
            <GiStethoscope className=" text-purple-700 text-6xl" />
          </div>
          <h2 className=" text-xl font-semibold text-slate-800 ">
            Généraliste
          </h2>
          <p className=" text-center text-base px-4 ">
            Batela est dediée aux médecins de différentes specialités
          </p>
          <p className=" text-sm text-purple-700">Plus de détail...</p>
        </div>
        <div className="border-slate-300 border-solid border-2 h-80 w-64 space-y-4  justify-center flex items-center flex-col">
          <div className=" bg-slate-100 w-20 h-20 rounded-full items-center flex justify-center">
            <TbNurse className=" text-purple-700 text-6xl" />
          </div>
          <h2 className=" text-xl font-semibold text-slate-800 ">Infirmier</h2>
          <p className=" text-center text-base px-4 ">
            Batela est dediée aux médecins de différentes specialités
          </p>
          <p className=" text-sm text-purple-700">Plus de détail...</p>
        </div>
        <div className="border-slate-300 border-solid border-2 h-80 w-64 space-y-4  justify-center flex items-center flex-col">
          <div className=" bg-slate-100 w-20 h-20 rounded-full items-center flex justify-center">
            <FaTooth className=" text-purple-700 text-5xl" />
          </div>
          <h2 className=" text-xl font-semibold text-slate-800 ">Dentiste</h2>
          <p className=" text-center text-base px-4 ">
            Batela est dediée aux médecins de différentes specialités
          </p>
          <p className=" text-sm text-purple-700">Plus de détail...</p>
        </div>
      </div>
      <div className=" w-full text-right">
        <p className="flex justify-end mx-36 ">
          Autres <BsArrowRightCircleFill className=" text-purple-400 mx-2 mt-1 hover:text-purple-700"/>
        </p>
      </div>
    </div>
  );
}

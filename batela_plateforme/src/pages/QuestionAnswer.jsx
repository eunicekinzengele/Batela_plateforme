import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function QuestionAnswer() {
  return (
    <div className="">
      <div className=" bg-purple-100 flex h-28 border-b-2 border-gray-400">
        <div className=" w-3/5 justify-center items-center flex">
          <p className=" text-3xl">Le titre de la question</p>
        </div>
        <div className="w-2/5 justify-center items-center flex">
          <button className=" bg-purple-700 rounded p-2 text-white">
            Poser une question
          </button>
        </div>
      </div>
      <div>
        <div className=" h-auto flex items-center justify-center">
          <p className=" bg-gray-300 w-120 rounded-xl mt-10 mb-10 text-sm p-5 h-auto text-slate-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className=" justify-center flex mb-16">
          <div className=" h-48 w-120 space-y-4  ">
            <p>2 réponses</p>
            <div className=" justify-center flex space-x-4 h-auto ">
              <div className=" h-auto space-y-1">
                <p className=" bg-purple-700 px-3 py-1 rounded">
                  <IoIosArrowUp className=" text-white" />
                </p>
                <p className=" px-3 text-center">5</p>
                <p className=" bg-purple-700 px-3 py-1 rounded">
                  <IoIosArrowDown className=" text-white" />
                </p>
              </div>
              <div className=" bg-gray-200 w-116 h-auto text-sm rounded p-3">
                <p className=" text-slate-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                  <br />
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-80 flex justify-center">
          <div className=" w-120 space-y-10">
            <p className=" border-b-gray-400 text-gray-500 border-b-2 py-2 pl-3">Ajouter un commentaire</p>
            <div className=" space-y-3">
              <p className=" text-sm pl-3">Écrivez votre réponse</p>
              <div className=" ">
              <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 focus:outline-purple-300 bg-gray-50 rounded-lg border border-gray-300 " placeholder="Votre réponse..."></textarea>
              </div>
            <div className=" flex justify-end mr-5">
                <button className=" text-white rounded-xl p-2 px-3 bg-purple-700">Envoyer</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

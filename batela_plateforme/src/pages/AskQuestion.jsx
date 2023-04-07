import React from "react";

export default function AskQuestion() {
  return (
    <div className=" h-auto flex justify-center pb-16">
      <div className=" w-125 h-auto space-y-7 ">
        <h1 className=" py-10 text-4xl font-semibold">Poser votre question</h1>
        <div className=" bg-purple-100 border-purple-300 border-2 w-116 h-11 flex items-center ">
            <p className=" pl-4">Revoyez la question avant de la poster</p>
        </div>
        <div className=" border-zinc-300 border-2 w-116 h-48 p-6 space-y-3 ">
            <p className=" text-xl font-medium">Titre</p>
            <p className=" text-sm text-slate-600">Formulez un titre à votre question. Soyez précis, imaginez que vous posez la question à une autre personne</p>
            <input placeholder="Titre de la question" className="border-gray-300 rounded pl-[14px] focus:outline-purple-300  bg-gray-50  border-2 w-115 h-9 "/>
        </div>
        <div className=" border-zinc-300 border-2 w-116 p-6 space-y-3  h-72 ">
        <p className=" text-xl font-medium">Question</p>
        <p className=" text-sm text-slate-600">Le corps de votre question contient les détails de votre question et les resultats</p>
        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 focus:outline-purple-300 bg-gray-50 rounded-lg border border-gray-300 " placeholder="Ecrivez votre question..."></textarea>
        </div>
        <button className=" bg-purple-500 rounded p-2 text-white">Poster votre question</button>
      </div>
    </div>
  );
}

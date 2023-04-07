import React from "react";

export default function QuestionAsked() {
  return (
    <div className=" h-56">
      <div className=" bg-gradient-to-l from-purple-400  h-28 flex">
        <div className="  w-2/5 flex justify-center items-center ">
        <p className=" text-3xl">Questions</p>
        </div>
        <div className=" w-3/5 flex justify-center items-center space-x-3">
          <button
            type="button"
            className=" w-44 h-10 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Trouvez un domaine
          </button>
          <button
            type="button"
            className=" w-44 h-10 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Posez une question
          </button>
        </div>
      </div>
      <div className=" h-110">
        <div className=" bg-neutral-100 border-b-2 border-gray-200  pl-20 pt-5 h-36 space-y-1">
            <p className=" text-purple-700 text-xl ">Titre de la question</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            <p>5 réponse</p>
        </div>
        <div className=" bg-neutral-100 border-b-2 border-gray-300  pl-20 pt-5 h-36 space-y-1">
            <p className=" text-purple-700 text-xl ">Titre de la question</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            <p>5 réponse</p>
        </div>
        <div className=" bg-neutral-100 border-b-2 border-gray-200  pl-20 pt-5 h-36 space-y-1">
            <p className=" text-purple-700 text-xl ">Titre de la question</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            <p>5 réponse</p>
        </div>
    </div>
    </div>
  );
}

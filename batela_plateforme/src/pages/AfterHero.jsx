import React from "react";
import { FaSearch } from "react-icons/fa";

export default function AfterHero() {
  return (
  
    <div className="h-[35rem]  items-center flex">
      <div className="  bg-purple-100 bg-no-repeat bg-cover content-center flex items-center justify-center h-72 w-full">
        {" "}
        {/* bg-[url('../Images/afterhero.png')] */}
        <div className=" bg-purple-200 drop-shadow-2xl flex flex-col items-center justify-center	w-96 h-96 rounded-2xl ">
          <FaSearch className=" text-purple-700 text-6xl" />
          <h2 className=" p-7 text-center text-lg">
            Trouvez les meileurs réponses à vos questions liées à la santé et
            aidez les autres à avoir des réponses à leurs questions{" "}
          </h2>
          <button
            type="button"
            className=" w-44 h-10 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Rejoignez la communauté
          </button>
        </div>
      </div>
    </div>
  );
}

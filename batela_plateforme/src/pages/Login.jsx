import React from "react";

export default function Login() {
  return (
    <div className=" w-full h-110 bg-purple-100 flex justify-center items-center">
      <div className=" w-116  h-80 flex  ">
        <div className=" w-2/4 rounded-l-3xl bg-purple-600 flex justify-center items-center ">
            <p className=" text-center text-white px-10">Rejoignez la communauté et profitez au maximum de la plateforme </p>
        </div>
        <div className=" w-2/4 rounded-r-3xl bg-white flex justify-center items-center ">
          <div className=" justify-center text-center">
            <p className=" text-xl font-semibold pb-7">Connexion</p>
            <div className=" pb-4">
            <input type="text" placeholder="User name... " className="shadow-lg  h-10 rounded-3xl m-2 outline-none focus:outline-purple-200 pl-[14px]" ></input>
            <input type="text" class="shadow-lg  h-10 rounded-3xl m-2 outline-none focus:outline-purple-200 pl-[14px]" placeholder="password..."></input>
            </div>
            <button class=" bg-purple-600 w-60 rounded-3xl text-sm text-white p-2">LOGIN </button>

          </div>
        </div>
      </div>
    </div>
  );
}

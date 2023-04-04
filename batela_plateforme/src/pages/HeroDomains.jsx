import React from "react";
import Image from 'next/image';
import batelaDomaine from '../Images/batelaDomaine.jpg'

export default function HeroDomains() {
  return (
    <div className="bg-purple-200 drop-shadow-2xl	 bg-no-repeat bg-cover h-110 w-full items-center flex ">
      <div className=" w-2/5 items-center  flex	 h-full">
        <p className=" text-4xl font-bold text-stone-800 p-20">
          Trouvez ici le domaine qui vous intéresse
        </p>
      </div>
      <div className="w-3/5	 justify-center flex items-center h-full">
        <Image className=" w-110 rounded-3xl" src={batelaDomaine} />
      </div>
    </div>
  );
}

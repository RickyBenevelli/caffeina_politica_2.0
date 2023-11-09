import React from "react";
import Image from "next/image";

const Presentazione = ({
  reverse,
  founder,
}: {
  reverse: boolean;
  founder: {
    name: string;
    description: string;
    image: string;
  };
}) => {
  return (
    <div
      className={`flex flex-col  ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }  items-center`}
    >
      <div
        className="w-52 h-52 m-5 bg-slate-800 overflow-hidden shadow-lg"
        style={{ borderRadius: "82% 18% 66% 34% / 36% 44% 56% 64% " }}
      >
        <Image
          src={founder.image}
          alt="foto dei fondatori"
          width={208}
          height={208}
        />
      </div>

      <div
        className={`flex flex-col md:w-2/3 lg:w-9/12 ${
          reverse ? "text-right" : "text-left"
        } p-3`}
      >
        <h3 className="text-2xl lg:text-3xl font-semibold">{founder.name}</h3>
        <p className="text-md lg:text-lg font-normal py-3">
          {founder.description}
        </p>
      </div>
    </div>
  );
};

export default Presentazione;

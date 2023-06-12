import React from "react";
import simple from "../../Assets/logo12.png";
import help from "../../Assets/logo7.png";
import more from "../../Assets/logo14.png";

const Value = () => {
  return (
    <div className=" mb-[4rem] mt-[6rem]">
      <h1 className=" text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
        The value that holds us true and to account
      </h1>

      <div className=" grid gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className=" flex items-center gap-3">
            <div className=" imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={simple} alt="" className=" w-[70%]" />
            </div>
            <span className=" font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className=" text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eos.
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]">
          <div className=" flex items-center gap-3">
            <div className=" imgDiv p-[4px] rounded-[.8rem] bg-[#f8d0f0] h-[40px] w-[40px] flex items-center justify-center">
              <img src={help} alt="" className=" w-[70%]" />
            </div>
            <span className=" font-semibold text-textColor text-[18px]">
              Security
            </span>
          </div>
          <p className=" text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eos.
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#fffcd9] p-[1.5rem]">
          <div className=" flex items-center gap-3">
            <div className=" imgDiv p-[4px] rounded-[.8rem] bg-[#fbf9af] h-[40px] w-[40px] flex items-center justify-center">
              <img src={more} alt="" className=" w-[70%]" />
            </div>
            <span className=" font-semibold text-textColor text-[18px]">
              Versatile
            </span>
          </div>
          <p className=" text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eos.
          </p>
        </div>
      </div>

      <div className="card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]">
        <div>
          <h1 className=" text-blueColor text-[30px] font-bold">
            Ready to switch a careear
          </h1>
          <h2 className=" text-textColor text-[25px] font-bold">
            Let's get Started!
          </h2>
        </div>
        <button className=" border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Value;

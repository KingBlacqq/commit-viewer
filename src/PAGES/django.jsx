import React from "react";
import ReactDOM from "react-dom/client";
import { SEARCH } from "../assets/IMAGES/img";

const django = () => {
  return (
    <div className=" max-w-[87.5rem] w-[100%] h-[48rem] bg-[#FFF] flex flex-col">
      <div className=" bg-[#EFF2F6] h-[8rem] w-[87.5rem]">
        <div className="flex gap-[0.5rem] ml-[9.06rem]">
          <h1 className="font-[Inter] font-[700] text-[#18214D] text-[ 1.75rem] tracking-[ -0.0375rem] mt-[3rem] mr-[2rem]">
            CommitViewer
          </h1>

          <div className="flex  items-center max-w-[50.625rem] w-[50.625rem] gap-[0.5rem] mt-[2.25rem]">
            <div className="ml-[-1rem] absolute pl-[2rem]">
              <SEARCH />
            </div>
            <div className="">
              <input
                type="text"
                value="django/django"
                className="px-[2rem] py-[1rem] rounded-md bg-[#DFE4EA] pr-[26rem] text-[#18214D] pl-[3rem]"
              />
            </div>
            <button className="bg-[#F3663F] font-[600] font-[Inter] text-[#FFF] font-[1.25rem]text-[center] w-[12.375rem] rounded-md h-[3.625rem]">
              <a href>See Commit 🚀</a>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-[2rem]">
       <h1 className="text-[#29335C] font-[Inter] font-[600] text-[2.25rem] text-[center]">django/django</h1>
       <p className="text-[#18214D] font-[Inter] text-[1.25rem] mt-[2rem] tracking-[-0.025rem]">Loading...</p>
      </div>
    </div>
  );
};

export default django;

import React from "react";
import ReactDOM from "react-dom/client";
import { SEARCH } from "../assets/IMAGES/img";

const Django = () => {
  return (
    <div className="mx-[auto] md:max-w-[768px]md:w-[100%]">
  <div className=" h-[5.125rem] bg-[#DFE4EA] mx-[auto] md:bg-[#EFF2F6] md:h-[10rem] xl:h-[8.125rem]">
    <div className="md:max-w-[87rem] md:w-[100%] md:flex md:flex-col lg:flex-row lg:pt-[3rem] xl:gap-0 xl:ml-[-12rem]">
      <h1 className="font-[Inter] font-[700] text-[#18214D] text-[1.75rem] tracking-[-0.0375rem] text-center pt-[1.5rem] lg:ml-[3rem] xl:mx-[auto] xl:mt-[-2rem] xl:pl-[25rem]">
        CommitViewer
      </h1>

      <div className="hidden md:flex md:flex-row md:gap-2 md:mx-[auto] md:mt-[1rem] xl:mt-[-1rem] ">
        <div className="md:absolute md:top-[6.1rem] md:ml-[0.9rem] lg:top-[5rem] xl:top-[3rem]">
          <SEARCH />
        </div>
        <div className="">
          <input
            type="text"
            value="django/django"
            className="md:px-[2rem] md:py-[1rem] md:rounded-md md:bg-[#DFE4EA] md:pr-[20rem] md:text-[#18214D] md:pl-[3rem] xl:max-w-[41.625rem] xl:w-[100%]"
          />
        </div>
        <button className="md:bg-[#F3663F] md:font-[600] md:font-[Inter] md:text-[#FFF] md:text-[1rem] md:text-[center] md:w-[10.375rem] md:rounded-md md:h-[3.625rem] xl:text-[1.25rem] xl:max-w-[12.375rem] xl:w-[100%]">
          <a href>See Commit 🚀</a>
        </button>
      </div>
    </div>
  </div>

  <div className="flex flex-col items-center justify-center mt-[2rem] max-w-[17.875rem] w-[100%] mx-[auto]">
    <h1 className="text-[#29335C] font-[Inter] font-[600] text-[2.25rem] text-[center]">
    django/django
    </h1>
    <p className="text-[#18214D] font-[Inter] text-[1.25rem] mt-[2rem] tracking-[-0.025rem]">
      Loading...
    </p>
  </div>
</div>
);
};

export default Django;

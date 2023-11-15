import React from "react";
import ReactDOM from "react-dom/client";
import { Ellipse, SEARCH } from "../assets/IMAGES/img";

const viewCommit = () => {
  return (
    <div className=" max-w-[87.5rem] w-[100%] h-[48rem] bg-[#FFF] flex flex-col">
      <div className=" bg-[#EFF2F6] h-[8rem] w-[78.95rem]">
        <div className="flex gap-[0.5rem] ml-[9.06rem]">
          <h1 className="font-[Inter] font-[700] text-[#18214D] text-[ 1.75rem] tracking-[ -0.0375rem] mt-[3rem] mr-[2rem]">
            CommitViewer
          </h1>

          <div className="flex  items-center max-w-[50.625rem] w-[50.625rem] gap-[0.5rem] mt-[2.25rem] pb-[3rem]">
            <div className="ml-[-1rem] absolute pl-[2rem]">
              <SEARCH />
            </div>
            <div className="">
              <input
                type="text"
                value="microsoft/vscode"
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
        <h1 className="text-[#29335C] font-[Inter] font-[600] text-[2.25rem] text-[center]">
          microsoft/vscode
        </h1>
      </div>

      <div className="flex flex-row w-[69.375rem] h-[ 5.875rem] ml-[9.06rem]">
        <div className="py-[3.75rem] ml-[3.12rem] mb-[2.15rem] text-[#18214D] font-[Inter] font-[600] leading-[1.875rem] tracking-[-0.03438rem]">
          <img src={Ellipse} alt="Ellipse icon" />
          <p>gaearon</p>
        </div>
        <div className="w-[30rem] h-[1.78rem] mt-[4.94rem] ml-[4.81rem]">
          <p className="font-[inter] text-[#18214D] font-[400] tracking-[-0.025rem] leading-[1.75rem] text-[1rem]">
            Log all errors to console.error by default (#21130)
          </p>
        </div>
        <div className="text-right ml-[7.35rem] w-[10.375rem] mt-[4.94rem]">
          <p className="font-[inter] text-[#18214D] leading-[ 1.75rem] tracking-[-0.025rem] font-[400]text-[1rem] text-right">
            23:30 28/04/2021
          </p>
        </div>
      </div>

      <div className="flex flex-row w-[69.375rem] h-[ 5.875rem] ml-[9.06rem] mt-[-7rem]">
        <div className="py-[3.75rem] ml-[3.12rem] mb-[2.15rem] text-[#18214D] font-[Inter] font-[600] leading-[1.875rem] tracking-[-0.03438rem]">
          <img src={Ellipse} alt="Ellipse icon" />
          <p>gaearon</p>
        </div>
        <div className="w-[30rem] h-[1.78rem] mt-[4.94rem] ml-[4.81rem]">
          <p className="font-[inter] text-[#18214D] font-[400] tracking-[-0.025rem] leading-[1.75rem] text-[1rem]">
            Log all errors to console.error by default (#21130)
          </p>
        </div>
        <div className="text-right ml-[7.35rem] w-[10.375rem] mt-[4.94rem]">
          <p className="font-[inter] text-[#18214D] leading-[ 1.75rem] tracking-[-0.025rem] font-[400]text-[1rem] text-right">
            23:30 28/04/2021
          </p>
        </div>
      </div>

      <div className="flex flex-row w-[69.375rem] h-[ 5.875rem] ml-[9.06rem] mt-[-7rem]">
        <div className="py-[3.75rem] ml-[3.12rem] mb-[2.15rem] text-[#18214D] font-[Inter] font-[600] leading-[1.875rem] tracking-[-0.03438rem]">
          <img src={Ellipse} alt="Ellipse icon" />
          <p>gaearon</p>
        </div>
        <div className="w-[30rem] h-[1.78rem] mt-[4.94rem] ml-[4.81rem]">
          <p className="font-[inter] text-[#18214D] font-[400] tracking-[-0.025rem] leading-[1.75rem] text-[1rem]">
            Log all errors to console.error by default (#21130)
          </p>
        </div>
        <div className="text-right ml-[7.35rem] w-[10.375rem] mt-[4.94rem]">
          <p className="font-[inter] text-[#18214D] leading-[ 1.75rem] tracking-[-0.025rem] font-[400]text-[1rem] text-right">
            23:30 28/04/2021
          </p>
        </div>
      </div>

      <div className="flex flex-row w-[69.375rem] h-[ 5.875rem] ml-[9.06rem] mt-[-7rem]">
        <div className="py-[3.75rem] ml-[3.12rem] mb-[2.15rem] text-[#18214D] font-[Inter] font-[600] leading-[1.875rem] tracking-[-0.03438rem]">
          <img src={Ellipse} alt="Ellipse icon" />
          <p>gaearon</p>
        </div>
        <div className="w-[30rem] h-[1.78rem] mt-[4.94rem] ml-[4.81rem]">
          <p className="font-[inter] text-[#18214D] font-[400] tracking-[-0.025rem] leading-[1.75rem] text-[1rem]">
            Log all errors to console.error by default (#21130)
          </p>
        </div>
        <div className="text-right ml-[7.35rem] w-[10.375rem] mt-[4.94rem]">
          <p className="font-[inter] text-[#18214D] leading-[ 1.75rem] tracking-[-0.025rem] font-[400]text-[1rem] text-right">
            23:30 28/04/2021
          </p>
        </div>
      </div>
    </div>
  );
};

export default viewCommit;

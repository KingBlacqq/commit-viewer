import React from "react";
import ReactDOM from "react-dom/client";
import { SEARCH } from "../assets/IMAGES/img";
import { Link } from "react-router-dom";

const homePage = function App() {
  return (
    <div className="xl:h-[48rem]">
      <div className="xl:bg-[#FFF] xl:max-w-[80.75rem] xl:w-[100%] ">
        <div className="xl:flex xl:flex-row xl:mt-[3rem] ml-[10.06rem] items-center justify-items-center">
          <div className="text-[#18214D] mr-[44.94rem] font-[Inter] font-[700] text-[1.75rem] leading-normal tracking-[-0.0375rem]">
            <h2 className="">CommitViewer</h2>
          </div>
          <div className="flex w-[12.0625rem] h-[1.75rem] ml-[-9.06rem]  ">
            <ul className="flex gap-[4rem] text-[1.25rem] font-[Inter] items-start text-[#18214D] font-[400] tracking-[-0.025rem]">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-[auto]">
        <div className="max-w-[33.75rem] gap-[0.5rem] text-center font-[Inter] text-[#18214D] text-[4.5rem] font-[600] leading-[5rem] ml-[23rem] mt-[4rem]">
          <h1 className="font-[Inter] text-center leading-[5rem]">
            Discover the world of code
          </h1>
        </div>
        <div className="text-center w-[23.8125rem]  h-[5.5rem] ml-[27.5rem] mt-[0.5rem]">
          <p className="font-[Inter] text-[1rem]">
            Explore open source projects from GitHub, and read their commit
            history to see the story of how they were built.
          </p>
        </div>
      </div>

      <div className="bg-[#FFF]">
        <div className=" flex gap-[1rem] ml-[12rem]">
          <div className=" flex items-center bg-[#DFE4EA] max-w-[43.375rem] w-[100%] rounded-md">
            <div className="ml-[1.01rem]">
              <SEARCH />
            </div>
            <div className=" max-w-[43.375rem] h-[3.625rem] w-[100%]">
              <input
                type="text"
                placeholder="Eg. facebook/react"
                className="py-[0.94rem] bg-transparent font-[400] font-[Inter]"
              />
            </div>
          </div>
          <button className="bg-[#F3663F] secondary text-[#FFF] font-[Inter] w-[13.125rem] rounded-md font-[600]">
            <Link to="/viewCommit">See commits 🚀</Link>
          </button>
        </div>
      </div>

      <div className=" items-center justify-center mt-[1rem]">
        <div className="">
          <p className="text-center text-[#3E4462] font-[Inter] font-[400] text-[0.875rem] pb-[1rem] ml-[-0.5rem]">
            Or pick one of these suggested repos
          </p>
        </div>
        <div className="flex gap-[1rem] ml-[18.5rem] ">
          <button className="text-center text-[#FFF] px-[1rem] bg-[#29335C] rounded-[0.5rem] h-[2.1875rem]">
            <Link to="/django">django/django</Link>
          </button>
          <button className="bg-[#29335C] font-[Inter]  text-[#FFF]  px-[0.5rem] rounded-[0.5rem] h-[2.1875rem]">
            <Link to="/viewLoading">microsoft/vscode</Link>
          </button>
          <button className="text-[#FFF] bg-[#29335C] font-[Inter] rounded-[0.5rem] px-[0.5rem]  h-[2.1875rem]">
            <Link to="/jezen">jezen/is-thirteen</Link>
          </button>
          <button className="text-[#FFF] bg-[#29335C] font-[Inter] rounded-[0.5rem] px-[0.5rem]  h-[2.1875rem]">
            <Link to="/benawad">benawad/dogehouse</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default homePage;

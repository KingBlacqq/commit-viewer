import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import { useLocation } from "react-router-dom";
import { Ellipse, SEARCH } from "../assets/IMAGES/img";
// import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../sevices/axios";

const ViewCommit = () => {
  const { repo, user } = useParams();
  const [commits, setCommits] = useState();
  const [query, setQuery] = useState("");

  const viewCommit = async () => {
    try {
      const response = await Api.get(`/repos/${user}/${repo}/commits`, {
        params: {
          q: "stars:>0",
          sort: "stars",
          order: "desc",
          per_page: 4,
        },
      });

      setCommits(response?.data);
    } catch (error) {
      console.error("Error fetching GitHub repositories:", error);
    }
  };

  useEffect(() => {
    viewCommit();
  }, []);

  return (
    <div className=" mx-[auto] xl:h-[48rem]">
      <div className="min-w-[28.75rem] w-[100%] h-[5.125rem] bg-[#DFE4EA] mx-[auto] md:bg-[#EFF2F6] md:h-[10rem] xl:h-[8.125rem]">
        <div className="md:max-w-[87rem] md:w-[100%] md:flex md:flex-col lg:flex-row lg:pt-[3rem] xl:gap-0 xl:ml-[-12rem]">
          <h1 className="min-[400px]:mx-[auto] font-[Inter] font-[700] text-[#18214D] text-[1.75rem] tracking-[-0.0375rem] text-center mx-[auto] pt-[1.5rem] lg:ml-[3rem]  xl:mx-[auto] xl:mt-[-2rem] xl:pl-[20rem]">
            CommitViewer
          </h1>
          {/* <h2>{items}</h2> */}

          <div className="hidden md:flex md:flex-row md:gap-2 md:mx-[auto] md:mt-[1rem] xl:mt-[-1rem] ">
            <div className="md:absolute md:top-[6.1rem] md:ml-[0.9rem] lg:top-[5rem] xl:top-[3rem]">
              <SEARCH />
            </div>
            <div className="">
              <input
                type="text"
                value={repo}
                className="md:px-[2rem] md:py-[1rem] md:rounded-md md:bg-[#DFE4EA] md:pr-[20rem] md:text-[#18214D] md:pl-[3rem] xl:max-w-[41.625rem] xl:w-[100%]"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <button className="md:bg-[#F3663F] md:font-[600] md:font-[Inter] md:text-[#FFF] md:text-[1rem] md:text-[center] md:w-[10.375rem] md:rounded-md md:h-[3.625rem] xl:text-[1.25rem] xl:max-w-[12.375rem] xl:w-[100%]">
              <a
                href
                // onClick={fetchrepos}
              >
                See Commit 🚀
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[17.875rem] w-[100%] mt-[2rem] mx-[auto]">
        <h1 className="text-[1.5rem] font-[Inter] text-center text-[#18214D] font-[600] leading-[2.75rem] tracking-[-0.09375rem]">
          {repo.commit}
        </h1>
      </div>
      {commits?.map((repo) => {
        console.log(repo);
        return (
          <div
            className="max-w-[28.75rem] w-[100%] mx-[2rem] mt-[2rem] md:mx-[auto] md:max-w-[28.75rem] md:w-[100%] md:ml-[12rem] lg:max-w-[87.5rem] lg:w-[100%] lg:mx-[auto] xl:mx-[auto]"
            key={repo.node_id}
          >
            <div className="flex flex-col mx-[auto] md:mx-[auto] lg:flex-row-reverse lg:mx-[auto]">
              <div className="max-w-[24.75rem] w-[100%] lg:max-w-[28rem] lg:w-[100%] lg:mr-[18rem] lg:mt-[1.9rem] xl:pl-[-28rem] xl:absolute xl:left-[29rem]">
                <p className="text-[#18214D] text-[1.25rem] font-[Inter] font-[400] leading-[1.75rem] tracking-[-0.025rem] max-w-[30.75rem] w-[100%] md:text-[1.5rem] md:leading-[2rem] lg:max-w-[28rem] lg:w-[100%] lg:text-[1.25rem] lg:font-[400]">
                  {repo.commit.author.email}
                </p>
              </div>
              <div className="flex flex-row gap-10 mt-[1rem] lg:flex-col-reverse">
                <div className="flex flex-row gap-2 lg:flex-col lg:pr-[66rem]">
                  <div className="w-[1.875rem] h-[1.875rem]">
                    <img src={repo.author?.avatar_url} alt="image_avatar" />
                  </div>
                  <p className="text-[#18214D] font-[Inter] font-[600] leading-[1.875rem] tracking-[-0.03438rem]">
                    {repo.commit.author.name}
                  </p>
                </div>
                <div className="max-w-[15.375rem] w-[100%] top-[18.7rem] xl:left-[60rem] xl:top-[17rem] ">
                  <p className="text-[1.25rem] font-[400] font-[Inter] text-[#18214D] leading-[1.75rem] tracking-[-0.025rem] max-w-[15.375rem] w-[100%] pl-[4rem]">
                    {repo.commit.author.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* <div className="max-w-[28.75rem] w-[100%] mx-[2rem] mt-[2rem] md:mx-[auto] md:max-w-[28.75rem] md:w-[100%] md:ml-[12rem] lg:max-w-[87.5rem] lg:w-[100%] lg:mx-[auto] xl:mx-[auto]">
        <div className="flex flex-col mx-[auto] md:mx-[auto] lg:flex-row-reverse lg:mx-[auto]">
          <div className="max-w-[24.75rem] w-[100%] lg:max-w-[28rem] lg:w-[100%] lg:mr-[18rem] lg:mt-[1.9rem] xl:pl-[-28rem] xl:absolute xl:left-[29rem]">
            <p className="text-[#18214D] text-[1.25rem] font-[Inter] font-[400] leading-[1.75rem] tracking-[-0.025rem] max-w-[30.75rem] w-[100%] md:text-[1.5rem] md:leading-[2rem] lg:max-w-[28rem] lg:w-[100%] lg:text-[1.25rem] lg:font-[400]">
              Log all errors to console.error by default (#21130)
            </p>
          </div>
          <div className="flex flex-row gap-10 mt-[1rem] lg:flex-col-reverse">
            <div className="flex flex-row gap-2 lg:flex-col lg:pr-[66rem]">
              <div className="w-[1.875rem] h-[1.875rem] lg:w-[3.75rem] lg:h-[3.75rem]">
                <img src={Ellipse} alt="Ellipse icon" />
              </div>
              <p className="text-[#18214D] font-[Inter] font-[600] leading-[1.875rem] tracking-[-0.03438rem] lg:max-w-[10rem] lg:w-[100%] lg:text-[1.375rem] lg:font-[600] lg:ml-[-0.5rem]">
                gaearon
                
              </p>
            </div>
            <div className="max-w-[15.375rem] w-[100%] lg:max-w-[15.875rem] lg:w-[100%] lg:absolute left-[45rem] top-[18.7rem] xl:left-[60rem] xl:top-[17rem]">
              <p className="text-[1.25rem] font-[400] font-[Inter] text-[#18214D] leading-[1.75rem] tracking-[-0.025rem] max-w-[15.375rem] w-[100%] pl-[4rem] lg:text-right lg:text-[1.25rem] lg:font-[Inter] lg:max-w-[22.875rem] lg:w-[100%] ">
                23:30 28/04/2021
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[28.75rem] w-[100%] mx-[2rem] mt-[2rem] md:mx-[auto] md:max-w-[28.75rem] md:w-[100%] md:ml-[12rem] lg:max-w-[87.5rem] lg:w-[100%] lg:mx-[auto] xl:mx-[auto]">
        <div className="flex flex-col mx-[auto] md:mx-[auto] lg:flex-row-reverse lg:mx-[auto]">
          <div className="max-w-[24.75rem] w-[100%] lg:max-w-[28rem] lg:w-[100%] lg:mr-[18rem] lg:mt-[1.9rem] xl:pl-[-28rem] xl:absolute xl:left-[29rem]">
            <p className="text-[#18214D] text-[1.25rem] font-[Inter] font-[400] leading-[1.75rem] tracking-[-0.025rem] max-w-[30.75rem] w-[100%] md:text-[1.5rem] md:leading-[2rem] lg:max-w-[28rem] lg:w-[100%] lg:text-[1.25rem] lg:font-[400]">
              Log all errors to console.error by default (#21130)
            </p>
          </div>
          <div className="flex flex-row gap-10 mt-[1rem] lg:flex-col-reverse">
            <div className="flex flex-row gap-2 lg:flex-col lg:pr-[66rem]">
              <div className="w-[1.875rem] h-[1.875rem] lg:w-[3.75rem] lg:h-[3.75rem]">
                <img src={Ellipse} alt="Ellipse icon" />
              </div>
              <p className="text-[#18214D] font-[Inter] font-[600] leading-[1.875rem] tracking-[-0.03438rem] lg:max-w-[10rem] lg:w-[100%] lg:text-[1.375rem] lg:font-[600] lg:ml-[-0.5rem]">
                gaearon
              </p>
            </div>
            <div className="max-w-[15.375rem] w-[100%] lg:max-w-[15.875rem] lg:w-[100%] lg:absolute left-[45rem] top-[18.7rem] xl:left-[60rem] xl:top-[17rem]">
              <p className="text-[1.25rem] font-[400] font-[Inter] text-[#18214D] leading-[1.75rem] tracking-[-0.025rem] max-w-[15.375rem] w-[100%] pl-[4rem] lg:text-right lg:text-[1.25rem] lg:font-[Inter] lg:max-w-[22.875rem] lg:w-[100%] ">
                23:30 28/04/2021
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[28.75rem] w-[100%] mx-[2rem] mt-[2rem] md:mx-[auto] md:max-w-[28.75rem] md:w-[100%] md:ml-[12rem] lg:max-w-[87.5rem] lg:w-[100%] lg:mx-[auto] xl:mx-[auto]">
        <div className="flex flex-col mx-[auto] md:mx-[auto] lg:flex-row-reverse lg:mx-[auto]">
          <div className="max-w-[24.75rem] w-[100%] lg:max-w-[28rem] lg:w-[100%] lg:mr-[18rem] lg:mt-[1.9rem] xl:pl-[-28rem] xl:absolute xl:left-[29rem]">
            <p className="text-[#18214D] text-[1.25rem] font-[Inter] font-[400] leading-[1.75rem] tracking-[-0.025rem] max-w-[30.75rem] w-[100%] md:text-[1.5rem] md:leading-[2rem] lg:max-w-[28rem] lg:w-[100%] lg:text-[1.25rem] lg:font-[400]">
              Log all errors to console.error by default (#21130)
            </p>
          </div>
          <div className="flex flex-row gap-10 mt-[1rem] lg:flex-col-reverse">
            <div className="flex flex-row gap-2 lg:flex-col lg:pr-[66rem]">
              <div className="w-[1.875rem] h-[1.875rem] lg:w-[3.75rem] lg:h-[3.75rem]">
                <img src={Ellipse} alt="Ellipse icon" />
              </div>
              <p className="text-[#18214D] font-[Inter] font-[600] leading-[1.875rem] tracking-[-0.03438rem] lg:max-w-[10rem] lg:w-[100%] lg:text-[1.375rem] lg:font-[600] lg:ml-[-0.5rem]">
                gaearon
              </p>
            </div>

            <div className="max-w-[15.375rem] w-[100%] lg:max-w-[15.875rem] lg:w-[100%] lg:absolute left-[45rem] top-[18.7rem] xl:left-[60rem] xl:top-[17rem]">
              <p className="text-[1.25rem] font-[400] font-[Inter] text-[#18214D] leading-[1.75rem] tracking-[-0.025rem] max-w-[15.375rem] w-[100%] pl-[4rem] lg:text-right lg:text-[1.25rem] lg:font-[Inter] lg:max-w-[22.875rem] lg:w-[100%] ">
                23:30 28/04/2021
              </p>
            </div>
          </div>
        </div>
    </div>*/}
    </div>
  );
};

export default ViewCommit;

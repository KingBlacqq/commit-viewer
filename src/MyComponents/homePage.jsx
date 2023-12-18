import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { SEARCH } from "../assets/IMAGES/img";
import { Link } from "react-router-dom";
// import ViewCommit from "./viewCommit";
import Api from "../sevices/axios";
import { useNavigate } from 'react-router-dom';
import ViewCommit from "./viewCommit";


const HomePage = function App() {
  
    const [repos, setRepos] = useState([4]);
    const [repoInput, setRepoInput] = useState([]);
  
    useEffect(() => {
      fetchRepos();
    }, []); 

    const fetchRepos = async () => {
      try {
        const response = await Api.get('/repositories', 
          {
            params: {
              q: 'stars:>0',
              sort: 'stars',
              order: 'desc',
              per_page: 4,
            },

          }
      
      );
        setRepos(response.data.items);
        console.log(response?.data?.items);

      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
      }
    };

    const handleInputChange = (value) =>{
      setRepoInput(value);
      fetchRepos(value);
    }


    // const handleSearchCommits = async() => {
    //   try{
    //     const response = await Api.get('https://api.github.com/search/repositories?q=language:javaScript+sort:stars&per_page=4')
    //     setCommits(response.data.items);
    //   }
    //   catch(err){
    //     console.log(err)
    //   }
    // }
  
    // useEffect(() => {
    //   handleSearchCommits();
    // }, [])

    // const handleChange = (e) => {
    //   setRepos(e.target.value)
    // }
  

    const navigate = useNavigate();

  return (
    <div className="max-w-[28.75rem] w-[100%] h-[56.25rem] mx-[auto] lg:max-w-[87.5rem] lg:w-[100%]">
      <div className="max-w-[28.75rem] w-[100%] mx-[auto] items-center justify-center md:max-w-[87.5rem]md:w-[100%] lg:max-w-[87.5rem] lg:w-[100%]">
        <div className="flex flex-col gap-[0.625rem] items-center justify-center  md:flex-row md:mt-[3rem] lg:gap-[0.625rem] xl:mt-[2rem]">
          <div className="mx-[8.19rem] mt-[1.5rem] lg:mt-[2rem] lg:pr-[15rem] xl:ml-[-10rem]">
            <h2 className="font-[Inter] text-[#18214D] text-[1.75rem] font-[700] tracking-[-0.0375rem]lg:pl-[3rem]">CommitViewer</h2>
          </div>
          <div className="max-w-[10.06rem] w-[100%] mt-[1rem] mx-[9.31rem] md:ml-[10rem] xl:pl-[10rem]">
            <ul className=" text-[1.25rem] font-[Inter] font-[400] text-[#18214D] tracking-[-0.025rem] leading-[1.75rem] text-right flex flex-row gap-4 items-center justify-center  md:flex-row md:gap-9 xl:ml-[9rem] xl:flex xl:between">
              <li className="xl:pl-[3rem]">
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            
          </div>
        </div>
      </div>

      <div className="mt-[2rem] items-center justify-center mx-[auto] md:mx-[auto] md:mt-[3rem] lg:mx-[auto]">
        <div className="max-w-[24.75rem] w-[100%] items-center justify-center mx-[2rem] md:max-w-[33.75rem] md:w-[100%] lg:mx-[auto]">
          <h1 className="font-[Inter] font-[600] text-center text-[#18214D] tracking-[ -0.15rem] text-[3.5rem] leading-[3.5rem] md:text-[4.3rem] md:font-[600] md:leading-[5rem] md:text-center md:ml-[-5rem] lg:text-[4.5rem] lg:text-center lg:mx-[auto]">
            Discover the world of code
          </h1>
        </div>
        <div className=" items-center justify-center max-w-[20.75rem] w-[100%] mx-[4rem] mt-[1.5rem] h-[5.25rem] lg:max-w-[27.8125rem] lg:w-[100%] lg:ml-[] lg:mx-[auto]">
          <p className="text-[#000] font-[Inter] font-[600] leading-[1.75rem] tracking-[ -0.025rem] text-[1rem] text-center md:ml-[-1rem] lg:text-[#3E4462] lg:text-[1.25rem] lg:font-[Inter] lg:text-center">
            Explore open source projects from GitHub, and read their commit
            history to see the story of how they were built.
          </p>
        </div>
      </div>

      <div className="mx-[2rem] md:mx-[auto] md:ml-[2rem]">
        <div className=" flex flex-col items-center justify-center gap-0.5 lg:flex-row  lg:max-w-[87.5rem] lg:w-[100%] lg:gap-2rem" >
          <div className="mt-[4rem] max-w-[24.75rem] w-[100%] lg:max-w-[43.375rem] lg:w-[100%]">
            <div className="absolute top-[15] mt-[1.1rem] ml-[1rem]">
              <SEARCH />
            </div>

            <div className="bg-[#DFE4EA] rounded-md py-[1rem] px-[1rem]
            max-w-[24.75rem] w-[100%] h-[3.625rem] lg:max-w-[43.375rem] lg:w-[100%]">
              
       
              <input
                type="text"
                value={repoInput}
                placeholder="Eg. facebook/react" 
                className="font-[Inter] text-[1.25rem] font-[400] leading-[ 1.75rem] tracking-[-0.03125rem] text-[#29335C] bg-[transparent] ml-[2rem] h-[100%] border-[none] focus:outline-none font-[500]" onChange={(e) => handleInputChange(e.target.value)} />
               
            </div>
          </div>

          

          <button className="max-w-[24.75rem] w-[100%] h-[3.75rem] bg-[#F3663F] rounded-md mt-[2.59rem] lg:w-[20%] lg:mt-[3.85rem] leading-[-0.03125rem font-[Inter] text-[1.25rem] text-center text-[#FFF] font-[600]" onClick={fetchRepos}>
            See commits 🚀
          </button>
         
        </div>
      </div>

      <div className="flex flex-col items-center justify-center pb-[5rem]">
        <div className="max-w-[11.25rem] w-[100%] mt-[2rem]">
          <p className="font-[Inter] text-[ 0.875rem] text-[#3E4462] text-center font-[400] tracking-[-0.025rem]leading-[1.25rem]">
            Or pick one of these suggested repos
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-[1rem] mt-[2rem] lg:flex-row">
        {
          repos.slice(0,4).map((ViewCommit) => (
          <button  
            key={ViewCommit.id} className="font-[Inter] text-[#FFFFFF] bg-[#29335C] text-[1rem] font-[600] h-[2.1875rem] rounded-md px-[1rem]" 
            onClick={() => navigate(`/view-commit/${ViewCommit?.full_name}`)}
          >
            {ViewCommit.full_name}
          </button>
              ))}
          
          {/* <button className="font-[Inter] text-[#FFFFFF] bg-[#29335C] text-[1rem] font-[600] max-w-[10.1875rem] h-[2.1875rem] w-[100%] px-[1rem] rounded-md">

            <Link to="/view-commit">microsoft/vscode</Link>
          </button>
          <button className="font-[Inter] text-[#FFFFFF] bg-[#29335C] text-[1rem] font-[600] max-w-[9.75rem] h-[2.1875rem] w-[100%] rounded-md lg:px-[0.5rem]">
            <Link to="/view-commit">jezen/is-thirteen</Link>
          </button>
          <button className="font-[Inter] text-[#FFFFFF] bg-[#29335C] text-[1rem] font-[600] max-w-[11.875rem] h-[2.1875rem] w-[100%] px-[1rem] rounded-md">
            <Link to="/view-commit">benawad/dogehouse</Link>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

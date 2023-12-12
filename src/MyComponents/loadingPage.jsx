import React from "react";

const LoadingPage = () => {
  
  return (
    <div className=" mx-[auto] xl:h-[48rem]">
      <div className="min-w-[28.75rem] w-[100%] h-[5.125rem] bg-[#DFE4EA] mx-[auto] md:bg-[#EFF2F6] md:h-[10rem] xl:h-[8.125rem]">
        <div className="md:max-w-[87rem] md:w-[100%] md:flex md:flex-col lg:flex-row lg:pt-[3rem] xl:gap-0 xl:ml-[-12rem]">
          <h1 className="min-[400px]:mx-[auto] font-[Inter] font-[700] text-[#18214D] text-[1.75rem] tracking-[-0.0375rem] text-center mx-[auto] pt-[1.5rem] lg:ml-[3rem]  xl:mx-[auto] xl:mt-[-2rem] xl:pl-[20rem]">
            CommitViewer
          </h1>

          <div className="hidden md:flex md:flex-row md:gap-2 md:mx-[auto] md:mt-[1rem] xl:mt-[-1rem] ">
            <div className="md:absolute md:top-[6.1rem] md:ml-[0.9rem] lg:top-[5rem] xl:top-[3rem]">
              <SEARCH />
            </div>
            <div className="">
              <input
                type="text"
                value="microsoft/vscode"
                className="md:px-[2rem] md:py-[1rem] md:rounded-md md:bg-[#DFE4EA] md:pr-[20rem] md:text-[#18214D] md:pl-[3rem] xl:max-w-[41.625rem] xl:w-[100%]"
              />
            </div>
            <button className="md:bg-[#F3663F] md:font-[600] md:font-[Inter] md:text-[#FFF] md:text-[1rem] md:text-[center] md:w-[10.375rem] md:rounded-md md:h-[3.625rem] xl:text-[1.25rem] xl:max-w-[12.375rem] xl:w-[100%]">
              <a href>See Commit 🚀</a>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[17.875rem] w-[100%] mt-[2rem] mx-[auto]">
        <h1 className="text-[1.5rem] font-[Inter] text-center text-[#18214D] font-[600] leading-[2.75rem] tracking-[-0.09375rem]">
          microsoft/vscode
        </h1>
      </div>
   </div>
  );
};

export default LoadingPage;











 // const [commits, setCommits] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState("");

  // const locate = useLocation();

  // useEffect(() => {
  //   setData(data);
  // }, []);

  // const fetchApi = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await Api.get(
  //       `https://api.github.com/search/commits?q=/${data.full_name}`
  //     );
  //     setCommits(response.data.items);
  //     console.log(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  


  // const [ commits, setCommits] = useState([])
  // const [data, setData] = useState(null);
  // const {} = useParams(); 
  

  // useEffect(() => {
  //   const fetchData = async () => {
  //   try {
      
  //     const jsonData = await Api.json(); 
  //     setData(jsonData);
  //   } catch (error) {
  //     console.error('Error fetching Data:', error);
  //   }
  // };
  
  // fetchData();
  // }, []);
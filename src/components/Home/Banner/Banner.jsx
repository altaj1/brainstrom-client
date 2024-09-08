import Lottie from "lottie-react";
import TrustedOrganizations from "./TrustedOrganizations";
import animationData from "../../../../public/animation/banner.json";

const Banner = ({ handelSearch, setSearchText, searchText }) => {
  return (
    <div
      className={`bg-[url('https://i.ibb.co/LCGVdKQ/186441105-1ab701e9-3e64-4973-9ea0-618306b42fe4.jpg')] bg-cover relative h-[800px] w-full`}
    >
      <div className="h-[800px] opacity-85 ml-26  bg-gradient-to-r from-[#350646] to-[#43095A] ">
        <div className="container mx-auto">
          <div className="flex items-center justify-around">
            {/* items-end */}
            <div className="w-[50%] opacity-100">
              {/* absolute bottom-72 lg:right-48 */}
              <div className="z-40  text-[hsl(80,60%,100%)]">
                <h1 className="text-6xl font-semibold">
                  Your Gateway to Exciting Challenges Find Your Contests
                </h1>
                <p className="mb-4">
                  Discover competitions tailored to your passions. Search and
                  filter through contests based on your interests and favorite
                  tags. Whether you're looking to showcase your skills, win
                  prizes, or simply challenge yourself, there's a contest
                  waiting for you!
                </p>
                <form onSubmit={handelSearch}>
                  <input
                    className="input text-gray-900 "
                    type="text"
                    placeholder="Enter search text"
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                  />
                  <br />
                  <input
                    className="p-3 mt-5 text-center font-medium text-white transition duration-200 hover:cursor-pointer rounded shadow-md bg-[#FF6F61]"
                    type="submit"
                    value="Search"
                  />
{/* 
                  <div className="lg:w-full md:w-full w-44 flex items-center lg:rounded-lg md:rounded-lg rounded-l-lg bg-slate-50 hover:outline outline-[#8dbe3f] transition-all duration-150 ease-in-out">
                    <input
                      type="text"
                      name="searchText"
                      placeholder="Search Tourist Mart"
                      className="lg:w-full md:w-full w-44 lg:rounded-lg md:rounded-lg pl-5 focus:outline-none text-gray-800"
                    />
                    <button
                      type="submit"
                      className="text-xl text-gray-800 bg-[#8dbe3f] py-3 pr-5 rounded-r-lg pl-4 hover:bg-[#5b8021] hover:text-yellow-50 transition-all duration-300 ease-in-out"
                    >
                      <IoSearchSharp />
                    </button>
                  </div> */}
                </form>
              </div>
            </div>
            <div className="w-[50%]">
              <img
                src={"https://i.ibb.co.com/sjHDdv4/7885167-3788212.jpg"}
                alt=""
              />
              {/* <Lottie
          className="h-[700px] w-full opacity-50"
          autoplay={true}
          animationData={animationData}
          loop={true}
        ></Lottie> */}
            </div>
          </div>
        </div>
        <div className=" container mx-auto flex items-center ">
          <TrustedOrganizations />
        </div>

        {/* <div className="z-20 absolute hidden lg:block  top-1 text-slate-200 py-10 px-5 ml-32">
          <div className="w-[30%] mt-36">
            <h1 className="text-4xl font-bold mb-4">
              Your Gateway to Exciting Challenges
            </h1>
            <p className="text-lg">
              Step into Brainstorm and explore a world of opportunities. From coding battles to creative contests, we bring you the best platforms to test your mettle and rise to the top. Join now and start your journey to success!
            </p>
          </div>
          <div className="mt-32 ml-7 w-[70%]">
            <TrustedOrganizations />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;

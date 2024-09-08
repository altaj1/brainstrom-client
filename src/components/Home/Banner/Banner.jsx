import Lottie from "lottie-react";
import TrustedOrganizations from "./TrustedOrganizations";
import animationData from "../../../../public/animation/banner.json";
import { IoSearch } from "react-icons/io5";
import { SearchPage } from "../../Shared/SearchPage";
const Banner = ({ handelSearch, setSearchText, searchText }) => {
  return (
    <div
      className={`bg-[url('https://i.ibb.co/LCGVdKQ/186441105-1ab701e9-3e64-4973-9ea0-618306b42fe4.jpg')] bg-cover `}
    >
      <div className=" opacity-85  bg-gradient-to-r from-[#350646] to-[#43095A]  ">
        <div className="container mx-auto text-center p-5">
          <div className="lg:flex md:flex items-center justify-around">
            {/* items-end */}
            <div className="lg:w-[50%] md:w-[50%] opacity-100">
              {/* absolute bottom-72 lg:right-48 */}
              <div className="z-40  text-[hsl(80,60%,100%)] space-y-5">
                <h1 className="lg:text-6xl md:text-5xl text-3xl font-semibold">
                  Your Gateway to Exciting Challenges Find Your Contests
                </h1>
                <p className="mb-4">
                  Discover competitions tailored to your passions. Search and
                  filter through contests based on your interests and favorite
                  tags. Whether you're looking to showcase your skills, win
                  prizes, or simply challenge yourself, there's a contest
                  waiting for you!
                </p>
                <div className=" text-center flex items-center justify-center">
                  {/* <form onSubmit={handelSearch}>
                    <div
                      className="lg:w-96 md:w-full w-72  flex connte items-center lg:rounded-lg md:rounded-lg rounded-l-lg rounded-lg bg-slate-50 hover:outline outline-[#CD5B59] transition-all duration-150 ease-in-out"
                    >
                      <input
                        className="lg:w-96 md:w-full w-72  lg:rounded-lg md:rounded-lg pl-5 focus:outline-none text-gray-800"
                        type="text"
                        placeholder="Enter search text"
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                      />
                      <br />
                      <button
                        type="submit"
                        className="text-xl text-white bg-[#CD5B59] py-3 pr-5 rounded-r-lg pl-4 hover:bg-[#5b8021] hover:text-yellow-50 transition-all duration-300 ease-in-out"
                      >
                        <IoSearch />
                      </button>
                    </div>
                  </form> */}
                  <SearchPage handelSearch={handelSearch} setSearchText={setSearchText} searchText={searchText}></SearchPage>
                </div>
              </div>
            </div>
            <div className="lg:w-[50%] md:w-[50%]">
              <img
                src={"https://i.ibb.co.com/sjHDdv4/7885167-3788212.jpg"}
                alt=""
              />
              {/* <Lottie
          className="  opacity-80"
          autoplay={true}
          animationData={animationData}
          loop={true}
        ></Lottie> */}
            </div>
          </div>
        </div>
        <div className=" container mx-auto flex items-center hidden lg:block md:block ">
          <TrustedOrganizations />
        </div>
      </div>
    </div>
  );
};

export default Banner;

import Lottie from "lottie-react";
import TrustedOrganizations from "./TrustedOrganizations";
import animationData from "../../../../public/animation/banner.json";

const Banner = ({ handelSearch, setSearchText, searchText }) => {
  return (
    <div className={`bg-[url('https://i.ibb.co/LCGVdKQ/186441105-1ab701e9-3e64-4973-9ea0-618306b42fe4.jpg')] bg-cover relative h-[800px] w-full`}>
      <div className="h-[800px] opacity-80 ml-26 mx-auto bg-gradient-to-r from-[#061f31] to-[#03043b] ">
        <Lottie
          className="h-[700px] w-full opacity-50"
          autoplay={true}
          animationData={animationData}
          loop={true}
        ></Lottie>
        <div className="items-end">
          <div className="z-40 absolute bottom-72 lg:right-48 opacity-80 text-slate-200">
            <h1 className="text-4xl">Find Your Contests</h1>
            <p className="mb-4">
              Search for contests based on your interests and tags
            </p>
            <form onSubmit={handelSearch}>
              <input
                className="input text-gray-900 w-80"
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
            </form>
          </div>
        </div>
        <div className="z-20 absolute hidden pt-28 lg:block opacity-80 top-1 text-slate-200 py-10 px-5 ml-32">
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
        </div>
      </div>
    </div>
  );
};

export default Banner;

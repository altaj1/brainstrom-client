const Banner = ({ handelSearch, setSearchText, searchText }) => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-[#061f31] to-pink-500 relative h-[700px] w-full">
        <img
          src="https://i.ibb.co/550RR55/html-css-collage-concept-with-person.jpg"
          className="h-[700px] w-full opacity-50  "
          alt=""
        />
        <div className="z-40 absolute  bottom-72 lg:right-72 text-slate-200 ">
          <h1 className="text-4xl">Find Youe Contests </h1>
          <p className="mb-4">Search for contests based on your interests and tags</p>
          <form onSubmit={handelSearch}>
            <input className="input bg-slate-300 w-80"
              type="text"
              placeholder=" enter serch text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
            <br />
            <input className="p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#FF6F61]" type="submit" />
          </form>
        </div>
        <div className="z-40 absolute hidden pt-40 lg:block bottom-64 text-slate-200 py-10 px-5 w-[30%] ml-32">
      <h1 className="text-4xl font-bold mb-4">Your Gateway to Exciting Challenges</h1>
      <p className="text-lg">Step into Brainstorm and explore a world of opportunities. From coding battles to creative contests, we bring you the best platforms to test your mettle and rise to the top. Join now and start your journey to success!</p>
    </div>
      </div>
    </div>
  );
};

export default Banner;

const DeclareContestCard = ({ contest }) => {
  const { contest_paper, date, participate, price, prizeMoney } = contest;
  console.log(contest);
  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
      <div className="flex space-x-4">
        <img
          alt=""
          src={participate?.image}
          className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
        />
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-semibold">{participate?.name}</p>
          <span>{participate?.email}</span>
          <span className="text-xs dark:text-gray-600 ">
            {new Date(date).toDateString()}
          </span>
        </div>
      </div>
      <div className="divide-y divide-dashed  hover:divide-solid">
        <hr />
      </div>
      <div>
        <h2 className="mb-1 text-xl font-semibold">Submitted Task:</h2>
        <p className="text-sm dark:text-gray-600">{contest_paper}</p>
      </div>
      
      <div className="text-center">
        <button className=" p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#FF6F61]">
          Winner Of The Contest
        </button>
      </div>
    </div>
  );
};

export default DeclareContestCard;

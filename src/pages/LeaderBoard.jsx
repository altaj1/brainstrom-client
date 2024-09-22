import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
const LeaderBoard = () => {
  const [count, setCount] = useState(0);
  const axiosSecure = useAxiosSecure();
  const {
    data: contests = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["leader"],
    queryFn: async () => {
      try {
        // console.log('This is leaderboard result');
        const { data } = await axiosSecure.get(`/leaderboard`);
        console.log("This is leaderboard result", data);
        return data;
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
        throw new Error("Failed to fetch leaderboard data");
      }
    },
  });

  const winCounts = {};
  contests.forEach((contest) => {
    const winner = contest.winerData;
    const winnerEmail = contest.winerData?.winerEmal;

    if (winnerEmail) {
      if (!winCounts[winnerEmail]) {
        winCounts[winnerEmail] = { count: 0, winner: winner };
      }
      winCounts[winnerEmail].count++;
    }
  });

  let topWinner = null;
  let maxWins = 0;
  for (const [winnerEmail, winData] of Object.entries(winCounts)) {
    if (winData.count > maxWins) {
      maxWins = winData.count;
      topWinner = winData.winner;
    }
  }
  const metricsData = [
    {
      value: count,
      title: "Total Contests",
      description: "The total number of contests organized on the platform.",
    },
    {
      value: contests.length,
      title: "Total Participants",
      description:
        "The total number of participants who have taken part in the contests.",
    },
    {
      value: 500,
      title: "Prize Money",
      description:
        "The total amount of prize money awarded to winners across all contests.",
    },
  ];
  useEffect(() => {
    axiosSecure
      .get(`/ContestCount`)

      .then((res) => setCount(res.data.count));
  }, []);
  console.log(topWinner, "this is count");
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <div className="relative font-[sans-serif] min-h-svh before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-60 before:z-10">
        <img
          src="https://readymadeui.com/cardImg.webp"
          alt="Banner Image"
          className="absolute inset-0 w-full min-h-svh h-full object-cover"
        />
        <div className="min-h-[370px] relative z-10 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center px-4 py-8">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">
            Leader Board
          </h2>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 max-lg:gap-12 lg:ml-10 xl:ml-56">
            {metricsData.map((metric, index) => (
              <div key={index} className="text-center ">
                <h3 className="text-white text-[38px] font-bold">
                  <CountUp duration={2.5} end={metric.value} /> +
                </h3>
                {/* <h3 className="text-white text-[38px] font-bold">{metric.value}</h3> */}
                <p className="text-base text-gray-400 font-bold mt-3">
                  {metric.title}
                </p>
                <p className="leading-relaxed text-sm text-gray-200 mt-2">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

           <div className="container mx-auto mt-10 text-gray-200">
     <h1 className="text-3xl font-bold text-center mb-5">Top Winner</h1>
     <p className="text-center">Celebrating our top performers and their outstanding achievements. <br /> Get inspired by their success stories and join the journey to excellence!</p>
 <div className="p-4 shadow-md rounded-lg flex flex-col justify-center items-center mt-14">
    
     <div className="flex items-center space-x-4">
       <img
         src={topWinner?.winerPhoto}
         alt={topWinner?.winerName}
         className="w-36 h-36 rounded-sm "
       />
       <div>
         <p className="font-medium">{topWinner?.winerName}</p>
         <p className="text-sm text-gray-500">{topWinner?.winerEmal}</p>
         <p className="text-xl font-bold">{maxWins/2} Wins</p>
       </div>
     </div>
   </div> 
   {/* <img src={'https://i.ibb.co.com/9wHbmhC/finalists2008-small.jpg'} alt="" /> */}
 </div>
          

        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;

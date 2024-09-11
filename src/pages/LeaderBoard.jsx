import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import LoadingSpinner from "../components/Shared/LoadingSpinner";

const LeaderBoard = () => {
  const axionSecure = useAxiosSecure();
  const { data: contests = [], isLoading } = useQuery({
    queryKey: ["leader"],
    queryFn: async () => {
      const { data } = await axionSecure.get(`/leaderboard`);
      return data;
    },
  });
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
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
  console.log(topWinner, maxWins);
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-5">Leaderboard</h1>
      <p className="text-center">Celebrating our top performers and their outstanding achievements. <br /> Get inspired by their success stories and join the journey to excellence!</p>
      {/* <div className="p-4 bg-white shadow-md rounded-lg flex flex-col justify-center items-center mt-14">
        <h2 className="text-2xl font-bold mb-2">Top Winner</h2>
        <div className="flex items-center space-x-4">
          <img
            src={topWinner?.winerPhoto}
            alt={topWinner?.winerName}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium">{topWinner?.winerName}</p>
            <p className="text-sm text-gray-500">{topWinner?.winerEmal}</p>
            <p className="text-xl font-bold">{maxWins/2} Wins</p>
          </div>
        </div>
      </div> */}
      <img src={'https://i.ibb.co.com/pXHMLBX/toop-winner.jpg'} alt="" />
    </div>
  );
};

export default LeaderBoard;

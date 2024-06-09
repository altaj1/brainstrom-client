

const MyUpcomingContests = () => {
    const sortedContests = contests.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    return (
        <div>
               <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">My Upcoming Contests</h1>
      <ul className="list-disc pl-5">
        {sortedContests.map((contest) => (
          <li key={contest._id} className="mb-2">
            <div className="flex justify-between">
              <span className="font-semibold">{contest.name}</span>
              <span className="text-gray-600">{new Date(contest.deadline).toLocaleString()}</span>
            </div>
            <div>{contest.description}</div>
          </li>
        ))}
      </ul>
    </div>
        </div>
    );
};

export default MyUpcomingContests;
const MyWinningContestDataRow = ({ contest }) => {
  return (
    <tr className="text-center">
      <td className="border px-4 py-2">{contest.title}</td>
      <td className="border px-4 py-2">
        {new Date(contest.to).toDateString()}
      </td>
      <td className="border px-4 py-2">{contest.category}</td>
      <td className="border px-4 py-2">${contest.prizeMoney}</td>
    </tr>
  );
};

export default MyWinningContestDataRow;

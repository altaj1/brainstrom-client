import { differenceInCalendarDays } from "date-fns";
import { Link } from "react-router-dom";

const ContestSubmittedPagesDataRow = ({ participantContest }) => {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <Link
          className="text-gray-900 whitespace-no-wrap"
          to={`/submitPage/${participantContest.contestId}`}
        >
          {participantContest.title}
        </Link>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {participantContest.price}
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {participantContest.prizeMoney}
      </td>
      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          {to.toLocaleString()}
        </td> */}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        about {differenceInCalendarDays(new Date(participantContest.to), new Date(participantContest.from))}{" "}
        <span> days left</span>
      </td>
    </tr>
  );
};

export default ContestSubmittedPagesDataRow;

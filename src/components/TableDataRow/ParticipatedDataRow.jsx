import { Link, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { differenceInCalendarDays } from "date-fns";
import { MdOutlineVerified } from "react-icons/md";

const ParticipatedDataRow = ({participated}) => {
  const {user} = useAuth();
    const {    
title,
 to,
type,
prizeMoney,
date,
contestId,
price,
paymentIntent_status,
submitStatus,
winerData


} = participated;
// console.log(participated)
const handelSubmitPaper = async (e)=>{
    e.preventDefault();
    const contestPaper = e.target.contestPaper.value
    console.log(contestPaper)
    console.log(contestId)
}
   const lastDate = differenceInCalendarDays(new Date(to), new Date())
    return ( 
        <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{title}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          {price}
        </td>
  
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          {prizeMoney}
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          { lastDate} days left
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
         {
          winerData? winerData.winerEmal == user.email?"You Have Won This Contest":"you have loss this contest"
          : lastDate? <Link to={`/submitPage/${contestId}`}>{submitStatus? "You Need To Resubmit Agin": "You have not submitted yet"}</Link> : "Date Over"
         }
      
      
        </td>
        
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
       <div className="flex items-center justify-center gap-2 "> <MdOutlineVerified /> <span>{paymentIntent_status}</span></div>
        </td>
      </tr>
    );
};

export default ParticipatedDataRow;
import { Link, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const ParticipatedDataRow = ({participated}) => {
  const {user} = useAuth();
    
    const axiosSecure = useAxiosSecure()
    const {    
title,
 to,
type,
prizeMoney,
date,
contestId,
price,
} = participated;
// console.log(participated)
const handelSubmitPaper = async (e)=>{
    e.preventDefault();
    const contestPaper = e.target.contestPaper.value
    console.log(contestPaper)
    console.log(contestId)
    

}
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
          {to.toLocaleString()}
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <Link to={`/submitPage/${contestId}`}> Submit Paper</Link>
      
      
        </td>
        
        
      </tr>
    );
};

export default ParticipatedDataRow;
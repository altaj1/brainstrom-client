import { useParams } from "react-router-dom";
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
    // const submetData =  {
    //     contest_id: id,
    //     contest_paper: contestPaper,
    //     participant_info:{
    //         name: user?.displayName,
    //         email: user?.email,
    //         image: user?.photoURL,
    //     }
    //   }
    // const {data} = await axiosSecure.put(`/SubmitPage?id=${id}&email=${user.email}`, submetData);
    // console.log(data)
    // if (data) {
    // console.log("submit secces fully")
    // }

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
          {to.toLocaleString([], { timeZone: "Asia/Dhaka" })}
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button
            onClick={()=>document.getElementById('commentModal').showModal()}
            className="bg-[#FF6F61] p-1 rounded-xl text-white"
          >
            Submit Paper
          </button>
          <dialog id="commentModal"  className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
  
              <div className="mt-10">
              <form onSubmit={handelSubmitPaper}>
              <textarea
                      className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                      name='contestPaper'                  
                      type='text'
                      placeholder='Commet On This Contest'
                      required
                    />
                    <input type="submit" value="Submit" className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#FF6F61]" />
              </form>
              </div>
            </div>
          </dialog>
        </td>
        
        
      </tr>
    );
};

export default ParticipatedDataRow;
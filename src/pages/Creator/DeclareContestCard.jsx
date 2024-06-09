import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { differenceInCalendarDays } from "date-fns";

const DeclareContestCard = ({ contest, refetch }) => {
  const { contest_paper, date, participate, price, prizeMoney, contestId, to } = contest;
  const lastDate = differenceInCalendarDays(new Date(to), new Date())
   
  
//   console.log(contest);
const axiosSecure = useAxiosSecure();
// update contest coloction
const { mutateAsync } = useMutation({
    mutationFn: async (winerData) => {
       
      const { data } = await axiosSecure.put(
        `/update-contest/creator/${winerData.winerCotestId}`,
       { winerData}
      )
      return data
      
    },
    onSuccess: data => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Decler Contest Winer",
            showConfirmButton: false,
            timer: 1500
          });
      console.log(data)
      refetch()
      
    },
});
// update register coloction
const { mutateAsync: updateRegister } = useMutation({
    mutationFn: async (winerData) => {
       
      const { data } = await axiosSecure.put(
        `/update-contest-register/creator/${winerData.winerCotestId}`,
       { winerData}
      )
      return data
      
    },
    onSuccess: data => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Decler Of The  Contest Winer",
            showConfirmButton: false,
            timer: 1500
          });
      console.log(data)
      refetch()
      
    },
});
  const handelWiner = (winerData)=>{
    console.log(winerData)
mutateAsync(winerData)
updateRegister(winerData)
  }
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
            {new Date(to).toDateString()}
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
       {

        lastDate?<button className=" p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#FF6F61]">Decler {lastDate} Days Left</button>
        :
        contest?.winerData ? <button className=" p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#FF6F61]">Already Declared Of Ther Winner</button>
        :   <button onClick={()=>{
            
            const winner = {
                winerName: participate?.name,
                winerEmal: participate?.email,
                winerCotestId:contestId,
                winDate: new Date(),
                winerPhoto:participate?.image               
            }
            handelWiner(winner)
        }} className=" p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#FF6F61]">
          Winner Of The Contest
        </button>
       }
      
      </div>
    </div>
  );
};

export default DeclareContestCard;

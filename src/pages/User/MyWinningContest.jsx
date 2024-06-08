import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import MyWinningContestDataRow from "../../components/TableDataRow/MyWinningContestDataRow";

const MyWinningContest = () => {
  const { user } = useAuth();
  const axionSecure = useAxiosSecure()
  const {data: winningContests =[], isLoading} = useQuery({
    queryKey:['myWinningContest'],
    queryFn: async ()=>{
        const {data} = await axionSecure.get(`/my-Winning-Contest/${user.email}`)
        console.log(data)
        return data
    }
  })
  if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
  }
  console.log(user);
  return (
    <div>
      <div className=" text-center py-12">
        <h1 className="text-4xl font-bold">Congratulations, {user.displayName}!</h1>
        <p className="text-xl mt-4">
          You outstanding achievements
        </p>
        {/* <img src="hero-image.jpg" alt="Winner Image" class="mt-6 mx-auto rounded-full w-48 h-48"> */}
      </div>

      <div className=" p-6 rounded-lg shadow-lg mb-6">
    <h2 className="text-2xl font-bold mb-4">Detailed Contest History</h2>
    <table className="table-auto w-full">
        <thead>
            <tr className=" bg-slate-400 ">
                <th className="px-4 py-2">Contest Name</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Prize</th>
            </tr>
        </thead>
        <tbody>
          {
            winningContests.map((contest, idx)=><MyWinningContestDataRow
            key={idx}
            contest = {contest}
            ></MyWinningContestDataRow>)
          }
           
        </tbody>
    </table>
</div>

{/* 
<!-- Winner's Journey --> */}

<div className=" p-6 rounded-lg shadow-lg mb-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Winner's Journey</h2>
        <p>{user.displayName} started his journey in this year...</p>
        {/* <img src="journey-photo.jpg" alt="Journey Photo" className="mt-4 rounded-lg w-64 h-auto"> */}
    </div>
   
    </div>
  );
};

export default MyWinningContest;

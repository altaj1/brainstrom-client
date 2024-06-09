import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import ParticipatedDataRow from "../../components/TableDataRow/ParticipatedDataRow";
import Heading from "../../components/Shared/Heading";

const MyParticipatedContest = () => {
    const axionSecure = useAxiosSecure();
    const {user} = useAuth();
    console.log(user)
    const{data: participateds = [],} = useQuery({
        queryKey:['participateds'],
        queryFn: async()=>{
            const {data} = await axionSecure.get(`/payment-contest/${user.email}`);
            return data;
            
        }
    })
    console.log(participateds)
    return (
        <>
      <div className='container mx-auto px-4 sm:px-8'>
       <div>
        <Heading title ={
"Your Register Of this Contests"
} subtitle={"You Need To Resubmit Agin"} center ={true} ></Heading>
       </div>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                    >
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                    >
                      Prize Money
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                    >
                      End Date
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                    >
                       Submit Paper
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                    >
                       Payment Status
                    </th>
                    
                 
                  </tr>
                </thead>
                <tbody>
                 {
                    participateds.map((participated, idx)=><ParticipatedDataRow
                    key={idx}
                    participated={participated}
                    ></ParticipatedDataRow>)
                 }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default MyParticipatedContest;
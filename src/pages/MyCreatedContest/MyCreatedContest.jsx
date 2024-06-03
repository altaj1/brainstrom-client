import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ContestDataRow from "../../components/TableDataRow/ContestDataRow";



const MyCreatedContest = () => {
    const { user } = useAuth()
    const {user: logdedUser } =useAuth()
    const axiosSecure = useAxiosSecure()
    //   Fetch Rooms Data

    const {
      data: contests = [],
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ['MyCreatedContest', user?.email],
      queryFn: async () => {
        const { data } = await axiosSecure.get(`/MyCreatedContest/${logdedUser?.email}`)
        return data
      },
    })
    const handelDelete =async (id) =>{
      console.log(id)
      await axiosSecure.delete(`/creator-delete/user/${id}`)
      .then(res => {
          console.log(res.data)
          refetch()
      })
   }

    // console.log(contests)
    if (isLoading) return <LoadingSpinner />
    return (
        <>
        <div className='container mx-auto px-4 sm:px-8'>
          <div className='py-8'>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
              <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                <table className='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Title
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                       Price
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Prize Money
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                       status
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                         Update
                        
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                        Submission
                         
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                      >
                       Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Room row data */}

                    

                       {
                        contests.map((contest, idx) =><ContestDataRow 
                             key={idx}                           
                            contest={contest}
                            handelDelete ={handelDelete}
                            refetch={refetch}                          
                            >
                            </ContestDataRow>
                            
                        )
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

export default MyCreatedContest;
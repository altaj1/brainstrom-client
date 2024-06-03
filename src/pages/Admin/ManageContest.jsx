import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../hooks/useAxiosSecure"
import LoadingSpinner from "../../components/Shared/LoadingSpinner"
import ManageContestDataRow from "../../components/TableDataRow/ManageContestDataRow"


export const ManageContest = () => {
    const axiosSecure = useAxiosSecure()
  //   Fetch users Data
  const {
    data: contests = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['contests'],
    queryFn: async () => {
      const { data } = await axiosSecure(`/all-contests`)
      return data
    },
  })

  console.log(contests)
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
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                  >
                    Catagory
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                  >
                    Status
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                  >
                   Confirm Status
                  </th>

                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                  >
                    Comment
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                  >
                    Delet
                  </th>
                 
                </tr>
              </thead>
              <tbody>

                {
                    contests.map((contest, idx)=><ManageContestDataRow
                    key={idx}
                    contest = {contest}
                    refetch = {refetch}
                    ></ManageContestDataRow>)
                }
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

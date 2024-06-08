import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import ContestSubmittedPagesDataRow from "../../components/TableDataRow/ContestSubmittedPagesDataRow";
import useParticipantContest from "../../hooks/useParticipantContest";



const ContestSubmittedPages = () => {
   const {participantContests, isLoading} = useParticipantContest()
   console.log(participantContests)
   if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>
   }
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
                        Title
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                      >
                        Prize
                      </th>
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                      >                     
                        prizeMoney
                      </th>
    
                      <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                      >
                        Last Time
                      </th>
                      {/* <th
                        scope='col'
                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm  font-normal'
                      >
                        Delet
                      </th> */}
                     
                    </tr>
                  </thead>
                  <tbody>
    
                    {
                        participantContests.map((participantContest, idx)=><ContestSubmittedPagesDataRow
                        key={idx}
                        participantContest= {participantContest}
                        ></ContestSubmittedPagesDataRow>)
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

export default ContestSubmittedPages;
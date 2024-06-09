import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/useAxosCommon";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import { Link } from "react-router-dom";


const ContestAdvertisement = () => {
  const axiosCommon = useAxiosCommon()
  const {data :  latestWinner ={}, isLoading,} = useQuery({
    queryKey:['latestWiner'],
    queryFn: async () => {
        const {data} = await axiosCommon.get(`/latest-winner`)
        // console.log(data)
        return data;
    }
})
if (isLoading) {
  return <LoadingSpinner></LoadingSpinner>
}
console.log(latestWinner)
const {winerData, category
} = latestWinner
    return (
        <div className="py-12 mt-24 w-[65%] mx-auto">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold">Join Our Exciting Contest!</h1>
            <p className="mt-4 text-xl">Showcase your talents and win amazing prizes!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Dynamic Contest Winner Info */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">Congratulations to our latest winner!</h2>
              <div className="flex justify-center md:justify-start items-center">
                <img
                  src={winerData?.winerPhoto}
                  alt="Winner"
                  className="w-32 h-32 rounded-full mr-4"
                />
                <div>
                  <p className="text-lg">{winerData?.winerName}</p>
                  <p className="text-sm">Category: {category}</p>
                  
                </div>
              </div>
            </div>
            {/* Contest Participation Call to Action */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">Your chance to shine!</h2>
              <p className="mb-4">
              Join now and become a contest winner! Unleash your potential and make your mark today!
              </p>
              <Link to='/all-Contest' className="hover:bg-[#FF6F61] bg-[#f3dddb] hover:text-white w-28 rounded-lg shadow-lg p-4">Participate Now</Link>
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContestAdvertisement;
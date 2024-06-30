import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/useAxosCommon";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../../../public/animation/winner.json";


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
        <div className="lg:py-8 mt-5 lg:mt-24 lg:w-[67%]  mx-auto">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold">Join Our Exciting Contest!</h1>
            <p className="mt-4 text-lg">Showcase your talents and win amazing prizes!</p>
          </div>
          <div className="grid lg:pl-16 rounded-lg shadow-lg  md:grid-cols-2 gap-12 items-center">
            {/* Dynamic Contest Winner Info */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">Congratulations to our latest winner!</h2>
              <div className="flex justify-center md:justify-start items-center">
                <img
                  src={winerData?.winerPhoto}
                  alt="Winner"
                  className="w-32 h-32 rounded-full mr-4"
                />
                <div className="text-start">
                  <p className="text-lg">{winerData?.winerName}</p>
                  <p className="text-sm">Category: {category}</p>
                  
                </div>
              </div>
              <div className="text-center md:text-left pt-5">
              <h2 className="text-2xl font-bold mb-4">Your chance to shine!</h2>
              <p className="mb-4">
              Join now and become a contest winner! Unleash your potential and make your mark today!
              </p>
              <Link to='/all-Contest' className="hover:bg-[#FF6F61] pt-4 bg-[#f3dddb] hover:text-white w-28 rounded-lg shadow-lg p-4">Participate Now</Link>
              
            </div>
            </div>
            <div className="w-full">
              <Lottie
              animationData={animationData}
              ></Lottie>
            </div>
            {/* Contest Participation Call to Action */}
           
          </div>
        </div>
      </div>
    );
};

export default ContestAdvertisement;
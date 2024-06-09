import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/useAxosCommon";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import Heading from "../../Shared/Heading";
import ContestCard from "../../Card/ContestCard";


const AllContests = () => {
    const axiosCommon = useAxiosCommon()
    const {data : contests = [], isLoading, refetch} = useQuery({
        queryKey:['contest'],
        queryFn: async () => {
            const {data} = await axiosCommon.get(`/all-contests/user`)
            // console.log(data)
            return data;
        }
    })
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    console.log(contests)
    return (
        <div className="grid grid-cols-1 gap-5 space-y-3">
            <div className="w-[60%] mx-auto">
            <Heading title={"There Are Pure All Contest"} center={true} subtitle={"Welcome to the IoT Innovation Challenge, the premier contest for tech enthusiasts and innovators! This contest is your chance to demonstrate your skills and creativity in the Internet of Things (IoT) domain. Whether you’re a solo inventor or part of a dynamic team, this is your platform to shine and make a significant impact."}></Heading>
            </div>
                {
                    contests.map((contest, idx)=><ContestCard
                    key={idx}
                    contest ={contest}
                    refetch={refetch}
                    ></ContestCard>)
                }
                
            </div>
    );
};

export default AllContests;
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useParticipantContest = () => {
    const axionSecure = useAxiosSecure()
    const {user} = useAuth()
    const {data:participantContests,  isLoading} =useQuery({
        queryKey:['participantContests'],
        queryFn: async ()=>{
            const {data} = await axionSecure.get(`/participantContests/${user.email}`)
           
            return data;
        }
    })
    return {participantContests, isLoading};
};

export default useParticipantContest;
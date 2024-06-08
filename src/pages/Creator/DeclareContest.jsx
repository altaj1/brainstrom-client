import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const DeclareContest = () => {
    const{ id }= useParams();
    const {user} = useAuth()
    const axionSecure = useAxiosSecure()
    const {data:declareContest=[], isLoading} = useQuery({
        queryKey:['DeclareContest'],
        queryFn: async ()=>{
            const {data} = await axionSecure.get(`/declareContest?email=${user.email}&contestID=${id}`)
            // console.log(data)
            return data;
        },
        enabled: !!user.email && !!id,
    })
    // console.log(id)
    return (
        <div className="flex space-x-2">
            {/* <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" /> */}
            <div>
                <h3 className="uppercase">name----------</h3>
                {/* <p>{recipe}</p> */}
            </div>
            <p className="text-yellow-500">$price</p>
        </div>
    );
};

export default DeclareContest;
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxosCommon";
import { useState } from "react";
import Banner from "./Banner/Banner";

const Home = () => {
    const [search, setSearch] = useState('')
    
    const [searchText, setSearchText] = useState('')
    const axiosCommon = useAxiosCommon();
    const handelSearch = (e)=>{
        e.preventDefault()
        console.log("ouch")
        setSearch(searchText)
    }
    const {data : contest = [], isLoading} = useQuery({
        queryKey:['contest', searchText],
        queryFn: async () => {
            const {data} = await axiosCommon.get(`/contest?search=${search}`)
            console.log(data)
            return data;
        }
    })
    return (
        <div>
            <Banner handelSearch ={handelSearch}
            searchText ={searchText}
            setSearchText={setSearchText}></Banner>
            thsi is home
        </div>
    );
};

export default Home;
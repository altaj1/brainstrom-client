import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxosCommon";
import { useState } from "react";
import Banner from "./Banner/Banner";
import LoadingSpinner from "../Shared/LoadingSpinner";
import ContestCard from "../Card/ContestCard";
import Categories from "../Categories/Categories";

const Home = () => {
    const [search, setSearch] = useState('')
    
    const [searchText, setSearchText] = useState('')
    const axiosCommon = useAxiosCommon();

    const handelSearch = (e)=>{
        e.preventDefault()
        console.log("ouch")
        setSearch(searchText)
    }
    const handelCategory = (categorie) =>{
        console.log(categorie)
        setSearch(categorie)
    }
    const {data : contests = [], isLoading} = useQuery({
        queryKey:['contest',  search],
        queryFn: async () => {
            const {data} = await axiosCommon.get(`/contest?search=${search}`)
            // console.log(data)
            return data;
        }
    })
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div>
            <Banner handelSearch ={handelSearch}
            searchText ={searchText}
            setSearchText={setSearchText}></Banner>

            
            <Categories
            handelCategory ={handelCategory}
            ></Categories> 
            <div className="grid grid-cols-1 gap-5 space-y-3">
                {
                    contests.map((contest, idx)=><ContestCard
                    key={idx}
                    contest ={contest}
                    ></ContestCard>)
                }
            </div>
        </div>
    );
};

export default Home;
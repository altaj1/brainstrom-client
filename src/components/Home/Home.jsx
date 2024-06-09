import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxosCommon";
import { useState } from "react";
import Banner from "./Banner/Banner";
import LoadingSpinner from "../Shared/LoadingSpinner";
import ContestCard from "../Card/ContestCard";
import Categories from "../Categories/Categories";
import ContestAdvertisement from "./ContestAdvertisement/ContestAdvertisement";
import Heading from "../Shared/Heading";

import { Link } from "react-router-dom";
import BestContestCreator from "./BestContestCreator";

const Home = () => {
    const [search, setSearch] = useState('')
    
    const [searchText, setSearchText] = useState('')
    const axiosCommon = useAxiosCommon();
   

    const handelSearch = (e)=>{
        e.preventDefault()
        // console.log("ouch")
        setSearch(searchText)
    }
    const handelCategory = (categorie) =>{
        console.log(categorie)
        setSearch(categorie)
    }
   
    const {data : contests = [], isLoading, refetch} = useQuery({
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
    const populerContests = contests.slice(0,6)
    console.log(populerContests, "this is populer contest")
    return (
        <div>
            <Banner handelSearch ={handelSearch}
            searchText ={searchText}
            setSearchText={setSearchText}></Banner>

           
            <Categories
            handelCategory ={handelCategory}
            ></Categories> 
            <div className="grid grid-cols-1 gap-5 space-y-3">
                <div className="w-[60%] mx-auto">
                <Heading title={"This Is Our Popular Contest"} center={true} subtitle={"Dive into the world of the Internet of Things (IoT) and showcase your innovative solutions! This contest is designed to bring together creative minds from around the globe to develop and present groundbreaking IoT projects that can change the world."}></Heading>
                </div>
              
                {
                    populerContests.map((contest, idx)=><ContestCard
                    key={idx}
                    contest ={contest}
                    refetch={refetch}
                    ></ContestCard>)
                }
                <div className="text-center">
                    <Link to='/all-Contest' className="hover:bg-[#FF6F61] bg-[#f3dddb] hover:text-white w-28 rounded-lg shadow-lg p-4">See All</Link>
                </div>
            </div>
            <div>
                <ContestAdvertisement></ContestAdvertisement>
            </div>
            {/* <div>
                <BestContestCreator contests={contests}></BestContestCreator>
            </div> */}
        </div>
    );
};

export default Home;
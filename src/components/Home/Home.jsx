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
import Faq from "./Faq/Faq";
import AboutUs from "./AboutUs";

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
          <div className="">
          <Categories
            handelCategory ={handelCategory}
            ></Categories> 
          </div>
           
            <div className="grid grid-cols-1 gap-5 mt-20 space-y-3 opacity-90">
                <div className="w-[60%] mx-auto">
                <Heading title={"This Is Our Popular Contest"} center={true} subtitle={"Dive into the world of the Internet of Things (IoT) and showcase your innovative solutions! This contest is designed to bring together creative minds from around the globe to develop and present groundbreaking IoT projects that can change the world."}></Heading>
                </div>
               <div className="pt-10">
                
               {
                    populerContests.map((contest, idx)=><ContestCard
                    key={idx}
                    contest ={contest}
                    refetch={refetch}
                    ></ContestCard>)
                }
               </div>
                <div className="text-center opacity-90 ">
                    <button className="w-64"><Link to='/all-Contest' className="hover:border-[#FF6F61] border-r-4 border-b-2 py-3 px-10  hover:  rounded-lg shadow-lg p-4">See All</Link></button>
                </div>
            </div>
            <div className="opacity-90">
                <ContestAdvertisement></ContestAdvertisement>
            </div>
            <div className="opacity-90 pt-20">
                <BestContestCreator ></BestContestCreator>
            </div>
            <div className="w-[65%] mx-auto pb-16 shadow-xl opacity-90 ">
                <Heading title={"General Questions"} center={true} subtitle={'Frequently asked questions about Brainstrom hub and general information.'}></Heading>
                <div className="rounded-lg p-4 "> 
                <Faq></Faq>
                </div>
            </div>
            <div className="w-[65%] mx-auto pb-16 shadow-xl p-12 opacity-90">
                <Heading title={"Welcome to Brainstorm!"} center={true} subtitle={` At Contest Hub, we're passionate about celebrating creativity, talent, and innovation. We believe that everyone deserves a platform to showcase their skills and passions, and that's why we've created a vibrant hub where individuals from all walks of life can come together to participate in exciting contests, challenge themselves, and win amazing prizes.`}></Heading>
                <AboutUs></AboutUs>
            </div>
        </div>
    );
};

export default Home;
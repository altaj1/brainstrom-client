import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/useAxosCommon";
import LoadingSpinner from "../../Shared/LoadingSpinner";
import Heading from "../../Shared/Heading";
import ContestCard from "../../Card/ContestCard";
import { useEffect, useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const AllContests = () => {
    const axiosCommon = useAxiosCommon()
    const [currentPage, setCurrentPage] = useState(0); 
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [count, setCount] = useState(0)
    const numberOfPages = Math.ceil(count / itemsPerPage);

    const pages = [...Array(numberOfPages).keys()];
    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(0);
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    const {data : contests = [],  isLoading,refetch } = useQuery({
        queryKey:['contest', currentPage],
        queryFn: async () => {
            const {data} = await axiosCommon.get(`/all-contests/user?page=${currentPage}&size=${itemsPerPage}`)
            // console.log(data)
            return data;
        }
    })
    // setCount(data.count)
    useEffect( () =>{
        axiosCommon.get(`/ContestCount`)
        
        .then( res=> setCount(res.data.count))
            
    }, [currentPage, itemsPerPage])
   
    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
   
    console.log(count)
    return (
        <div className="grid grid-cols-1 gap-5 space-y-3">
            <div className="lg:w-[60%] md:w-[80%] p-5 mx-auto">
            <Heading title={"There Are Pure All Contest"} center={true} subtitle={"Welcome to the IoT Innovation Challenge, the premier contest for tech enthusiasts and innovators! This contest is your chance to demonstrate your skills and creativity in the Internet of Things (IoT) domain. Whether you’re a solo inventor or part of a dynamic team, this is your platform to shine and make a significant impact."}></Heading>
            </div>
              <div>
              {
                    contests.map((contest, idx)=><ContestCard
                    key={idx}
                    contest ={contest}
                    refetch={refetch}
                    ></ContestCard>)
                }
              </div>
             
                
                <div className='pagination join flex items-center justify-center p-16'>
                
                <button className="flex items-center justify-center gap-1 mr-4" onClick={handlePrevPage}><GrLinkPrevious /> Prev</button>
               <div className="text-2xl space-x-6">
               {
                    pages.map(page => <button
                        className={`${currentPage == page? 'bg-[#FF6F61] text-yellow-50 w-10 rounded-full':""} `}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >{page +1  }</button>)
                }
               </div>
                <button className="flex items-center justify-center gap-1 ml-4" onClick={handleNextPage}>Next <GrLinkNext /></button>
                
            </div>

           
            </div>
    );
};

export default AllContests;
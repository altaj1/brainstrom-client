import { useParams } from "react-router-dom";
import useAxiosCommon from "../../hooks/useAxosCommon";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Shared/LoadingSpinner";

import Heading from "../Shared/Heading";
import Container from "../Shared/Container";
import { useState } from "react";
import RegistrationModal from "../Modal/RegistrationModal";




const ContestDetails = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const closeModal = () => {
      setIsOpen(false)
    }
    const openModal = ()=>{
      setIsOpen(true)
      console.log("kire vai hocche na keno")
    }
    const { id } = useParams()
    const axiosCommon = useAxiosCommon()
  
    const {
      data: contest= {},
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ['cntest', id],
      queryFn: async () => {
        const { data } = await axiosCommon.get(`/detail/contest/${id}`)
        return data
      },
    })
  
    if (isLoading) return <LoadingSpinner />
    console.log(contest)

    const {
        title,
        image,
        from,
        to,
        type,
        prizeMoney,
        price,
        _id,
        description,
    } = contest;
    return ( 
        <Container>
      
      {contest && (
        <div className='max-w-screen-lg mx-auto'>
          {/* Header */}
          <div className='flex flex-col gap-6'>
            <div>
              <Heading title={title} subtitle={""} />
              <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                <img
                  className='object-cover w-full'
                  src={image}
                  alt='header image'
                />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
            
            <div className='col-span-4 flex flex-col gap-8'>
              <div className='flex flex-col gap-2'>
                <div
                  className='
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              '
                >
                 
                </div>
                <div
                  className='
                flex 
                flex-row 
                items-center 
                gap-4 
                font-light
                text-neutral-500
              '
                >
                  <div>Price: ${price}</div>
                  <div>Prize Money: ${prizeMoney}</div>
                  <p>Participants: {contest?.participants || '0'}</p>
                </div>
                <div className='
                flex 
                flex-col
                
                gap-4 
                font-light
                text-neutral-500
              '>
                    <p>Post Date: {new Date(from).toLocaleString("en-BD")}</p>
                    <p>Last Date: {new Date(to).toLocaleString("en-BD")}</p>
                </div>
              </div>

              <hr />
              <div
                className='
          text-lg font-light text-neutral-500'
              >
                {description}
              </div>
              <hr />
            </div>

            <div className='md:col-span-3 order-first md:order-last mb-10'>
            
            {/* <RegistrationModal isOpen={isOpen} closeModal={closeModal}></RegistrationModal> */}
            </div>
          </div>
          <div className="text-end pb-12">

          <button onClick={openModal} className="bg-[#FF6F61] p-3 rounded-lg font-medium text-white hover:shadow-lg">Registration Now</button>
          <RegistrationModal isOpen={isOpen} contest={contest} isEditModalOpen ={isEditModalOpen} closeModal={closeModal}></RegistrationModal>
          </div>
        </div>
      )}
    </Container>
    );
};

export default ContestDetails;
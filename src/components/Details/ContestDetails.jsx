import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../Shared/LoadingSpinner";

import Heading from "../Shared/Heading";
import Container from "../Shared/Container";
import { useState } from "react";
import RegistrationModal from "../Modal/RegistrationModal";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { differenceInCalendarDays } from "date-fns";

const ContestDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
    console.log("kire vai hocche na keno");
  };
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const {
    data: contest = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cntest", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/detail/contest/${id}`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  console.log(contest);

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
    instruction,

    winerData,
    category,
  } = contest;
  const leftDate = differenceInCalendarDays(new Date(to), new Date());
  return (
    <Container>
      {contest && (
        <div className="max-w-screen-lg mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-6">
            <div>
              <Heading title={category} subtitle={""} />
              <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
                <img
                  className="object-cover w-full"
                  src={image}
                  alt="header image"
                />
              </div>
            </div>
          </div>

         
          <div className="flex justify-between gap-2 pt-2">
            <div
              className=" items-center  gap-4 font-light
"
            >
              <p>Price: ${price}</p>
              <p>Prize Money: ${prizeMoney}</p>
              <p>Participants: {contest?.participationCount || "0"}</p>
            </div>
            <div className="space-y-2 font-light">
              <p>Post Date: {new Date(from).toLocaleString()}</p>
              <p>Last Date: {new Date(to).toLocaleString()}</p>
            </div>
          </div>
          <hr />
         
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <div className="col-span-4 space-y-2">
             
              <p className=" text-xl font-semibold">{title}</p>
              <p className="  font-light">
                <span className="font-bold"> description:</span> {description}
              </p>
            </div>
           
            <div className="md:col-span-3 order-first md:order-last ">
              {winerData ? (
                <div>
                  <div className=" p-3">
                    <h1 className="text-lg">Contest Of The Winner</h1>
                  </div>
                  <div className="flex  ">
                    <img
                      src={winerData?.winerPhoto}
                      alt="Winner"
                      className="w-32 h-32  mr-4"
                    />
                    <div>
                      <p className="text-lg">{winerData.winerName}</p>
                      <p className="text-sm">Category: {category}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <h1 className="text-xl font-semibold ">
                  There Are Still {leftDate} Days Left For Win's Decler
                </h1>
                <p> <span className="font-bold">Instruction:</span> {instruction}</p>
                </div>
                
              )}
            </div>
          </div>
          <hr />
          {winerData ? (
            <div className="flex justify-end pb-12  ">
              <h1 className="text-xl font-semibold w-[40%]">
                {" "}
                Not Available!
                <br /> The winner of this contest has been declared
              </h1>
            </div>
          ) : (
            <div className="text-end pb-12 pt-2">
              <button
                onClick={openModal}
                className="bg-[#FF6F61] p-3 rounded-lg font-medium text-white hover:shadow-lg"
              >
                Registration Now
              </button>
              <RegistrationModal
                isOpen={isOpen}
                contest={contest}
                isEditModalOpen={isEditModalOpen}
                closeModal={closeModal}
              ></RegistrationModal>
            </div>
          )}
        </div>
      )}
    </Container>
  );
};

export default ContestDetails;

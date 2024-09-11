import LoadingSpinner from "../Shared/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../hooks/useAxosCommon";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FcBusinesswoman } from "react-icons/fc";
import { useRef } from "react";
import Heading from "../Shared/Heading";

const BestContestCreator = () => {
  // const progressCircle = useRef(null);
  // const progressContent = useRef(null);
  const onAutoplayTimeLeft = (time, progress) => {};
  const axiosCommon = useAxiosCommon();
  const {
    data: creators = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["creatros"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/best-creators`);
      // console.log(data)
      return data;
    },
  });
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  console.log(creators);

  return (
    <div>
      <div>
        <Heading
          title={"Here Is Our Top Contributor"}
          center={true}
          subtitle={
            "This section highlights the individuals who have made the most significant contributions in their respective contests."
          }
        ></Heading>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          
          disableOnInteraction: false,
        }}
        speed={1000} 
        pagination={{
          clickable: true,
        }}
      
        // navigation={true}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {creators.map((cr, index) => (
          <SwiperSlide key={index}>
            <div className="xl:w-[65%] mx-auto space-y-7  shadow-lg rounded-lg lg:p-12 md:p-12 p-5 text-start mb-10">
              <div>
                <img
                  className="h-20 w-20 rounded-full"
                  src={cr.image}
                  alt="img"
                />
                <p className="text-xl font-semibold">{cr.name}</p>
              </div>
              <hr />
              <p className="text-lg font-semibold">{cr.contestName}</p>
              <p className="">{cr.description}</p>
              <h1 className="text-xl flex gap-2 items-center font-normal">
               
                Creators  are very good contest create
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestContestCreator;




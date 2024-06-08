import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import { useState } from "react";
import DeclareContestCard from "./DeclareContestCard";

const DeclareContest = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axionSecure = useAxiosSecure();
  const { data: declareContests = {}, isLoading } = useQuery({
    queryKey: ["DeclareContest"],
    queryFn: async () => {
      const { data } = await axionSecure.get(
        `/declareContest?email=${user.email}&contestID=${id}`
      );

      return data;
    },
    enabled: !!user.email && !!id,
  });
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  const { submitResult, registerResult } = declareContests;
  //    console.log(registerResult, submitResult)

  const mainData = [];

  for (let i = 0; i < registerResult.length; i++) {
    // console.log(element)
    for (let j = 0; j < submitResult.length; j++) {
      if (
        registerResult[i].participate.email ==
        submitResult[j].participant_info.email
      ) {
        const expatedData = { ...registerResult[i], ...submitResult[j] };

        mainData.push(expatedData);

        // console.log(expatedData)
      }
    }
  }
  const title = mainData[0];
  console.log(title);
  // console.log(mainData, 'this is main data')

  return (
    <div className="w-[70%] mx-auto">
      <div className="lg:flex lg:space-x-48  items-center p-8">
        <h3 className="text-3xl font-semibold ">{title.title}</h3>

        <p className="text-rose-500 text-xl">
          Submission Details: {new Date(title.to).toDateString()}
        </p>
      </div>
      <div className="divide-y-4 divide-slate-400/25 "></div>
      <div className="grid lg:grid-cols-2">
        {mainData.map((contest, idx) => (
          <DeclareContestCard key={idx} contest={contest}></DeclareContestCard>
        ))}
      </div>
    </div>
  );
};

export default DeclareContest;

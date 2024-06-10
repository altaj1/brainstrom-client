import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useRole from "../../hooks/useRole";
import LoadingSpinner from "../Shared/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import Chart from "react-google-charts";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../api/utils/utils";
import UpdateContestFrom from "../../pages/MyCreatedContest/UpdateContestFrom";
import UpdateProfileForm from "../Form/UpdateProfileForm";
import Swal from "sweetalert2";

const Profile = () => {
  
  const axiosSecure = useAxiosSecure();
  const { user, updateUserProfile  } = useAuth();
  // Fetch guest Stat Data here
  const { data: statData, isLoading } = useQuery({
    queryKey: ["statData"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user-stat/${user?.email}`);
      return data;
    },
  });

  console.log(statData,"this is stat data");
  const { mutateAsync } = useMutation({
    mutationFn: async updateData => {
      const { data } = await axiosSecure.put(
        `/users/update/${user?.email}`,
        updateData
      )
      return data
    },
    onSuccess: data => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Profiel Update Succesfull",
            showConfirmButton: false,
            timer: 1500
          });
    },
  });
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = async data => {
    const photo  = await imageUpload(data.photoURL[0])
    const name = data.name
    console.log(name)
    const location = data.location
    const address = data.Address
    const updateData = {
        photo, name, location, address
    }
    mutateAsync(updateData)
    updateUserProfile(data.name, photo)
    // console.log(updateData, "this is react hook form data")
          
        
};
  if (isLoading) return <LoadingSpinner />;


  const { winningResult, participateResult } = statData;
  const winPercentage = ((winningResult.length/2)   / participateResult.length) * 100;
  console.log(winPercentage);
  const data = [
    ["Task", "Percentage"],
    ["Win Percentage", winPercentage],
    ["Loss Percentage", 100 - winPercentage],
  ];
  const options = {
    // title: 'Win Percentage',
    // pieHole: 0.4,
    slices: [{ color: "#8AD1C2" }, { color: "#FF8C8C" }],
  };
  return (
    <div>
     
      <div className="w-[70%] mx-auto">
        <div className="text-3xl font-semibold text-center">
        <h1 className="text-4xl">Hey, {user?.displayName}</h1> <br />
          <h2>Your Progess</h2>
        </div>
       {
        winPercentage?  <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />: <p className="text-3xl text-center mt-24">you haven't had a contest partici </p>
       }
      </div>
      <div>
      <div className="text-3xl font-semibold text-center mt-20">
        <h1 className="text-4xl">Update Your Profile</h1> <br />
         
        </div>
        <div className="w-[50%] mx-auto">
          <UpdateProfileForm handleSubmit= {handleSubmit} register={register} onSubmit={onSubmit}></UpdateProfileForm>
        </div>
      </div>
    </div>
  );
};

export default Profile;

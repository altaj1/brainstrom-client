import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import AddContestForm from "./AddContestForm";

import { imageUpload } from "../../api/utils/utils";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AddContest = () => {
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()
    const [imagePreview, setImagePreview] = useState()
    const [imageText, setImageText] = useState('Upload Image')
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
  // console.log(startDate, " now end dates", endDate)
  
    const { mutateAsync } = useMutation({
      mutationFn: async contestData => {
        const { data } = await axiosSecure.post(`/contest`, contestData)
        return data
      },
      onSuccess: () => {
        console.log('Data Saved Successfully')
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Contest Post Successgully",
          showConfirmButton: false,
          timer: 1500
        });
        // navigate('/dashboard/my-listings')
        setLoading(false)
      },
    })
  
    //   Form handler
    const handleSubmit = async e => {
      e.preventDefault()
      setLoading(true)
      const form = e.target
      const type = form.type.value
      const category = form.category.value
      const title = form.title.value
      const to =endDate
      const from = startDate
      const price = form.price.value
      const prizeMoney = form.prizeMoney.value
      const instruction = form.instruction.value
      const description = form.description.value
  
      const image = form.image.files[0]

     
      const contentCreator = {
        name: user?.displayName,
        image: user?.photoURL,
        email: user?.email,
      }
  
      try {
        const image_url = await imageUpload(image)
        const contestData = {
          type,
          category,
          title,
          to,
          from,
          price,
          prizeMoney,
          instruction,        
          contentCreator,
          description,
          image: image_url,
          status: "pending"
        }
        console.log(contestData)
  
        //   Post request to server
        await mutateAsync(contestData)
        form.reset()
      } catch (err) {
        console.log(err)
        toast.error(err.message)
        setLoading(false)
      }
    }
  
    //   handle image change
    const handleImage = image => {
      setImagePreview(URL.createObjectURL(image))
      setImageText(image.name)
    }
    return (
        <div>
      {/* Form */}
      <AddContestForm
       handleSubmit={handleSubmit}
       setImagePreview={setImagePreview}
       imagePreview={imagePreview}
       handleImage={handleImage}
       imageText={imageText}
       loading={loading}
       startDate={startDate} 
       setStartDate = {setStartDate}
       endDate={endDate}
      setEndDate = {setEndDate}
      >

      </AddContestForm>
        </div>
    );
};

export default AddContest;

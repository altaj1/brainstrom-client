import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import AddContestForm from "./AddContestForm";
import { Helmet } from "react-helmet-async";
import { imageUpload } from "../../api/utils/utils";
import toast from "react-hot-toast";


const AddContest = () => {
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()
    const [imagePreview, setImagePreview] = useState()
    const [imageText, setImageText] = useState('Upload Image')
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
  console.log(startDate, " now end dates", endDate)
    //Date range handler
    // const handleDates = item => {
    //   setDates(item.selection)
    // }
  
    // const { mutateAsync } = useMutation({
    //   mutationFn: async roomData => {
    //     const { data } = await axiosSecure.post(`/room`, roomData)
    //     return data
    //   },
    //   onSuccess: () => {
    //     console.log('Data Saved Successfully')
    //     toast.success('Room Added Successfully!')
    //     navigate('/dashboard/my-listings')
    //     setLoading(false)
    //   },
    // })
  
    //   Form handler
    const handleSubmit = async e => {
      e.preventDefault()
      setLoading(true)
      const form = e.target
      const location = form.location.value
      const category = form.category.value
      const title = form.title.value
      const to =endDate
      const from = startDate
      const price = form.price.value
      const guests = form.total_guest.value
      const bathrooms = form.bathrooms.value
      const description = form.description.value
      const bedrooms = form.bedrooms.value
      const image = form.image.files[0]
  
      const host = {
        name: user?.displayName,
        image: user?.photoURL,
        email: user?.email,
      }
  
      try {
        const image_url = await imageUpload(image)
        const roomData = {
          location,
          category,
          title,
          to,
          from,
          price,
          guests,
          bathrooms,
          bedrooms,
          host,
          description,
          image: image_url,
        }
        console.log(roomData)
  
        //   Post request to server
        // await mutateAsync(roomData)
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
             {/* <Helmet>
        <title>Add Room | Dashboard</title>
      </Helmet> */}

      {/* Form */}
      <AddContestForm
    //    handleDates={handleDates}
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
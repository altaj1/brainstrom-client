/* eslint-disable react/prop-types */

import Modal from 'react-modal';
import UpdateContestFrom from '../../pages/MyCreatedContest/UpdateContestFrom';
import { imageUpload } from '../../api/utils/utils';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { IoIosCloseCircleOutline } from "react-icons/io";
const UpdateModal = ({isOpen, closeModal, isEditModalOpen,  contest}) => {

    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(false)
    const { user } = useAuth()
    const [imagePreview, setImagePreview] = useState()
    const [imageText, setImageText] = useState('Upload Image')
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
  // console.log(startDate, " now end dates", endDate)
  console.log(imagePreview)
    const { mutateAsync } = useMutation({
      mutationFn: async contestData => {
        const { data } = await axiosSecure.put(`/update-contest/creator/${contest._id}`, contestData)
        return data
      },
      onSuccess: () => {
        console.log('Data Saved Successfully')
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Contest Update Successgully",
          showConfirmButton: false,
          timer: 1500
        });
        // navigate('/dashboard/my-listings')
        setLoading(false)
        closeModal()
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
      // const from = startDate
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
          // from,
          price,
          prizeMoney,
          instruction,        
          contentCreator,
          description,
          image: image_url,
          // status: "pending"
        }
        console.log(contestData)
  
        //   Post request to server
        await mutateAsync(contestData)
        
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
      console.log(image)
    }

    // handel delete data 
   
    // console.log(contest)
    const customStyles = {
        content: {
          backgroundColor: "lightblue",
          top: '50%',
          left: '50%',
          
          right: 'auto',
          // bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          // marginTop:'50px'
         
        },
      };
      Modal.setAppElement('#root')

    return (
       <div >
         <Modal
        
        isOpen={isOpen}
        // onAfterOpen={isEditModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
       
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <div className='text-right   rounded-full'>
        <button className='btn mt-10  font-bold text-white rounded-full bg-[#FF6F61] text-2xl ' onClick={closeModal}><IoIosCloseCircleOutline /></button>
        </div>
        
        <UpdateContestFrom 
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
       
        ></UpdateContestFrom>
      </Modal>
       </div>
    );
};

export default UpdateModal;
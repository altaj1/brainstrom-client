/* eslint-disable react/prop-types */
import { useState } from "react";
import UpdateModal from "../Modal/UpdateModal";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const ContestDataRow = ({ contest, refetch }) => {
    const [isOpen, setIsOpen] = useState(false)
    const axiosSecure = useAxiosSecure()
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const closeModal = () => {
      setIsOpen(false)
    }
    const openModal = ()=>{
      setIsOpen(true)
      console.log("kire vai hocche na keno")
    }
    // console.log(contest, "contest")
    // console.log(handleDelete)
    const handelDelete = async (id) => {
      // console.log(id);
  
      
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then( async(result) => {
    if (result.isConfirmed) {
  
      await axiosSecure.delete(`/delete-creator-contest/${id}`)
      .then((res) => {
          console.log(res.data);
            refetch()
            if (res.data) {
              Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
            }
  
        });
    }
  });
    };
    return (
        <tr>
      <td className='px-5 py-5 border-b border-gray-200  text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={contest?.image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
          <div className='ml-3'>
            <p className=' whitespace-no-wrap'>{contest?.title}</p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200  text-sm'>
        <p className=' whitespace-no-wrap'>$ {contest?.price}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 e text-sm'>
        <p className=' whitespace-no-wrap'>$ {contest?.prizeMoney}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200  text-sm'>
        <p className=' whitespace-no-wrap'>
          {contest?.status == "Confirm" ?"Accepted": contest?.status }
        </p>
      </td>
      
      <td className='px-5 py-5 border-b border-gray-200  text-sm'>
      <button
      disabled ={contest?.status == "pending"}
          onClick={openModal}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold leading-tight'
        >
          <span
            aria-hidden='true'
            className={`${contest?.status == "pending" ? 'bg-slate-300 text-slate-500' : 'bg-[#FF6F61]' } absolute inset-0     rounded-full`}
          ></span>
          <span className='relative'>Update</span>
        </button>
        {/* Update modal */}
        <UpdateModal contest={contest}  isEditModalOpen ={isEditModalOpen} isOpen={isOpen} closeModal={closeModal}></UpdateModal>
        
      </td>
      <td className='px-5 py-5 border-b border-gray-200  text-sm'>
      <button
          onClick={() => setIsEditModalOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold  leading-tight'
        >
          <span
            aria-hidden='true'
            className={`${contest?.status == "pending" ? 'bg-slate-300 text-slate-500' : 'bg-[#FF6F61]' } absolute inset-0     rounded-full`}
          ></span>
          <span className='relative'>Submission</span>
        </button>
        {/* Delete modal */}
        
        
      </td>
      <td className='px-5 py-5 border-b border-gray-200  text-sm'>
        <button
        disabled ={contest?.status == "pending"}
          onClick={() => handelDelete(contest._id)}
          className={` relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight`} 
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-rose-300 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Delet</span>
        </button>
        
      </td>
    </tr>
    );
};

export default ContestDataRow;
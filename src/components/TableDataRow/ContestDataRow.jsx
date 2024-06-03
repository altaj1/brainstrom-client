/* eslint-disable react/prop-types */
import { useState } from "react";
import UpdateModal from "../Modal/UpdateModal";


const ContestDataRow = ({ contest, handleDelete, refetch }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const closeModal = () => {
      setIsOpen(false)
    }
    console.log(contest, "contest")
    console.log(handleDelete)
    return (
        <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
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
            <p className='text-gray-900 whitespace-no-wrap'>{contest?.title}</p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>$ {contest?.price}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>$ {contest?.prizeMoney}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
          {contest?.status == "Confirm" ?"Accepted": contest?.status }
        </p>
      </td>
      
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
      <button
          onClick={() => ()=>document.getElementById('my_modal_3')}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold leading-tight'
        >
          <span
            aria-hidden='true'
            className={`${contest?.status == "pending" ? 'bg-slate-300 text-slate-500' : 'bg-[#FF6F61]' } absolute inset-0     rounded-full`}
          ></span>
          <span className='relative'>Update</span>
        </button>
        {/* Update modal */}
        <UpdateModal id="my_modal_3"></UpdateModal>
        
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
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
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
        disabled={!contest?.status}
          onClick={() => setIsEditModalOpen(true)}
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
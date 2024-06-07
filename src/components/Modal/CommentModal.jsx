import { useMutation } from '@tanstack/react-query';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Modal from 'react-modal';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const CommentModal = ({isOpen, closeModal, isEditModalOpen,  contest}) => {
    const axiosSecure = useAxiosSecure()
    const { mutateAsync } = useMutation({
        mutationFn: async (commentData) => {
           
          const { data } = await axiosSecure.put(
            `/contest/update/${contest._id}`,
            commentData
          )
          return data
          
        },
        onSuccess: data => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Comment has been saved",
                showConfirmButton: false,
                timer: 1500
              });
          console.log(data)
          
        },
    });
    
    const handelComment =async (e)=>{
        e.preventDefault()
        const comment = e.target.comment.value
        // console.log(comment)
        await mutateAsync({comment:comment})
          e.target.reset()
      }
   
    const customStyles = {
        content: {
          backgroundColor: "lightblue",
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
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

<div className='text-right   rounded-full'>
        <button className='btn mt-10  font-bold text-white rounded-full bg-[#FF6F61] text-2xl ' onClick={closeModal}><IoIosCloseCircleOutline /></button>
        </div>

        <form className='h-96 w-96 ' onSubmit={handelComment}>
            <textarea name="comment" required className='h-80 w-96 rounded-lg p-4' placeholder='Add Your Comment' id="">

            </textarea>
            <input type="submit" value="Submit" className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#FF6F61]" />
        </form>
       </Modal>
     </div>
    );
};

export default CommentModal;
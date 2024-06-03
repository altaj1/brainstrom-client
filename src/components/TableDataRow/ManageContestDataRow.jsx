/* eslint-disable react/prop-types */
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { comment } from "postcss";
import Swal from "sweetalert2";

const ManageContestDataRow = ({ contest, refetch }) => {
  const { user: loggedInUser } = useAuth();
  const [confirm, setConfirm ] = useState(contest?.status);
  const axiosSecure = useAxiosSecure();
  // console.log(contest);
  const { mutateAsync } = useMutation({
      mutationFn: async contestUpdateData => {
        const { data } = await axiosSecure.put(
          `/contest/update/${contest._id}`,
          contestUpdateData
        )
        return data
      },
      onSuccess: data => {
        refetch()
        // console.log(data)
        toast.success('User status updated successfully!')
      },
  });
  const handelConfromStatus = async ()=>{
   await mutateAsync(
      {status:confirm});
  }
  const handelCommet =async (e)=>{
    e.preventDefault()
    const comment = e.target.comment.value
    // console.log(comment)
    await mutateAsync({comment:comment})

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      e.target.reset()
  }

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

    await axiosSecure.delete(`/delete/contest/${id}`)
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
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{contest?.category}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {contest?.status ? (
          <p
            className={`${
              contest.status === "Verified"
                ? "text-green-500"
                : "text-yellow-500"
            } whitespace-no-wrap`}
          >
            {contest.status}
          </p>
        ) : (
          <p className="text-red-500 whitespace-no-wrap">Unavailable</p>
        )}
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <select
          onChange={(e) => setConfirm(e.target.value)}
          className="bg-base-200 p-1 rounded-xl"
        >
          <option>{contest?.status}</option>

          <option value="Confirm">Confirm</option>
        </select>
        <button onClick={handelConfromStatus} className="bg-[#FF6F61] p-1 rounded-xl">
          OK
        </button>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={()=>document.getElementById('commentModal').showModal()}
          className="bg-[#FF6F61] p-1 rounded-xl"
        >
          Comment
        </button>
        <dialog id="commentModal"  className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>

            <div className="mt-10">
            <form onSubmit={handelCommet}>
            <textarea
                    className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                    name='comment'                  
                    type='text'
                    placeholder='Commet On This Contest'
                    required
                  />
                  <input type="submit" value="Submit" className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#FF6F61]" />
            </form>
            </div>
          </div>
        </dialog>
      </td>
      
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => handelDelete(contest._id)}
          className="bg-[#FF6F61] p-1 rounded-xl"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageContestDataRow;

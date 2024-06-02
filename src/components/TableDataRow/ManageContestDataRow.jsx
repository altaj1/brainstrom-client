/* eslint-disable react/prop-types */
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const ManageContestDataRow = ({ contest, refetch }) => {
  const { user: loggedInUser } = useAuth();
  const [confirm, setConfirm ] = useState(contest?.status);
  const axiosSecure = useAxiosSecure();
  console.log(contest);
  const { mutateAsync } = useMutation({
    //   mutationFn: async role => {
    //     const { data } = await axiosSecure.put(
    //       `/users/update/${user?.email}`,
    //       role
    //     )
    //     return data
    //   },
    //   onSuccess: data => {
    //     refetch()
    //     console.log(data)
    //     toast.success('User role updated successfully!')
    //   },
  });

  const handelBlock = () => {
    mutateAsync({
      status: block,
      role: "User",
    });
  };
  const handelUnBlock = () => {
    mutateAsync({
      status: unBlock,
      role: "User",
    });
  };

  const handelRole = () => {
    mutateAsync({ role: role });
  };
  const handelDelete = async (id) => {
    console.log(id);
    await axiosSecure.delete(`/delete/user/${id}`).then((res) => {
      console.log(res.data);
      //   refetch()
    });
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{contest?.category}</p>
      </td>
      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.role}</p>
      </td> */}
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
        <button onClick={handelRole} className="bg-[#FF6F61] p-1 rounded-xl">
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
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
          </div>
        </dialog>
      </td>
      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <select
          onChange={(e) => setUnBlock(e.target.value)}
          className="bg-base-200 p-1 rounded-xl"
        >
          <option>Select</option>
          <option value="Unblock">Unblock</option>
        </select>
        <button onClick={handelUnBlock} className="bg-[#FF6F61] p-1 rounded-xl">
          OK
        </button>
      </td> */}
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

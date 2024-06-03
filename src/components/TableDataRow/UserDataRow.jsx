import { useState } from "react";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";


const UserDataRow = ({ user, refetch }) => {
  const { user: loggedInUser } = useAuth();
  const [block, setBlock] = useState(user?.status);
  const [unBlock, setUnBlock] = useState(user?.status);
  const [role, setRole] = useState(user?.role);
  const axiosSecure = useAxiosSecure();
  const { mutateAsync } = useMutation({
    mutationFn: async role => {
      const { data } = await axiosSecure.put(
        `/users/update/${user?.email}`,
        role
      )
      return data
    },
    onSuccess: data => {
      refetch()
      console.log(data)
      toast.success('User role updated successfully!')
      
    },
  });

 const handelBlock = () =>{
    mutateAsync({
        status:block,
        role:'User'
    })
 }
 const handelUnBlock = () =>{
    mutateAsync({
        status:unBlock,
        role:'User'
    })
 }

 const handelRole = ()=>{
    mutateAsync({role:role})
 }
 const handelDelete =async (id) =>{
    console.log(id)
    await axiosSecure.delete(`/delete/user/${id}`)
    .then(res => {
        console.log(res.data)
        refetch()
    })
 }
  
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.role}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {user?.status ? (
          <p
            className={`${
              user.status === "Verified" ? "text-green-500" : "text-yellow-500"
            } whitespace-no-wrap`}
          >
            {user.status}
          </p>
        ) : (
          <p className="text-red-500 whitespace-no-wrap">Unavailable</p>
        )}
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <select onChange={(e) => setRole(e.target.value)}
        className="bg-base-200 p-1 rounded-xl"
        >
            <option>{user.role}</option>

          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="ContestCreator">Contest Creator</option>
        </select>
        <button onClick={handelRole}  className="bg-[#FF6F61] p-1 rounded-xl" >OK</button>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <select onChange={(e) => setBlock(e.target.value)}
        className="bg-base-200 p-1 rounded-xl"
        >
          <option>Select</option>
          <option value="Block">Block</option>
        </select>
        <button onClick={handelBlock}  className="bg-[#FF6F61] p-1 rounded-xl" >OK</button>
       
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <select onChange={(e) => setUnBlock(e.target.value)}
        className="bg-base-200 p-1 rounded-xl"
        >
          <option>Select</option>
          <option value="Unblock">Unblock</option>
        </select>
        <button onClick={handelUnBlock}  className="bg-[#FF6F61] p-1 rounded-xl" >OK</button>
       
      </td>
      <td  className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button onClick={()=>handelDelete(user._id)}  className="bg-[#FF6F61] p-1 rounded-xl" >Delete</button>
      </td>
    </tr>
  );
};

UserDataRow.propTypes = {
  user: PropTypes.object,
  refetch: PropTypes.func,
};

export default UserDataRow;

import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";



const SubmitPage = () => {
    const {user} = useAuth();
    const {id} = useParams()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const handelSubmit = async(e)=>{
        e.preventDefault();
        const contestPaper = e.target.contestPaper.value
        console.log(contestPaper)
        const submetData =  {
            contest_id: id,
            contest_paper: contestPaper,
            participant_info:{
                name: user?.displayName,
                email: user?.email,
                image: user?.photoURL,
            }
          }
        const {data} = await axiosSecure.put(`/SubmitPage?id=${id}&email=${user.email}`, submetData);
        console.log(data.modifiedCount)
        if (data.modifiedCount || data.insertedId) {
        console.log("submit Successful")
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Submit Successful",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/dashboard/MyParticipatedContest')
        }
    }
    console.log(id)
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl">submit your paper</h1>
           <form className="mt-16 "  onSubmit={handelSubmit}>
           <label htmlFor="">Google DOC Link for This  Contest</label>
            <div>
            <textarea className="textarea textarea-accent overflow-auto h-72 w-96" name="contestPaper" placeholder="Wright Your Contest"></textarea>
            <div className="text-center">
            <input type="submit" className="bg-[#FF6F61] p-3 text-white rounded-xl w-4/6" value="Submit" />
            </div>
            </div>
           </form>
        </div>
    );
};

export default SubmitPage;